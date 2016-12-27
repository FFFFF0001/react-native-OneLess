let dimensions = require('Dimensions');
const screenWidth = dimensions.get('window').width;
const screenHeight = dimensions.get('window').height;


let ConstantDefine = {


    "screenWidth": screenWidth,
    "screenHeight": screenHeight,

    "GET_OTP_ACTIVATECARD_NEED_INFO": "13",
    "GET_OTP_ACTIVATECARD_NOT_NEED_INFO": "16",
    "GET_OTP_SET_TEMPORARY_AMOUNT": "15",//设置临时额度
    "GET_OTP_ACTIVATECARD": "14",//激活信用卡
    "GET_OTP_EDITEMAIL": "19",//修改邮箱地址
    "GET_OTP_EDITEBILLADDRESS": "20",//新增、修改账单地址
    "GET_OTP_EDITEHOMEADDRESS": "21",//新增、修改家庭地址
    "GET_OTP_EDITECOMPANYADDRESS": "22",//新增、修改公司地址

    "GET_OTP_OPENMINLIMIT":"23",//开通验密OTP
    "GET_OTP_UPDATEMINLIMIT":"25",//设置验密OTP
    "GET_OTP_CLOSENMINLIMIT":"24",//关闭验密OTP
    "SET_SANP_CARDINFO_OPEN":"1",//开通小额免验密
    "SET_SANP_CARDINFO_UPDATE":"2",//开通小额免验密
    "SET_SANP_CARDINFO_CLOSE":"0",//开通小额免验密

};
export default ConstantDefine;
