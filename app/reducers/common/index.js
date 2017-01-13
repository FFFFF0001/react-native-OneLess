import  ActionType from '../../constants/ActionType';
import {combineReducers} from 'redux';

let captureState = false;
function changeTouchCaptureState(state = captureState, action) {
    if (action.type == ActionType.CAPTURE_STATE) {
        console.log('captureState',captureState)
        captureState = action.state;
        return captureState
    }
    return state;
}

let common = combineReducers({
    changeTouchCaptureState: changeTouchCaptureState
});

export default common;

