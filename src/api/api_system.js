import * as API from "./";
export default {
    //查询
    querySystem: params => {
        return API.POST('/system/queryList', params)
    },
    //新增系统
    addSystem(params) {
        return API.POST_json('/system/add', params);
    },
    //修改系统
    updateSystem(params) {
        return API.POST_json('/system/update', params);
    },
    //删除系统
    deleteSystem(params) {
        return API.POST('/system/delete', params)
    },
    //添加系统授权
    addAccountAuth(params) {
        return API.POST_json('/system/addAccountAuth', params)
    },
    //根据id查询单个
    queryById(params) {
        return API.POST('/system/queryById', params)
    },
    //查询用户系统列表
    queryByAccountId(params) {
        return API.POST('/system/queryByAccountId', params);
    }
}
