class DashboardsController < ApplicationController
  before_action :authenticate_user!
  def show
    @polls = user_signed_in? ? current_user.polls.alpha : nil
    @candidates = user_signed_in? ? current_user.polls.collect {|p| p.candidates} : nil
    render component: 'Dashboard', props: { polls: @polls }
  end
end