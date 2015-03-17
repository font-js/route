/**
 * route.js
 * @authors Qv (foru.fy@gmail.com)
 * @date    2015-03-16 19:30:59
 * @version 0.0.1
 */
function define(fn) {
	return new route(fn);
};

function route(fn) {
	this.fn = fn;
	this.initialization();
}

route.prototype = {

	load: function() {
		this.hash = location.hash;

		var isGoto = ~this.hash.indexOf('#') && (this.hash.charAt(this.hash.indexOf('#') + 1) !== '!');

		if (!isGoto) {
			this.parameters = (location.hash.split('#!')[1] ? location.hash.split('#!')[1].split('/') : ['']);
			this.fn(this);
		}
	},
	initialization: function() {
		window.onload = window.onhashchange = (function(self) {
			return function() {
				self.load.call(self);
			}
		})(this);
	}

}