require 'rails_helper'

RSpec.describe Candidate, type: :model do
  it 'has a valid factory' do
    candidate_count = Candidate.count
    expect(FactoryGirl.create(:candidate)).to be_valid
    expect(Candidate.count).to eq candidate_count + 1    
  end
  it 'is invalid if name is missing' do
    p = FactoryGirl.create(:poll)
    expect(FactoryGirl.build(:candidate, name: nil, poll: p)).to_not be_valid
  end
  it 'must have a unique name within its poll' do
    p = FactoryGirl.create(:poll)
    c = FactoryGirl.create(:candidate, name:'original', poll: p)
    expect(FactoryGirl.build(:candidate, name: 'original', poll: p)).to_not be_valid
  end
end
