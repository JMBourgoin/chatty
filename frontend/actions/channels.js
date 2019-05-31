import * as ApiUtil from '../util/api_util';
export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveAllChannels = (channels) => {
    return ({
        type: RECEIVE_ALL_CHANNELS,
        channels,
    });
};

const receiveChannel = channel => {
    return ({
        type: RECEIVE_CHANNEL,
        channel
    });
};

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors,
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const fetchAllChannels = () => dispatch => {
    return ApiUtil.fetchAllChannels().then(channels => dispatch(receiveAllChannels(channels)),
        err => (dispatch(receiveErrors(err.responseJSON))
        ));
};

export const fetchChannel = (id) => dispatch => {
    return ApiUtil.fetchChannel(id).then(channel => dispatch(receiveChannel(channel)),
        err => (dispatch(receiveErrors(err.responseJSON))
        ));
};

export const createChannel = (channel) => dispatch => {
    return ApiUtil.createChannel(channel).then(channel => dispatch(receiveChannel(channel)),
        err => (dispatch(receiveErrors(err.responseJSON))
        ));
};



