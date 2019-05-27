import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import MessagesReducer from './notes_reducer';



const EntitiesReducer = combineReducers({
    users: UsersReducer,
    messages: MessagesReducer,
});

export default EntitiesReducer;
