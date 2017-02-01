class Poll < ActiveRecord::Base
  belongs_to :user
  has_many :candidates, -> { order(:name) }, :dependent => :destroy
  validates :title, presence: true
  validates :user, presence: true
  accepts_nested_attributes_for :candidates, allow_destroy: true
  validates_associated :candidates
  
  scope :alpha, -> {select('polls.id,polls.title, polls.created_at, sum(candidates.vote_count) as total_votes')
                        .joins(:candidates)
                        .group('polls.id')
                        .order(title: :asc)}
  scope :newest, -> {select('polls.id,polls.title, polls.created_at, sum(candidates.vote_count) as total_votes')
                        .joins(:candidates)
                        .group('polls.id')
                        .order(created_at: :desc)}
  scope :popular, -> {select('polls.id,polls.title, polls.created_at, sum(candidates.vote_count) as total_votes')
                        .joins(:candidates)
                        .group('polls.id')
                        .order('total_votes desc')}

  def vote_for(candidate)
    if self.candidates.exists?(candidate) 
      c = self.candidates.find(candidate)
      vote_count = c.vote_count + 1
      c.update(vote_count: vote_count)
      # to-do: return a cookie to mark the time that the user voted
      #cookies[:poll] = self.id
      return true
    else
      return false
    end
  end

  def create_and_vote_for(candidate)
    puts "creating and casting vote for #{candidate}"
    candidate_attrs = [].push(candidate)
    candidate_attrs[0]['vote_count'] = 1
    self.candidates_attributes = candidate_attrs
    if self.save
      return true
    else
      return false
    end
  end

end
