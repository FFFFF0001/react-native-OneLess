import { createStore } from 'redux';
import MainReducer from '../reducers';

let store = createStore(MainReducer);

export default store;