import {combineReducers} from 'redux';
import common from './common'
let MainReducer = combineReducers({
    common: common,
});

module.exports = MainReducer;
