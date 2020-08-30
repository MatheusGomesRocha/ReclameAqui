import React from 'react';

const initialState = {
    email: '',
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_EMAIL':
            return {...state, email: action.payload.email};
        break;
        case 'SIGN_OUT':
            return initialState;
        break;
    }
    return state;
}