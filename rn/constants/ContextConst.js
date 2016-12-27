/**
 * Created by poype on 16/12/6.
 */


const DEBUG_MODULUS = true; //切换测试和生产环境的开关,true为测试环境,false为生产环境

let AppConst = {
    "version":'1.0.0',
    "serviceVersion":'1.0',
    "osType":"1",
    "channel":"1"
};

if(DEBUG_MODULUS) {
    Object.assign(AppConst,{
        WebServerUrl:"http://10.180.133.63:10086",
    })
} else {
    Object.assign(AppConst,{
        WebServerUrl:"",
    });
}

export default AppConst;

