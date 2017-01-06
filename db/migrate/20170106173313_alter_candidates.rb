class AlterCandidates < ActiveRecord::Migration
  def change
    add_index(:candidates, [:poll_id, :name], unique: true)
  end
end
