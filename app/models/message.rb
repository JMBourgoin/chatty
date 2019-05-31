class Message < ApplicationRecord
    validates :body, :user_id, :channel_id, presence: true
    scope :for_display, -> { order(:created_at).last(50) }

    belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

    belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id

end