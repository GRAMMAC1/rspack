(function () {
	var __webpack_modules__ = {
		"../helpers/enter.js": function (module, exports, __webpack_require__) {}
	};
	// The module cache
	var __webpack_module_cache__ = {};
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		var cachedModule = __webpack_module_cache__[moduleId];
		if (cachedModule !== undefined) {
			return cachedModule.exports;
		}
		// Create a new module (and put it into the cache)
		var module = (__webpack_module_cache__[moduleId] = {
			// no module.loaded needed
			exports: {}
		});
		// Execute the module function
		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
		// Return the exports of the module
		return module.exports;
	}
	__webpack_require__("../helpers/enter.js");
})();