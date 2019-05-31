import { merge } from 'lodash';
import {
    RECEIVE_ALL_CHANNELS,
    RECEIVE_CHANNEL
} from '../../actions/channels';

const ChannelsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;
    switch (action.type) {
        case RECEIVE_ALL_CHANNELS:
            return action.channels;
        case RECEIVE_CHANNEL:
            newState = merge({}, oldState, { [action.channel.id]: action.name });
            return newState;
        default:
            return oldState;
    }
};

export default ChannelsReducer;
