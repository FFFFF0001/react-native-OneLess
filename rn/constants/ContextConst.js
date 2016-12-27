/**
 * Created by poype on 16/12/6.
 */


const DEBUG_MODULUS = true; //切换测试和生产环境的开关,true为测试环境,false为生产环境

let AppConst = {
    "version":'1.5.0',
    "serviceVersion":'1.0',
    "osType":"1",
    "channel":"1"
};

if(DEBUG_MODULUS) {
    Object.assign(AppConst,{
        WebServerUrl:"http://10.180.133.63:10086",
        // WebServerUrl:"http://192.168.1.102:10086",
        ONLINE_CUSTOMER : "http://eim-talk-stg.dmzstg.pingan.com.cn/appim-pir/talk?weAppNo=PAXYK_09&businessType=3&subBizType=robot&",
        TOA_MOBILE_DOMAIN : "https://wap-ebank-stg.pingan.com.cn:8021",
        APPLY_DOMAIN : "http://pacesapplystg1.pab.com.cn",
        CCMS_GUOMI_XKEY:"89498fa8c0aefbc9ddaaa3fcb70720dfacfb1120a9eeead37024d8fddefc3057",
        CCMS_GUOMI_YKEY:"f2f1376e851ec2b11a0d7c29c73edb1b2b7b5a825c087e1eb832ed6635645072",
        GUOMI_XKEY:"8ACED44BEE6DA4AFB1A58D962E104A0B5666EACAD93F11C6A1C463EA47A4A2F9",
        GUOMI_YKEY:"026212B96D48E105F8A15595E07FE24373080753CCAD2BB1DAB293C9303E6EFD"
    })
} else {
    Object.assign(AppConst,{
        WebServerUrl:"https://capp.pingan.com.cn/paces_ccms_core",
        ONLINE_CUSTOMER : "http://eim.pingan.com.cn:8141/appim/talk?weAppNo=PAXYK_09&businessType=3&subBizType=robot&",
        TOA_MOBILE_DOMAIN : "https://wap-ebank.pingan.com",
        APPLY_DOMAIN : "https://c.pingan.com",
        CCMS_GUOMI_XKEY:"8809c42844935fa7067a702ef17dd6e93004655b03d695e8810a6c9e5f9dfdcb",
        CCMS_GUOMI_YKEY:"36f212a737a875d580d4c363bf3d75327d8e81b4c55e430073a0cfe26f68829c",
        GUOMI_XKEY:"BA7412BE34D4687FA5FEF674B74FA32AD31E7418B5A9AA404BFF752D7DD63978",
        GUOMI_YKEY:"14F081726C6B02A802EB82460697B781C5AAB3E4A4F3ECB6D651AD482A835E8C"
    });
}

export default AppConst;

