import axios from '@/request/http'; // 导入http中创建的axios实例


let shzl = {
    part_all(){
        return axios.get(`/shzl/api/v1/party/org`);
    },
    part_person_all(){
        return axios.get(`/shzl/api/v1/party/personnel`);
    },
    part_build(){
        return axios.get(`/shzl/api/v1/party/construction`);
    },
    person_all(){
        return axios.get(`/shzl/api/v1/population/situation`);
    },
    look_person(){
        return axios.get(`/shzl/api/v1/population/caring`);
    },
    look_event(type){
        return axios.get(`/shzl/api/v1/focus/event`,{
            params:{
                type:type
            }
        });
    },
    get_risk_list(){
        return axios.get(`/shzl/api/v1/risk/list`);
    },
    get_financial(){
        return axios.get(`/shzl/api/v1/finance/crime`);
    },
    get_financial_word(){
        return axios.get(`/shzl/api/v1/finance/wordcloud`);
    },
    get_financial_bar(){
        return axios.get(`/shzl/api/v1/finance/crime_type`);
    },
    get_ly_all(){
        return axios.get(`/shzl/api/v1/travel/complaints`);
    },
    get_jq_now(){
        return axios.get(`/shzl/api/v1/travel/passenger`);
    },
    get_yl_now(){
        return axios.get(`/shzl/api/v1/medical/complaints`);
    },
    get_jt_data(){
        return axios.get(`/shzl/api/v1/traffic/accident`);
    },
    get_weather(){
        return axios.get(`http://wthrcdn.etouch.cn/weather_mini?city=常州`);
    }
    
}

export default shzl;