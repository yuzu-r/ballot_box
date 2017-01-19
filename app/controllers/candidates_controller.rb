class CandidatesController < ApplicationController
  respond_to :json #, :html
  def show
    @candidate = Candidate.find(params[:id])
  end

  def create
  end

  def show_candidates
    @candidates = Candidate.find(params[:poll_id])
    respond_with @candidates
  end

  def test
    @test_data = Candidate.build_data(params[:poll_id])
    respond_with @test_data
  end

  def poll_results
    @test_data = Candidate.build_data(params[:poll_id])
    puts "poll_results: here is : #{@test_data}"
    render json: @test_data
  end

  private
    def candidate_params
      params.require(:candidate).permit(:id, :poll_id, :user_id)
    end
end