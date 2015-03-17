/**
 * route.js
 * @authors Qv (foru.fy@gmail.com)
 * @date    2015-03-16 19:30:59
 * @version 0.0.1
 */
function define(fn) {
    fn(new $route(fn));
};

function $route(fn) {
    this.fn = fn;
    this.initialization();
}

$route.prototype = {
    get href() {
        return location.href;
    },
    get hash() {
        return location.hash;
    },
    get param() {
        return (this.hash.split('#!')[1] ? this.hash.split('#!')[1].split('/') : ['']);
    },
    get modular() {
        return this.param[0];
    },
    routes: [],
    //所带参数
    initialization: function() {
        window.onload = window.onhashchange = (function(self) {
            return function() {
                self.load();
            }
        })(this);
    },
    /**
     * load 页面加载
     *
     * @param null
     * @void
     */
    load: function() {
        this.isOther = true;
        if (!this.isGoto(this.href)) {
            this.fn(this);
        }
    },

    /**
     * when 增加路由队列
     *
     * @param {String, function, array} modular, fn, param
     * @return {Object} this
     * @api public
     */
    when: function(modular, fn, param) {
        if (this.isMate(modular)) {
            this.isOther = false;
            fn(param);
        }
        return this;
    },
    /**
     * when 的一个扩展，印象中是有函数可以带参数扩展的。。忘了。。orz
     *
     */
    other: function(fn, param) {
        if (this.isOther) fn(param);
        return this;
    },

    //判断是#跳转还是#!界面跳转

    isGoto: function(href) {
        return ~href.indexOf('#') && (href.charAt(href.indexOf('#') + 1) !== '!');
    },
    /**
     * isMate
     * 判断是否匹配地址
     * @param {Array/String} aim
     * @return boolean
     */
    isMate: function(aim) {
        if (aim.constructor === Array) {
            for (var i = 0, t; t = aim[i]; i++) {
                if (t.toString() === this.modular) {
                    return true;
                }
            }
        } else if (aim.toString() === this.modular) {
            return true
        } else {
            return false;
        }
    }

}