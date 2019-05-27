import { merge } from 'lodash';
import {
    RECEIVE_ALL_MESSAGES,
    RECEIVE_MESSAGE
} from '../../actions/messages';

const MessagesReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    let newState;
    switch(action.type){
        case RECEIVE_ALL_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:
            newState = merge({}, oldState, { [action.message.id]: action.message} );
            return newState;
        default:
            return oldState;
    }
};

export default MessagesReducer;
