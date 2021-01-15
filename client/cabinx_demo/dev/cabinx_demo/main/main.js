//cmd 转 amd
window.aDefine = function (id, deps, factory) {
	define(id, deps, function (require, exports, module) {
		var depOjbs = [];
		if (deps && deps.length > 0) {
			deps.forEach(function (v, k) {
				// debugger;
				depOjbs.push(require(v));
			});
		}

		if (factory && typeof factory === "function") {
			var exp = factory.apply(this, depOjbs);
			if (exp && exp.default) {
				//如果是一个cabin页面，则转移一些变量st
				// debugger;
				if (exp.default.cabinVue) {
					exp.default.cabinVue.render = exp.default.render;
					exp.default.cabinVue.staticRenderFns =
						exp.default.staticRenderFns;
					exp.default.cabinVue.__file = exp.default.__file;
					exp.default.cabinVue._compiled = exp.default._compiled;
					exp.default.cabinVue._scopeId = exp.default._scopeId;
				}
				//如果是一个cabin页面，则转移一些变量ed
				module.exports = exp.default;
			} else {
				module.exports = exp;
			}
		}
	});
};
(function () {
	var handle;
	define('cabinx_demo/main/main', function (require, exports, module) {
		'kayak-version #versionTime#'; /*发布上线改版本号*/
		'#requireTarget#';

		window.Layout = require('cabincore/layout/layout');
		module.exports = handle;
	});
})();