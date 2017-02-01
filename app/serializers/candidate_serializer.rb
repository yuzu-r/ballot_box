class CandidateSerializer < ActiveModel::Serializer
  attributes :id, :name, :poll_id, :vote_count, :updated_at
end
