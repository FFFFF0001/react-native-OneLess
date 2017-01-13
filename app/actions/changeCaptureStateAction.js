/**
 * Created by mifind on 2017/1/9.
 */
import  ActionType from '../constants/ActionType';

export function changeCaptureState(captureState) {
    return {
        type: ActionType.CAPTURE_STATE,
        state:captureState
    };
}