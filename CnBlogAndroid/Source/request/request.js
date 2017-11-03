import Config from '../config';
import api from '../api/api.js';
import {authData} from '../config'
import {StorageKey} from '../config'
import * as storage from '../Storage/storage.js'

import {
    ToastAndroid,
	AsyncStorage,
}from 'react-native';

/**
function GetToken(){
    //先获取token，然后再获取信息
	var token = storage.getItem("USER_TOKEN");
    var Body = "client_id=" + authData.clientId + "&client_secret=" + authData.clientSecret + "&grant_type=client_credentials";
    return new Promise((resolve,reject)=>{
        fetch(Config.AccessToken,{
            method : 'POST',
            headers:{
                'Content-Type' : 'application/x-www-form-urlencoded',
            },
            body : Body
        })
        .then((response)=>response.json())
        .then((responseJson)=>{
            resolve("Bearer" + " " + token);
        })
        .catch((error) => {
            throw error;
            reject();
        });
    });
}*/

//这里修改为返回Promise对象(by ZiJiaW)
export function GetInfo(url, token){
    return new Promise((resolve,reject)=>{
        fetch(url,{
            method : 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer' + ' ' + token,
            },
        })
        .then((response)=>response.json())
        .then((jsonData)=>{
            resolve(jsonData);
        })
        .catch((error) => {
            console.error(error);
            reject("rejected");    //如果失败了，那么就返回一个空字符串
        });
    });
}
//异步依赖异步回调的Primise用法 参考https://segmentfault.com/a/1190000005894077?_ea=943171
//这里将上面两个异步作了进一步封装(by ZiJiaW)，promise返回值为该url的json对象
export function Get(url){
	return new Promise((resolve,reject)=>{	
		storage.getItem(StorageKey.USER_TOKEN).then((token)=>{
			return GetInfo(url, token.access_token);
		})
		.then((jsonData)=>{
			resolve(jsonData)
		})
		.catch((error) => {
			console.error(error);
			reject("rejected");
		});
	})
}
