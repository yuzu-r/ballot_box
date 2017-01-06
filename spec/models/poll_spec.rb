require 'rails_helper'

RSpec.describe Poll, type: :model do
  it 'has a valid factory' do
    poll_count = Poll.count
    expect(FactoryGirl.create(:poll)).to be_valid
    expect(Poll.count).to eq poll_count + 1
  end
  it 'is invalid without a title' do
    u = FactoryGirl.create(:user)
    expect(FactoryGirl.build(:poll, title: nil, user: u)).to_not be_valid

  end
  it 'is invalid without a valid user' do
    expect(FactoryGirl.build(:poll, title: 'hi', user: nil)).to_not be_valid    
  end

end
