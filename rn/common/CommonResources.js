/**
 * Created by mifind on 2016/12/10.
 */
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var scale = screenWidth / 375.0;
var fontDisparity = 3; //text的fontSize一般要略小于height的差值。
const CommonResources = {
    colors: {
        white: '#ffffff',
        col_333: "#333333",
        col_efeff4: '#efeff4',
        col_4aa7f6: '#4aa7f6',
        col_0173d3: '#0173d3',
        col_fb5a34: '#fb5a34',
        col_ff8623: '#ff8623',
        col_d3d3d3: "#d3d3d3",
        col_fb5a34: "#fa5a34",
        col_7fc2f9: '#7fc2f9',
        col_3399ff: '#3399ff',
        col_ccc: '#cccccc',
        col_999: '#999999',
        col_ddd: '#dddddd',
        col_fffefe: '#fffefe',
        col_459dfe: '#459dfe',
    },
    screen: {
        scale: scale,
        screenHeight: screenHeight,
        screenWidth: screenWidth,
        fontDisparity:fontDisparity,
    }
};

export default CommonResources;