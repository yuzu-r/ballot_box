require 'rails_helper'
RSpec.describe DashboardsController, type: :controller do
  describe 'user dashboard' do
    it 'accesses the dashboard when a user is signed in' do
      u = FactoryGirl.create(:user)
      sign_in u 
      get :dashboard
      expect(response).to have_http_status(:success)
    end
  end

end