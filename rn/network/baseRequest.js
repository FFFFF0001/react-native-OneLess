/**
 * Created by mifind on 16/12/6.
 */

import AppConst from '../constants/ContextConst'
import ResponseCode from '../constants/ResponseCode'
import commonFunction from '../common/commonFunction'

class BaseRequest {
    constructor(body,method) {
        if(!body) {
            body = {}
        }
        Object.assign(body,{
            serviceVersion:AppConst.serviceVersion,
            osType:AppConst.osType,
            channel:AppConst.channel,
            // deviceTdId:store.getState().deviceId.talkingDataId
        });
        this.body = JSON.stringify(body);
        if(!method||(method!='GET'&&method!='POST')) {
            method = 'POST'
        }
        this.method = method;
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
    }

    requestUrl() {
        throw {message:'function requestUrl must be override'}
    }

    async start(successCallback,failCallBack) {
        let self = this;
        let url = AppConst.WebServerUrl + this.requestUrl();
        console.log("url==" + url);
        console.log(this.body);
        // NetInfo.isConnected.fetch().done((isConnected) => {
        //     console.log('First, is ' + (isConnected ? 'online' : 'offline'));
        // });
        let responseJson;
        try {
            let response = await fetch(url, {
                method: this.method,
                headers: this.headers,
                body: this.body
            });
            responseJson = await response.json();
        }
        catch (err) {
            console.log(err);
            commonFunction.alertWithStr("网络不可用，请设置网络");
            failCallBack && failCallBack(err);
            // throw err;
        }

        //TODO 是否需要捕获异常
        console.log('服务端接口' + this.requestUrl() + '回包---------->');
        console.log(responseJson);
        if (!responseJson) {
            return
        }
        if (responseJson.code === ResponseCode.SUCCESS) {
            successCallback(responseJson);
        } else {
            if (responseJson.message && responseJson.message.length > 0) {
                commonFunction.alertWithStr(responseJson.message);
            }
            successCallback(responseJson);
        }
    }
}

export default BaseRequest;