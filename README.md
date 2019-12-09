# learn-taro
学习taro (demo)
1、获取文件之后，首先npm安装依赖
2、而后在文件根目录运行 npm run dev:h5 即可打开h5页面
3、需要全局安装@tarojs/cli (详情见官方文档http://taro-docs.jd.com/taro/docs/GETTING-STARTED.html）

开发过程需要注意的地方
1、语法上不能随心所欲，如果要适用多端，HTML语法要遵循Taro；
2、给标签定义事件必须定义事件函数，不能直接在标签内定义匿名函数；
3、当传递Props的值是函数时，必须用on+函数名的规范来命名（遵从小程序的规范要求）；
4、区分页面和组件（页面没有componentWillReceiveProps)；
5、图片资源展示需要通过Image组件；

这个demo没有给各端制作特定样式，小程序可能会出现样式混乱。

demo使用taro + taro-ui,使用less预编译
