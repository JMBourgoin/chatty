class ChangeColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :email, null: false, unique: true
    change_column :users, :username, null:false, unique: true
  end
end
