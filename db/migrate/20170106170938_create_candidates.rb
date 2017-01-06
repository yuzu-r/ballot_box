class CreateCandidates < ActiveRecord::Migration
  def change
    create_table :candidates do |t|
      t.string :name
      t.string :description
      t.integer :poll_id
      t.integer :vote_count, :default => 0
      t.timestamps null: false
    end
  end
end
