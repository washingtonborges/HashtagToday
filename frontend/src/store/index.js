import { createStore } from 'redux';
import mock from './mock';

const INITIAL_STATE = {
    tweets: mock
};

function reducer(state = INITIAL_STATE, action) {
    console.log(action);
    return state;
}
const store = createStore(reducer);

export default store;