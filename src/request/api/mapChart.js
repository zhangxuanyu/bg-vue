import axios from '@/request/http'; // 导入http中创建的axios实例


const mapChart = {
    getChangzhouMap ()
    {
        return axios.get(`/shzl/ui/static/data/changzhou.json`);
    },
    exponential ()
    {
        return axios.get(`/shzl/api/v1/risk/exponential`);
    },
    eventstatistics ()
    {
        return axios.get(`/shzl/api/v1/focus/event/statistics`);
    }
}

export default mapChart;