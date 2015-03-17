//PS:这里所有的数据来自于http://www.ruanyifeng.com/blog/
//   特此声明，表示敬意

var SimulationData = eval({
    modular: [{
        "id": 0,
        "name": "主页",
        "about": "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur."
    }, {
        "id": 1,
        "name": "ruanyifeng",
        "about": "这里包括了所有最近一星期上传的博客。"
    }, {
        "id": 2,
        "name": "嘘，只和你说哦",
        "about": "额，个人隐私就不给你看了。"
    }],
    list: [{
        "id": 0,
        "mid": 1,
        "title": "使用 Make 构建网站",
        "date": "2015年3月13日",
        "author": "阮一峰",
        "depiction": '网站开发正变得越来越专业，涉及到各种各样的工具和流程，迫切需要构建自动化。<br>所谓 "构建自动化"，<br>就是指使用构建工具， 自动实现 "从源码到网页" < br > 的开发流程。 这有利于提高开发效率、 改善代码质量。 < br > 本文介绍如何使用make命令， 作为网站的构建工具。 以下内容既是make语法的实例， 也是网站构建的实战教程。 你完全可以将代码略作修改， 拷贝到自己的项目。 '
    }, {
        "id": 1,
        "mid": 1,
        "title": "也许，DOM 不是答案",
        "date": "2015年3月13日",
        "author": "阮一峰",
        "depiction": '有一个词"手机网站"（mobile web），指供手机浏览的网站，但它是不存在的。<br>到"移动互联网"的时候，其实专指另外一样东西：手机App。'
    }, {
        "id": 2,
        "mid": 1,
        "title": "Make 命令教程",
        "date": "2015年2月20日",
        "author": "阮一峰",
        "depiction": '代码变成可执行文件，叫做编译（compile）；先编译这个，还是先编译那个（即编译的安排），叫做构建（build）。<br>Make是最常用的构建工具，诞生于1977年，主要用于C语言的项目。但是实际上 ，任何只要某个文件有变化，就要重新构建的项目，都可以用Make构建。<br>本文介绍Make命令的用法，从简单的讲起，不需要任何基础，只要会使用命令行，就能看懂。我的参考资料主要是Isaac Schlueter的《Makefile文件教程》和《GNU Make手册》。'
    }, {
        "id": 3,
        "mid": 0,
        "title": "MVC，MVP 和 MVVM 的图示",
        "date": "2015年2月 1日",
        "author": "阮一峰",
        "depiction": '复杂的软件必须有清晰合理的架构，否则无法开发和维护。<br>MVC（Model-View-Controller）是最常见的软件架构之一，业界有着广泛应用。它本身很容易理解，但是要讲清楚，它与衍生的 MVP 和 MVVM 架构的区别就不容易了。<br>昨天晚上，我读了《Scaling Isomorphic Javascript Code》，突然意识到，它们的区别非常简单。我用几段话，就可以说清。'
    }],
    post: [{
        "id": 0,
        "tid": 0,
        "title": "使用 Make 构建网站",
        "date": "2015年3月13日",
        "author": "阮一峰",
        "value": '"网站开发正变得越来越专业，涉及到各种各样的工具和流程，迫切需要构建自动化。所谓 "构建自动化"，就是指使用构建工具， 自动实现 "从源码到网页"的开发流程。 这有利于提高开发效率、 改善代码质量。本文介绍如何使用make命令， 作为网站的构建工具。 以下内容既是make语法的实例， 也是网站构建的实战教程。 你完全可以将代码略作修改， 拷贝到自己的项目。（ 题图： 国家考古博物馆， 西班牙， 摄于2014年8月）一、 Make的优点首先解释一下， 为什么要用Make。目前， 网站项目（ 尤其是Node.js项目） 有三种构建方案。方案一： 基于Node.js的专用构建工具（ Grunt、 Gulp、 Brunch、 Broccoli、 Mimosa）方案二： npm run命令（ 教程1、 2、 3）方案三： make命令我觉得， make是大型项目的首选方案。 npm run可以认为是make的简化形式， 只适用于简单项目， 而Grunt、 Gulp那样的工具， 有很多问题。（ 1） 插件问题Grunt和Gulp的操作， 都由插件完成。 即使是文件改名这样简单的任务， 都要写插件， 相当麻烦。 而Make是直接调用命令行， 根本不用担心找不到插件。（ 2） 兼容性问题插件的版本， 必须与Grunt和Gulp的版本匹配， 还必须与对应的命令行程序匹配。 比如， grunt - contrib - jshint插件现在是0.11.0 版， 对应Grunt 0.4.5 版和JSHint 2.6.0 版。 万一Grunt和JSHint升级， 而插件没有升级， 就有可能出现兼容性问题。 Make是直接调用JSHint， 不存在这个问题。（ 3） 语法问题Grunt和Gulp都有自己的语法， 并不容易学， 尤其是Grunt， 语法很罗嗦， 很难一眼看出来代码的意图。 当然， make也不容易学， 但它有复用性， 学会了还可以用在其他场合。（ 4） 功能问题make已经使用了几十年， 全世界无数的大项目都用它构建， 早就证明非常可靠， 各种情况都有办法解决， 前人累积的经验和资料也非常丰富。 相比之下， Grunt和Gulp的历史都不长， 使用范围有限， 目前还没有出现它们能做、 而make做不到的任务。基于以上理由， 我看好make。二、 常见的构建任务下面是一些常见的网站构建任务。检查语法编译模板转码合并压缩测试删除这些任务用到 JSHint、 handlebars、 CoffeeScript、 uglifyjs、 mocha 等工具。 对应的package.json文件如下。"devDependencies": {"coffee-script": "~1.9.1","handlebars": "~3.0.0","jshint": "^2.6.3","mocha": "~2.2.1","uglify-js": "~2.4.17"}我们来看看， Make 命令怎么完成这些构建任务。三、 Makefile的通用配置开始构建之前， 要编写Makefile文件。 它是make命令的配置文件。 所有任务的构建规则， 都写在这个文件（ 参见《 Make 命令教程》）。首先， 写入两行通用配置。PATH: = node_modules / .bin: $(PATH)SHELL: = /bin/bash上面代码的PATH和SHELL都是BASH变量。 它们被重新赋值。PATH变量重新赋值为， 优先在 nodemodules / .bin 目录寻找命令。 这是因为（ 当前项目的） node模块， 会在 nodemodules / .bin 目录设置一个符号链接。 PATH变量指向这个目录以后， 调用各种命令就不用写路径了。 比如， 调用JSHint， 就不用写~/node_modules/.bin / jshint， 只写 jshint 就行了。SHELL变量指定构建环境使用BASH。'
    }, {
        "id": 1,
        "tid": 1,
        "title": "也许，DOM 不是答案",
        "date": "2015年3月13日",
        "author": "阮一峰",
        "value": '"网站开发正变得越来越专业，涉及到各种各样的工具和流程，迫切需要构建自动化。所谓 "构建自动化"，就是指使用构建工具， 自动实现 "从源码到网页"的开发流程。 这有利于提高开发效率、 改善代码质量。本文介绍如何使用make命令， 作为网站的构建工具。 以下内容既是make语法的实例， 也是网站构建的实战教程。 你完全可以将代码略作修改， 拷贝到自己的项目。（ 题图： 国家考古博物馆， 西班牙， 摄于2014年8月）一、 Make的优点首先解释一下， 为什么要用Make。目前， 网站项目（ 尤其是Node.js项目） 有三种构建方案。方案一： 基于Node.js的专用构建工具（ Grunt、 Gulp、 Brunch、 Broccoli、 Mimosa）方案二： npm run命令（ 教程1、 2、 3）方案三： make命令我觉得， make是大型项目的首选方案。 npm run可以认为是make的简化形式， 只适用于简单项目， 而Grunt、 Gulp那样的工具， 有很多问题。（ 1） 插件问题Grunt和Gulp的操作， 都由插件完成。 即使是文件改名这样简单的任务， 都要写插件， 相当麻烦。 而Make是直接调用命令行， 根本不用担心找不到插件。（ 2） 兼容性问题插件的版本， 必须与Grunt和Gulp的版本匹配， 还必须与对应的命令行程序匹配。 比如， grunt - contrib - jshint插件现在是0.11.0 版， 对应Grunt 0.4.5 版和JSHint 2.6.0 版。 万一Grunt和JSHint升级， 而插件没有升级， 就有可能出现兼容性问题。 Make是直接调用JSHint， 不存在这个问题。（ 3） 语法问题Grunt和Gulp都有自己的语法， 并不容易学， 尤其是Grunt， 语法很罗嗦， 很难一眼看出来代码的意图。 当然， make也不容易学， 但它有复用性， 学会了还可以用在其他场合。（ 4） 功能问题make已经使用了几十年， 全世界无数的大项目都用它构建， 早就证明非常可靠， 各种情况都有办法解决， 前人累积的经验和资料也非常丰富。 相比之下， Grunt和Gulp的历史都不长， 使用范围有限， 目前还没有出现它们能做、 而make做不到的任务。基于以上理由， 我看好make。二、 常见的构建任务下面是一些常见的网站构建任务。检查语法编译模板转码合并压缩测试删除这些任务用到 JSHint、 handlebars、 CoffeeScript、 uglifyjs、 mocha 等工具。 对应的package.json文件如下。"devDependencies": {"coffee-script": "~1.9.1","handlebars": "~3.0.0","jshint": "^2.6.3","mocha": "~2.2.1","uglify-js": "~2.4.17"}我们来看看， Make 命令怎么完成这些构建任务。三、 Makefile的通用配置开始构建之前， 要编写Makefile文件。 它是make命令的配置文件。 所有任务的构建规则， 都写在这个文件（ 参见《 Make 命令教程》）。首先， 写入两行通用配置。PATH: = node_modules / .bin: $(PATH)SHELL: = /bin/bash上面代码的PATH和SHELL都是BASH变量。 它们被重新赋值。PATH变量重新赋值为， 优先在 nodemodules / .bin 目录寻找命令。 这是因为（ 当前项目的） node模块， 会在 nodemodules / .bin 目录设置一个符号链接。 PATH变量指向这个目录以后， 调用各种命令就不用写路径了。 比如， 调用JSHint， 就不用写~/node_modules/.bin / jshint， 只写 jshint 就行了。SHELL变量指定构建环境使用BASH。'
    }, {
        "id": 1,
        "tid": 2,
        "title": "Make 命令教程",
        "date": "2015年3月13日",
        "author": "阮一峰",
        "value": '"网站开发正变得越来越专业，涉及到各种各样的工具和流程，迫切需要构建自动化。所谓 "构建自动化"，就是指使用构建工具， 自动实现 "从源码到网页"的开发流程。 这有利于提高开发效率、 改善代码质量。本文介绍如何使用make命令， 作为网站的构建工具。 以下内容既是make语法的实例， 也是网站构建的实战教程。 你完全可以将代码略作修改， 拷贝到自己的项目。（ 题图： 国家考古博物馆， 西班牙， 摄于2014年8月）一、 Make的优点首先解释一下， 为什么要用Make。目前， 网站项目（ 尤其是Node.js项目） 有三种构建方案。方案一： 基于Node.js的专用构建工具（ Grunt、 Gulp、 Brunch、 Broccoli、 Mimosa）方案二： npm run命令（ 教程1、 2、 3）方案三： make命令我觉得， make是大型项目的首选方案。 npm run可以认为是make的简化形式， 只适用于简单项目， 而Grunt、 Gulp那样的工具， 有很多问题。（ 1） 插件问题Grunt和Gulp的操作， 都由插件完成。 即使是文件改名这样简单的任务， 都要写插件， 相当麻烦。 而Make是直接调用命令行， 根本不用担心找不到插件。（ 2） 兼容性问题插件的版本， 必须与Grunt和Gulp的版本匹配， 还必须与对应的命令行程序匹配。 比如， grunt - contrib - jshint插件现在是0.11.0 版， 对应Grunt 0.4.5 版和JSHint 2.6.0 版。 万一Grunt和JSHint升级， 而插件没有升级， 就有可能出现兼容性问题。 Make是直接调用JSHint， 不存在这个问题。（ 3） 语法问题Grunt和Gulp都有自己的语法， 并不容易学， 尤其是Grunt， 语法很罗嗦， 很难一眼看出来代码的意图。 当然， make也不容易学， 但它有复用性， 学会了还可以用在其他场合。（ 4） 功能问题make已经使用了几十年， 全世界无数的大项目都用它构建， 早就证明非常可靠， 各种情况都有办法解决， 前人累积的经验和资料也非常丰富。 相比之下， Grunt和Gulp的历史都不长， 使用范围有限， 目前还没有出现它们能做、 而make做不到的任务。基于以上理由， 我看好make。二、 常见的构建任务下面是一些常见的网站构建任务。检查语法编译模板转码合并压缩测试删除这些任务用到 JSHint、 handlebars、 CoffeeScript、 uglifyjs、 mocha 等工具。 对应的package.json文件如下。"devDependencies": {"coffee-script": "~1.9.1","handlebars": "~3.0.0","jshint": "^2.6.3","mocha": "~2.2.1","uglify-js": "~2.4.17"}我们来看看， Make 命令怎么完成这些构建任务。三、 Makefile的通用配置开始构建之前， 要编写Makefile文件。 它是make命令的配置文件。 所有任务的构建规则， 都写在这个文件（ 参见《 Make 命令教程》）。首先， 写入两行通用配置。PATH: = node_modules / .bin: $(PATH)SHELL: = /bin/bash上面代码的PATH和SHELL都是BASH变量。 它们被重新赋值。PATH变量重新赋值为， 优先在 nodemodules / .bin 目录寻找命令。 这是因为（ 当前项目的） node模块， 会在 nodemodules / .bin 目录设置一个符号链接。 PATH变量指向这个目录以后， 调用各种命令就不用写路径了。 比如， 调用JSHint， 就不用写~/node_modules/.bin / jshint， 只写 jshint 就行了。SHELL变量指定构建环境使用BASH。'
    }]
});