import {
    commonAjax,
} from '../ajax';  // 导入公共的基于cabinx.ajxa二次封装的ajax方法

// 编译模块api
/**
 * @type get post 
 * @url 接口API url
 * @baseUrl 接口域名
 * @params params
 * @loading true false 是否展示loading
 */
export const getCategories = (params) => { // 封装的请求函数1
    return commonAjax({
        type: 'get',
        url: 'cabinx-dc/wm/purchase-category/1.0',
        baseUrl: 'cabinxdcdemo-partner.dmall.com', // 请配置Host 为127.0.0.1
        params: params,
        loading: false,
        resFilter: (data) => (data)
    })
}