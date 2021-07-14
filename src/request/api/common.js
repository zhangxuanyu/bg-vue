import axios from '@/request/http'; // 导入http中创建的axios实例


const servicemanager = {
    servicetypeinit(urlParams) {
        return axios.get(`/yth/api/v1/service/type?type=${urlParams.name}`);
    },
    namecheck(name){
        return axios.get(`/yth/api/v1/service/check?name=${name}`);
    },  
    servicetypelist(urlParams) {
        return axios.get(`/yth/api/v1/service/home?id=${urlParams.id}`);
    },
}

export default servicemanager;