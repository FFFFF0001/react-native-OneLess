import  ActionType from '../../constants/ActionType';
import {combineReducers} from 'redux';

let captureState = false;
function changeTouchCaptureState(state = captureState, action) {
    if (action.type == ActionType.CAPTURE_STATE) {
        captureState = action.state;
        return captureState
    }
    return state;
}


let oneSwipeState = true;
function changeOneSwipeRefreshState(state = oneSwipeState, action) {
    if (action.type == ActionType.ONESWIPE_REFRESH_STATE) {
        oneSwipeState = action.swipeState;
        return oneSwipeState
    }
    return state
}

let common = combineReducers({
    changeTouchCaptureState: changeTouchCaptureState,
    changeOneSwipeRefreshState: changeOneSwipeRefreshState,
});

export default common;

