class PollsController < ApplicationController
  respond_to :json
  def index
    respond_with Poll.select('polls.id,polls.title, polls.created_at, sum(candidates.vote_count) as total_votes').joins(:candidates).group('polls.id')
  end

  def show
    respond_with Poll.find(params[:id])
  end

  def new
    @poll = Poll.new
  end

  def create

    @poll = Poll.new(poll_params)
    #@poll = Poll.create(poll_params)
    if @poll.save
      logger.info 'it saved'
      respond_with @poll
    else
      logger.info 'it errored'
      respond_with @poll, status: :unprocessable_entity
    end
  end

  def destroy
    respond_with Poll.destroy(params[:id])
  end

  def update
    poll = Poll.find(params['id'])
    poll.update_attributes(poll_params)
    respond_with poll, json: poll
  end

  private
    def poll_params
      params.require(:poll).permit(:title, :description, :user_id, candidates_attributes: [:id, :name, :_destroy])
    end
end
