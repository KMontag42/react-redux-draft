class CleanupUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :email
    remove_column :users, :encrypted_password
  end
end
