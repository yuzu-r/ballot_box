class Candidate < ActiveRecord::Base
  belongs_to :poll
  validates :poll, presence: true
  validates :name, presence: true
  validates_uniqueness_of :name, scope: :poll_id
end
