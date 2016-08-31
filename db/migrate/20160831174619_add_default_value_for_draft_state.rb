class AddDefaultValueForDraftState < ActiveRecord::Migration[5.0]
  def change
    change_column_default :drafts, :state, { draft: { connectedUsers: [] } }
  end
end
