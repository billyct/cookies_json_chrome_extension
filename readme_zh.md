# cookies_json_chrome_extension
![logo](./icons/logo.png)
[english](./README.md)

一个通过json方式展示cookies的chrome插件，主要如果你有时候写js要测试cookie的时候，比如用phantomjs这种东西的时候就比较有用，直接copy，addCookie就行了

### 安装
* ```$ git clone https://github.com/billyct/cookies_json_chrome_extension.git```
* 打开chrome，打开地址 ```chrome://extensions/```
* 加载已解压的扩展程序（note:打开开发者模式）

### 截图
![screenshot-1](./screenshot-1.png)
![screenshot-2](./screenshot-2.png)


### thx
参考了下 [cookies.txt](https://chrome.google.com/webstore/detail/cookiestxt/njabckikapfpffapmjgojcnbfjonfjfg) （基本上就是用的它的核心，因为我需要的时候json格式的，展示上改变了一下，具体就是popup.js里面有，可以diy进去其他的关于cookie的东西）
