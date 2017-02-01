class DashboardsController < ApplicationController
  before_action :authenticate_user!
  def show
    @polls = user_signed_in? ? current_user.polls.alpha : nil
    @polls_json = ActiveModelSerializers::SerializableResource.new(@polls).as_json
    render component: 'Dashboard', props: { polls: @polls_json }
  end
end