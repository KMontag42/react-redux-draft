class AddDraftIdToContestant < ActiveRecord::Migration[5.0]
  def change
    add_column :contestants, :draft_id, :integer
  end
end
