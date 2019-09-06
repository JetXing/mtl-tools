# MTL IDE快速开始

MTL IDE是一款轻量级Web可视化开发工具，依托强大的vscode，不需要复杂的安装步骤，即装即用。<br />IDE为MTL开发者量身打造，开发者可以十分方便简捷的创建工程、添加页面、预览、调试、打包、发布。<br />同时，在开发过程中，IDE提供了强大的代码提示、补全能力，只需知道API的部分名称，IDE会自动提示并补全代码。<br />更多强大功能，等待开发者去探索。。。

<a name="0NUOn" class="anchor"></a>
## 1.获取VS Code
Visual Studio Code（以下简称vscode）是一个**轻量且强大的跨平台开源**代码编辑器（IDE），支持Windows，OS X和Linux。内置JavaScript、TypeScript和Node.js支持，而且拥有丰富的插件生态系统。<br />vscode具有广泛的开发者受众基础，因此MTL IDE基于vscode平台进行开发。<br />[点击下载vscode](https://code.visualstudio.com) （^1.36.0及以后的版本）

<a name="vU40y" class="anchor"></a>
## 2.安装运行环境
(1).安装node.js及npm，若之前安装过，则忽略此步骤。[点击下载node.js](http://nodejs.cn/download/) | [安装教程](https://www.jianshu.com/p/6747fb0d7312)<br />(2).安装mtl运行环境，打开终端输入npm -g install mtl-cli

<a name="1LXZd" class="anchor"></a>
## 3.安装MTL插件
在完成vscode的安装后，我们需要安装mtl-vs插件，之后即可开始MTL开发之旅。<br />(1).点击vscode左侧菜单栏的插件按钮<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566541253046-f817b7a0-1991-486a-95d6-3bc51a145e12.png#align=left&display=inline&height=23&name=image.png&originHeight=46&originWidth=50&size=3755&status=done&width=25"  height="15" width="15"><br />(2).在搜索框中搜索mtl-vs或mtl，即可找到插件<br />(3).点击<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566541325854-1933c208-2891-43cc-b0ef-72987df5fc91.png#align=left&display=inline&height=10&name=image.png&originHeight=20&originWidth=68&size=4311&status=done&width=34"  height="12" width="40">进行安装即可<br />如图所示：<br />![WX20190823-142728@2x.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566541661531-56b9a99f-e2af-498d-ae9c-517576d7051e.png#align=left&display=inline&height=340&name=WX20190823-142728%402x.png&originHeight=340&originWidth=2092&size=88465&status=done&width=2092)

<a name="sXYc9" class="anchor"></a>
## 4.创建工程
MTL工作区，如图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566790491881-756462cb-71e5-40de-9caf-c3a8fb2b0dcf.png#align=left&display=inline&height=502&name=image.png&originHeight=1004&originWidth=1538&size=215761&status=done&width=769)<br />(1).MTL工作区内，开发者可以创建工程，打开工程，添加页面，配置工程文件，查看帮助等。若工作区被关闭，可以点击目录区<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566548341740-9ec99b15-9832-44b0-a896-fb07c389cc71.png#align=left&display=inline&height=13&name=image.png&originHeight=26&originWidth=432&size=9452&status=done&width=216"  height="15" width="160">右上角的<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566548368080-dee9c8a1-1183-4c67-a578-8cb7249c58fb.png#align=left&display=inline&height=12&name=image.png&originHeight=24&originWidth=28&size=3655&status=done&width=14"  height="15" width="15">按钮重新打开工作区。<br />(2).选择创建工程，修改工程名，选择工程存放目录，选择模板，点击创建按钮，即可创建一个mtl工程。<br />(3).工程创建成功后，会自动打开所创建的工程。<br />(4).开发者根据各自的业务，开始编写代码。

<a name="PM5cG" class="anchor"></a>
## 4.添加页面
MTL IDE除了提供工程模板以为，还提供丰富的页面目标供开发者使用。如图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566790981247-595984df-ff07-41a7-a581-3124fe8bd90d.png#align=left&display=inline&height=415&name=image.png&originHeight=830&originWidth=1524&size=149506&status=done&width=762)<br />若创建工程后，MTL工作区被关闭，可以在MTL插件的<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566548341740-9ec99b15-9832-44b0-a896-fb07c389cc71.png#align=left&display=inline&height=13&name=image.png&originHeight=26&originWidth=432&size=9452&status=done&width=216"  height="15" width="160">右上角的<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566548368080-dee9c8a1-1183-4c67-a578-8cb7249c58fb.png#align=left&display=inline&height=12&name=image.png&originHeight=24&originWidth=28&size=3655&status=done&width=14"  height="15" width="15">按钮重新打开工作区<br />(1).在工作区内选择添加页面，添加页面名称->选择页面模板，点击添加，即可添加页面至工程目录内<br />(2).创建后的页面如下图所示:<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566790837333-f7375f58-2d80-4c49-be60-c0df29396f4b.png#align=left&display=inline&height=235&name=image.png&originHeight=470&originWidth=436&size=40480&status=done&width=218)<br />*若添加页面成功后，工程目录内没有显示，点击<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566790907341-818cde17-b019-4dda-91e2-567b354243bb.png#align=left&display=inline&height=13&name=image.png&originHeight=26&originWidth=30&size=4389&status=done&width=15"  height="15" width="15">刷新即可

<a name="g71sn" class="anchor"></a>
## 5.调试
成功添加页面后，我们使用MTL IDE进行调试；<br />(1).修改project.json工程配置文件，startPage修改成刚刚添加的页面路径即"Login/index.html",如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566791824875-c180aa3b-b13a-4ea4-a338-ca298a6d0b70.png#align=left&display=inline&height=275&name=image.png&originHeight=550&originWidth=1950&size=181950&status=done&width=975)<br />(2).在脚本区，选择debug ->debug_iOS.js，也可以选择Android、微信、钉钉的debug方式<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566791940192-8c183464-b31b-4ed6-baa7-b8bb0d8bac98.png#align=left&display=inline&height=127&name=image.png&originHeight=254&originWidth=438&size=27606&status=done&width=219)<br />(3).可以使用浏览器进行调试[具体细节请参阅](http://mtltoolsdocs20190806.test.app.yyuap.com/0302-mtl-ide-debug)

<a name="N5n1m" class="anchor"></a>
## 6.预览
MTL IDE提供十分便利的预览方式，帮助开发者查看、适配自己的代码在各端的运行情况。<br />(1).脚本区点击preview目录，选择需要预览的平台，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566792392787-7faada36-0d06-4614-b84d-02ce9665d14c.png#align=left&display=inline&height=167&name=image.png&originHeight=334&originWidth=438&size=34672&status=done&width=219)<br />(2).编译成功后，会生成对应平台的二维码，使用各端的preview程序扫码进行预览。[具体细节请参阅](http://mtltoolsdocs20190806.test.app.yyuap.com/0303-mtl-ide-preview)<br />(3).预览程序[下载地址](http://mobile.yyuap.com/mtl/download/)

<a name="4Uvog" class="anchor"></a>
## 7.打包
MTL IDE目前提供iOS和Android两种云打包服务。<br />(1).脚本区点击build目录，选择需要打包的平台，如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566798861919-5fbed642-52be-40a9-a1dc-fddd866cba31.png#align=left&display=inline&height=127&name=image.png&originHeight=254&originWidth=434&size=24112&status=done&width=217)<br />*注意，此时IDE若处于调试或预览状态，需要在TERMINAL中使用ctrl+C退出调试或预览状态<br />(2).打包完成后，目录区会出现output文件夹，ios(平台ios和Android)->release->export;以下图为例：751.png为安装包的二维码，可扫码下载，mtlEmpty.ipa为云打包生成的安装包。![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566799218045-cfe77c5c-1a7f-4439-8cc2-d4799a8d3710.png#align=left&display=inline&height=395&name=image.png&originHeight=790&originWidth=1954&size=122322&status=done&width=977)

<a name="MWrbf" class="anchor"></a>
## 8.MTL IDE功能说明
如图所示：<br />![image.png](https://cdn.nlark.com/yuque/0/2019/png/271499/1566544983853-ffc04149-0b59-4e33-9bcc-617ba6850ac3.png#align=left&display=inline&height=768&name=image.png&originHeight=1536&originWidth=2048&size=343638&status=done&width=1024)

(1).点击左侧菜单栏<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566545079152-1388d6dd-eb64-42fb-abaf-e97ea9d852ab.png#align=left&display=inline&height=16&name=image.png&originHeight=32&originWidth=38&size=4181&status=done&width=19"  height="15" width="15">按钮即可打开MTL IDE，包含工程目录、脚本目录、API目录、工程配置区等功能模块。<br />(2).工程目录即开发者打开或创建的mtl工程，可以清晰的看到整个工程结构。<br />(3).脚本目录存放开发者常用脚本，功能包括打包、调试、预览等；另外，脚本支持自定义，开发者可在标准mtl工程目录的script目录下添加自己的脚本。

- 构建脚本(build)用于打包工程，目前支持Android、iOS打包；
- 调试脚本(debug)用于页面调试，以iOS为例，该脚本会启动iPhone模拟器并启动一个端口为3000的本地服务，方便开发者调试在手机上的运行效果；[更多细节请参阅](http://mtltoolsdocs20190806.test.app.yyuap.com/0302-mtl-ide-debug)
- 预览脚本(preview)用于项目预览，该脚本会对工程进行编译并把编译后的静态页面发布到mtl服务器，同时生成一个预览二维码，使用mtl预览程序即可实时预览在多个端的运行效果。[更多细节请参阅]()
- API目录存放开发常用的API示例，包含五大类型100多个api，每个api都有详细说明，另外在实际开发过程中，可点击<img src="https://cdn.nlark.com/yuque/0/2019/png/271499/1566546559753-6e9a02a7-406c-4b67-9588-81de60e095a9.png#align=left&display=inline&height=16&name=image.png&originHeight=32&originWidth=364&size=7171&status=done&width=182"  height="15" width="160">，api的示例代码即会出现在光标位置。api会随着MTL IDE的更新不断的丰富，方便开发者调用原生能力。



<br />
