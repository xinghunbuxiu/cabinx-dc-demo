
import '@/layout/widgets/header/header.tpl';
import '@/layout/widgets/header/header.css';

var handle, _fn, CFG, kDom;

CFG = {
    CONTAINER_CLS: 'J_Header'
}

handle = {
    classname: 'demo-header',
    jView: null,
    init: function () {
        _fn.init();//初始化
        _fn.render();//渲染
        _fn.bind();//绑定事件
    }
};

_fn = {
    init: function () {
        kDom = kayak.dom;
        handle.jView = kDom.get(handle.classname, $('.' + CFG.CONTAINER_CLS));
    },
    //渲染模块
    render: function () {
        var jView = handle.jView;
        jView.kInsert();
    },
    //渲染头部信息
    bind: function () {
        var jView = handle.jView;
        if (handle.hasBind) {
            return;
        }
        jView.on('click', function (e) {
            
        });

        handle.hasBind = true;
    },
};
export default handle;