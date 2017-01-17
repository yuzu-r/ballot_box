class Candidate < ActiveRecord::Base
  belongs_to :poll
  validates :name, presence: true
  validates_uniqueness_of :name, scope: :poll_id
end
