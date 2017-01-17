class PollsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :update, :destroy]
  respond_to :json

  def index
    @polls = Poll.select('polls.id,polls.title, polls.created_at, sum(candidates.vote_count) as total_votes').joins(:candidates).group('polls.id')
    render component: 'PollIndex', props: { polls: @polls }, class: 'index'
  end

  def show
    @poll = Poll.find(params[:id])
    @candidates = @poll.candidates
    respond_to do |format|
      format.html # show.html.erb
      #format.json { render json: @poll }
     end
  end

  def new
    @poll = Poll.new
  end

  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      logger.info 'it saved'
      flash[:notice] = 'Poll Created!'
      logger.info @poll.errors
      respond_with @poll
    else
      logger.info 'it errored'
      logger.info @poll.errors
      @poll.errors.add(:base, :invalid)
      respond_with @poll, status: :unprocessable_entity
    end
  end

  def destroy
    respond_with Poll.destroy(params[:id])
  end

  def update
    @poll = Poll.find(params[:id])
    if @poll
      result_of_vote = @poll.vote_for(poll_params['candidates_attributes']['id'])
      @candidates = @poll.candidates
      render json: {:poll => @poll, :candidates => @candidates, :voted => true}
    else
      @poll.errors.add(:base,:invalid)
      respond_with @poll, status: :unprocessable_entity
    end
  end

  private
    def poll_params
      params.require(:poll).permit(:title, :description, :user_id, candidates_attributes: [:id, :name, :vote_count, :_destroy])
    end
end
