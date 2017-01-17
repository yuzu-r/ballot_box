class Poll < ActiveRecord::Base
  belongs_to :user
  has_many :candidates, :dependent => :destroy
  validates :title, presence: true
  validates :user, presence: true
  accepts_nested_attributes_for :candidates, allow_destroy: true

end
