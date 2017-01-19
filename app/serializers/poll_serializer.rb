class PollSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :title, :created_at, :total_votes
  has_many :candidates

  def total_votes
    sum = 0
    object.candidates.each do |c|
      sum += c.vote_count
    end
    sum
  end

  def title
    object.title.upcase
  end

  def created_at
    time_ago_in_words(object.created_at) + ' ago'
  end
end
