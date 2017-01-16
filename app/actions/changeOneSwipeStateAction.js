/**
 * Created by mifind on 2017/1/9.
 */
import  ActionType from '../constants/ActionType';

export function changeOneSwipeState(state) {
    return {
        type: ActionType.ONESWIPE_REFRESH_STATE,
        swipeState:state
    };
}