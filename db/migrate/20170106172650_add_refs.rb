class AddRefs < ActiveRecord::Migration
  def change
    add_foreign_key :polls, :users
    add_foreign_key :candidates, :polls
  end
end
