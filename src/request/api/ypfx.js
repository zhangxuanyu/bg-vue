import axios from '@/request/http'; // 导入http中创建的axios实例


let ypfx = {
    //预警概况
    yjgk(){
        return axios.get(``);
    },
    //预警等级分析
    yjdjfx(){
        return axios.get(`/shzl/api/v1/party/org`);
    },
    //预警区域分布
    yjqyfb(){
        return axios.get(`/shzl/api/v1/party/org`);
    },
    //预警处理占比
    yjclzb(){
        return axios.get(`/shzl/api/v1/party/org`);
    },
    //预警趋势分析
    yjqsfx(type){
        return axios.get(`/shzl/api/v1/focus/event`,{
            params:{
                type:type
            }
        });
    },
    //预警转事件占比
    yjzsjzb(){
        return axios.get(`/shzl/api/v1/party/org`);
    },
    //预警风险排名
    yjfxpm(){

    },
    //预警类型占比
    yjlxzb(){
        return axios.get(`/shzl/api/v1/population/caring`);
    },
    //预警转化率
    yyjzhl(){
        return axios.get(`/shzl/api/v1/party/org`);
    },
    //转事件处置状态统计
    zsjczzttj(){

    },
}

export default ypfx;