class Poll < ActiveRecord::Base
  belongs_to :user
  has_many :candidates
  validates :title, presence: true
  validates :user, presence: true

end
