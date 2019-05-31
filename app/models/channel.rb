class Channel < ApplicationRecord
    validates :name, presence: true
    validates :direct_message?, inclusion: {in: [true, false]}

    has_many :messages
    has_many :user_channels

    has_many :users,
    through: :user_channels,
    source: :user
end
