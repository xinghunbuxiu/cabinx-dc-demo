
let _fn = {
    // 装饰参数
    decorateParam: function (param) {
        return param;
    },
    // 统一回调方案
    callbackProxy: function (data) {
        // 这里可以做统一拦截方案 code为多少时需要跳转到登录页，这块需要后端提供 后端目前直接是403
        if (data.code == '0000') {
            //接口请求成功
            return data;
        } else {
            CabinX.notice({
                text: data.msg || '接口请求失败',
                status: 'error'
            });
            return false;
        }
    },
    evt: function () {
        let href = window.location.href;
        let EVT = '';
        if (href.indexOf('https://') > -1) {
            // 测试环境
            if (href.indexOf('https://test') > -1 && href.indexOf('https://test.') == -1) {
                EVT = 'https://test';
            } else if (href.indexOf('https://rd') > -1 && href.indexOf('https://rd.') == -1) {
                EVT = 'https://rd';
                // dev环境
            } else if (href.indexOf('https://dev') > -1 && href.indexOf('https://dev.') == -1) {
                EVT = 'https://dev';
            } else {
                EVT = 'https://'
            }
            return EVT;
        } else {
            // 测试环境
            if (href.indexOf('http://test') > -1 && href.indexOf('http://test.') == -1) {
                EVT = 'http://test';
            } else if (href.indexOf('http://rd') > -1 && href.indexOf('http://rd.') == -1) {
                EVT = 'http://rd';
                // dev环境
            } else if (href.indexOf('http://dev') > -1 && href.indexOf('http://dev.') == -1) {
                EVT = 'http://dev';
            } else {
                EVT = 'http://'
            }
            return EVT;
        }
    }
};
// 对外接口方法
const commonAjax = (data) => {
    let EVT = _fn.evt();
    let cabinxAjax = CabinX.ajax({
        baseUrl: EVT + data.baseUrl,
        withCredentials: true, //允许带cookie
        reqFilter: data.resFilter || _fn.decorateParam,
        resFilter: data.resFilter || _fn.callbackProxy
    });
    //是否展示loading默认false
    let LOADING;
    if (!!data.loading) LOADING = CabinX.loading();
    return new Promise((resolve, reject) => {
        cabinxAjax[data.type]({
            url: data.url,
            params: data.params || {}
        }).then(res => {
            LOADING && LOADING.hideLoading()
            resolve(res);
        }).catch(err => {
            LOADING && LOADING.hideLoading()
            reject(err);
        });
    });

};
export default {
    commonAjax
};