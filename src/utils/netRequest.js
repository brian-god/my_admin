import fetch from 'isomorphic-fetch';
export default async function post(url,params) { 
    //Content-Type: ‘application/json’ 
    let response = await fetch(url, {
        method: 'post',//改成post
        mode: 'no-cors',//跨域
        headers: {//请求头
            'Content-Type': 'application/json'
        },
        body: params//向服务器发送的数据
    });
    let data; 
    if (response.status >= 200 && response.status < 300) { 
        data = await response.json(); 
    }else{ 
        data = {"retCode":false,"retMesg":"服务器异常("+response.status+")"}; 
    } 
    return data; 
}