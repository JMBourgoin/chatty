class DropColumnMessages < ActiveRecord::Migration[5.2]
  def change
    remove_column :messages, :content
    add_column :messages, :body, :string, null: false
  end
end
