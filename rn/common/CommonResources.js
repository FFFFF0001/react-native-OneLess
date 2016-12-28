/**
 * Created by mifind on 2016/12/10.
 */
var Dimensions = require('Dimensions');
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
var scale = screenWidth / 375.0;
var fontDisparity = 3; //text的fontSize一般要略小于height的差值。
const CommonResources = {
    screen: {
        scale: scale,
        screenHeight: screenHeight,
        screenWidth: screenWidth,
        fontDisparity:fontDisparity,
    }
};

export default CommonResources;