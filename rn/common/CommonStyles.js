/**
 * Created by yaojie on 2016/12/7.
 */
'use strict';
import {
    StyleSheet
} from 'react-native';
import ConstantDefine from '../constants/AppConst';

const CommonStyles = StyleSheet.create({
    // 靠左显示容器
    leftContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },

    // 靠右显示容器
    rightContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },

    // 靠上显示容器
    topContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
    },

    // 靠下显示容器
    bottomContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-end'
    }
});

export default CommonStyles;
