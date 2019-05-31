class ChatChannel < ApplicationCable::ChatChannel
    def subscribed
        channel = Channel.find_by(id: [params[:id]])
        stream_for channel
        load(parmas[:id])
    end
end