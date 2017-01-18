class CandidatesController < ApplicationController
  respond_to :json, :html
  def show
    @candidate = Candidate.find(params[:id])
    respond_with @candidate
  end

  def create
  end

  def show_candidates
    @candidates = Candidate.find(params[:poll_id])
    respond_with @candidates
  end

  def test
    @test_data = Candidate.build_data(params[:poll_id])
    puts "here is : #{@test_data}"
    respond_to do |format|
      format.html # show.html.erb
      #format.json { render json: @poll }
    end

  end

  private
    def candidate_params
      params.require(:candidate).permit(:id, :poll_id, :user_id)
    end
end