class PollsController < ApplicationController
  respond_to :json
  def index
    respond_with Poll.all
  end

  def create
    @poll = Poll.new(poll_params)
    if @poll.save
      respond_with @poll
    else
      respond_with @poll.errors, status: :unprocessable_entity
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
      params.require(:poll).permit(:name, :user)
    end
end
