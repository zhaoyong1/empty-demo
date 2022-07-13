import * as API from "./";
export default {
    //登录
    login: params => {
        return API.POST('/account/login', params)
    },
    //跳转系统
    redirect(params) {
        return API.POST('/system/redirect', params)
    },
    //登出
    logout() {
        return API.POST('/account/logout');
    },
    //查询
    query(params) {
        return API.POST('/system/query', params);
    },
    //查询人员授权系统
    queryAccountAuthorizedSys(params) {
        return API.GET('/system/queryAccountAuthorizedSys',params)
    },
}
