
import '@/layout/widgets/menu/menu.css';
import '@/layout/widgets/menu/menu.tpl';
import 'cabin/widgets/menu/menu';
var kDom = kayak.dom;
var opt = {
	menu: []
}
var CFG = {
	CONTAINER_CLS: 'J_Menu'
}
var handle = {
	classname: 'demo-menu',
	jView: null,
	init: function (data) {
		_fn.init();
	}
}

var _fn = {
	init: function () {
		handle.jView = kDom.get(handle.classname, $('.' + CFG.CONTAINER_CLS));
		handle.jView.kInsert();

		// opt.menu = data;
		var opt = {
			menu:[
				{
					icon: "cabin-nav-icon",
					id: 1,
					name: "菜单1",
					parent: false,
					children:[
						{
							icon: "cabin-nav-icon",
							id: 101,
							name: "form_table",
							parent: false,
							router: "#index/demo/form_table"
						},
						{
							icon: "cabin-nav-icon",
							id: 101,
							name: "ajax",
							parent: false,
							router: "#index/demo/ajax"
						},
						{
							icon: "cabin-nav-icon",
							id: 102,
							name: "demo",
							parent: false,
							router: "#index/demo/demo"
						}
					]
				}
			]
		}
		//菜单插件加载
		handle.jView.find('.J_menuCont').CabinMenu(opt);

	},
}

export default handle;
