FactoryGirl.define do
  factory :candidate do
    sequence(:name) {|n| "Option #{n}"}    
    poll
  end
end
