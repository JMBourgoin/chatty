// SESSION----------------------------------------------------------------------

export const createUser = user => {
    return $.ajax({
        url: 'api/users',
        method: 'POST',
        data: { user }
    });
};

export const createSession = user => {
    return $.ajax({
        url: 'api/session',
        method: 'POST',
        data: { user }
    });
};

export const deleteSession = () => {
    return $.ajax({
        url: `api/session/`,
        method: 'DELETE',
    });
};

// MESSAGES -------------------------------------------------------------------

export const fetchAllMessages = () => {
    return $.ajax({
        url: 'api/messages/',
        method: 'GET'
    });
};

export const fetchMessage = id => {
    return $.ajax({
        url: `api/messages/${id}`,
        method: 'GET'
    });
};

export const createMessage = message => {
    return $.ajax({
        url: `api/messages/`,
        method: 'POST',
        data: { message }
    });
};

// Channels ---------------------------------

export const fetchAllChannels = () => {
    return $.ajax({
        url: 'api/channels/',
        method: 'GET'
    });
};

export const fetchChannel = id => {
    return $.ajax({
        url: `api/channels/${id}`,
        method: 'GET'
    });
};

export const createChannel = channel => {
    return $.ajax({
        url: `api/channel/`,
        method: 'POST',
        data: { channel }
    });
};

