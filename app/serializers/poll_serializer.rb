class PollSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :title, :created_at, :total_votes, :last_voted_on
  has_many :candidates

  def title
    object.title.upcase
  end

  def created_at
    time_ago_in_words(object.created_at) + ' ago'
  end

  def total_votes
    if !@instance_options[:total_votes]
      sum = 0
      object.candidates.each do |c|
        sum += c.vote_count
      end
      sum      
    end
  end

  def last_voted_on
    last_voted = object.created_at
    object.candidates.each do |c|
      if c.updated_at > last_voted
        last_voted = c.updated_at
      end
    end
    return total_votes == 0 ? 'never' : time_ago_in_words(last_voted) + ' ago'
  end
end
