class PollsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :update, :destroy, :add_choice]
  respond_to :json

  def index
    sort_by = filtering_params['sort'] || 'alpha'
    @polls = Poll.send(sort_by)
    render component: 'PollIndex', props: { polls: @polls }, class: 'index'
  end

  def owner_index
    @polls = user_signed_in? ? current_user.polls.alpha : nil
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
      flash[:notice] = 'Poll Created!'
      render json: {:poll => @poll} 
    else
      logger.info 'it errored'
      logger.info @poll.errors
      @poll.errors.add(:base, :invalid)
      flash[:warning] = 'There was an error. Poll not created.'
      render json: {:poll => @poll.errors, status: :unprocessable_entity}
    end
  end

  def destroy
    Poll.destroy(params[:id])
    flash[:notice] = 'Poll Deleted.'
    redirect_to dashboard_path
  end

  def vote
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

  def add_choice
    @poll = Poll.find(params[:id])
    if @poll
      result_of_custom = @poll.create_and_vote_for(new_choice_params['candidates_attributes'])
      if result_of_custom
        @candidates = @poll.candidates
        render json: {:poll => @poll, :candidates => @candidates, :voted => true}
      else
        render json: {:poll => @poll.errors.add, status => :unprocessable_entity}
      end
    else
      @poll.errors.add(:base,:invalid)
      respond_with @poll, status: :unprocessable_entity
    end

  end

  private
    def filtering_params
      par = params.slice(:sort)
      return ['alpha','newest','popular'].include?(par[:sort]) ? par : 'alpha'
    end

    def new_choice_params
      params.require(:poll).permit(candidates_attributes: [:name])
    end

    def poll_params
      params.require(:poll).permit(:title, :description, :user_id, candidates_attributes: [:id, :name, :vote_count, :_destroy])
    end
end
