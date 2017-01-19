class Candidate < ActiveRecord::Base
  belongs_to :poll
  has_one :user, :through => :polls
  validates :name, presence: true
  validates_uniqueness_of :name, scope: :poll_id

  def self.build_data(poll_id)
    raw_data = Candidate.select('name, vote_count').where('poll_id=?', poll_id).to_a
    data_hash = {}
    raw_data.each do |c|
      data_hash[c.name] = c.vote_count
    end
    return data_hash
  end
end
