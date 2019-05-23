class CreateUniqueIndexUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :unique_index_users do |t|
      add_index :users, :username, unique: true
      add_index :users, :email, unique: true
    end
  end
end
