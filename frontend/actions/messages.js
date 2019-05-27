import * as ApiUtil from '../util/api_util';
export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllMessages = (messages) => {
    return ({
        type: RECEIVE_ALL_MESSAGES,
        messages,
    });
};

const receiveMessage = message => {
    return ({
        type: RECEIVE_MESSAGE,
        message
    });
};

const removeMessage = (id) => {
    return ({
        type: DELETE_MESSAGE,
        id
    });
};

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const fetchAllMessages = () => dispatch => {
    return ApiUtil.fetchAllMessages().then(messages => dispatch(receiveAllMessages(messages)),
        err => (dispatch(receiveErrors(err.responseJSON))
        ));
};

export const fetchMessage = (id) => dispatch => {
    return ApiUtil.fetchMessage(id).then(message => dispatch(receiveMessage(message)),
        err => (dispatch(receiveErrors(err.responseJSON))
        ));
};

export const createMessage = (Message) => dispatch => {
    return ApiUtil.createMessage(Message).then(message => dispatch(receiveNote(message)),
        err => (dispatch(receiveErrors(err.responseJSON))
        ));
};

export const deleteMessage = (id) => dispatch => {
    return ApiUtil.deleteNote(id).then(id => dispatch(removeMessage(id)),
        err => (dispatch(receiveErrors(err.responseJSON))
        ));
};


