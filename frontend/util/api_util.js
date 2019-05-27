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

export const createMessage = notebook => {
    return $.ajax({
        url: `api/messages/`,
        method: 'POST',
        data: { message }
    });
};


