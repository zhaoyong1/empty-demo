import * as API from "./";
export default {
    //新增用户
    addPeople: params => {
        return API.POST_json('/account/add', params)
    },
    //删除用户
    deletePeople(params) {
        return API.POST('/account/delete', params)
    },
    //更新用户
    editPeople(params) {
        return API.POST_json('/account/update', params)
    },
    //查询人员列表
    queryAll(params) {
        return API.GET('/account/queryAll',params)
    },
    //查询人员
    queryPeople(params) {
        return API.POST('/account/query', params)
    },
    //查询角色列表
    queryRoleList() {
        return API.GET('/account/queryRoleList')
    }
}
