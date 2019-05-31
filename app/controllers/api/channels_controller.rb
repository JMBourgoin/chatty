class ChannelsController < ApplicationController
    def index
        @channels = Channel.all.includes(:user_channels)
    end

    def show
        @channel = Channel.includes(:user_channels).find_by(id: params[:id])
    end

    def create
        @channel = Channel.new(channel_params)
        @channel["direct_message?"] = false
        if @channel.save
            @channel.users << User.all
            render "api/channels/show"
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def create_dm
        @cahnnel
    end

    def destroy
    end
end