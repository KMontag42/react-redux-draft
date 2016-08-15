class CreateContestants < ActiveRecord::Migration[5.0]
  def change
    create_table :contestants do |t|
      t.string :name
      t.string :picture
      t.string :tribe

      t.timestamps
    end
  end
end
