class Poll < ActiveRecord::Base
  belongs_to :user
  has_many :candidates, :dependent => :destroy
  validates :title, presence: true
  validates :user, presence: true
  accepts_nested_attributes_for :candidates, allow_destroy: true
  validates_associated :candidates

  def vote_for(candidate)
    puts "voting for: #{candidate}"
    if self.candidates.exists?(candidate) 
      c = self.candidates.find(candidate)
      vote_count = c.vote_count + 1
      c.update(vote_count: vote_count)
      # to-do: return a cookie to mark the time that the user voted
      return true
    else
      return false
    end
  end
end
