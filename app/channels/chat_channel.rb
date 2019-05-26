class ChatChannel < ApplicationCable::ChatChannel
    def subscribed
        stream_from "chat_#{params[:room]}"
    end
end