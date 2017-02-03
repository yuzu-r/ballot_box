class CandidatesController < ApplicationController
  respond_to :json
  def show
    @candidate = Candidate.find(params[:id])
  end

  def create
  end

  def show_candidates
    @candidates = Candidate.find(params[:poll_id])
    respond_with @candidates
  end

  def poll_results
    @test_data = Candidate.build_data(params[:poll_id])
    render json: @test_data
  end

  private
    def candidate_params
      params.require(:candidate).permit(:id, :poll_id, :user_id)
    end
end