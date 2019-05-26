class Message < ApplicationRecord
    validates :content, :user_id, presence: true
    scope :for_display, -> { order(:created_at).last(50) }

    belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

end