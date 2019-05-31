import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { currentUserId: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
    };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.getState = store.getState();

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store }/>, root);
});