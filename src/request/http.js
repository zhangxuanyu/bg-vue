/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import router from '../router';
import store from '../store/index';

function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name) return arr[1];
    }
    return "";
}

const tip = msg => {
    console.log(msg)
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
// const toLogin = () => {
//     router.replace({
//         path: '/awecloud/login/#/',
//         query: {
//             redirect: router.currentRoute.fullPath
//         }
//     });
// }

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        case 400: tip('请求错误(400)'); break;
        // 401: 未登录状态，跳转登录页
        case 401:
            // toLogin();
            break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            localStorage.removeItem('token');
            store.commit('loginSuccess', null);
            setTimeout(() => {
                // toLogin();
            }, 1000);
            break;
        case 404: tip('请求的资源不存在'); break;
        case 408: tip('请求超时(408)');
        case 500: tip('服务器错误(500)');
        case 501: tip('服务未实现(501)');
        case 502: tip('网络错误(502)');
        case 503: tip('服务不可用(503)');
        case 504: tip('网络超时(504)');
        case 505: tip('HTTP版本不受支持(505)');
        default: tip(`连接出错,${other}`);
    }
}

// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
instance.interceptors.request.use(
    config => {
        // const token = store.state.token;
        // var token = 'Basic cm9vdA%3D%3D'
        // token && (config.headers.Authorization = token);
        // const token = store.state.token;
        // var token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXh0IjoibGltaW5nZSIsInR5cGUiOiJ1c2VyIn0.YUPQ-3nttgfRGOUV4T06JZ6osH46nZ0UUolYdEBhvSQ'
        // token && (config.headers.Authorization = token);

        // if(config.headers.Authorization!="headers"){
        //     const token = process.env.DRONE_TOKEN ? process.env.DRONE_TOKEN : Conf.token;
        //     var Authorization = `Bearer ${token}`
        //     token && (config.headers.Authorization = Authorization);
        // }else{
        // config.headers.Authorization = '';
        // }
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
    // 请求成功
    res => res.status === 200|| res.status === 201? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.errmessage);
            return Promise.reject(response);
        }
    });

export default instance;
