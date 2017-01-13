FactoryGirl.define do
  factory :poll do
    sequence(:title) {|n| "Poll #{n}"}    
    user
  end
end
