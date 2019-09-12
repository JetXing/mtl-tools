
# 构建
```
mtl build [ iOS | Android ]
```
### 构建功能准备和功能说明：

```
    1、 在构建之前最好先设置一下构建打包方式，构建方式支持两种方式：源码上传打包 uploadZip 和 git 分支打包。 
命令： mtl set-buildType  设置构建方式。
    2、 在构建之前需要上传android 的打包签名文件；iOS的证书和描述文件 。上传证书的网站暂时不对外开放 。android 的签名文件，iOS的证书 和描述文件 可以先发邮箱给xugangm@yonyou.com或者在微信群里@david。
    android 的签名文件需要提供签名文件 ，密码 ，别名、别名密码以及包名ID，包名ID和签名文件是绑定的。
    iOS 提供证书和签名文件 、证书的密码以及iOS的bundle ID 。bundle ID和证书是绑定的关系。
```

+ 云构建server源码上传方式，将功能开发实现的静态源码资源与project.json 文件一并打包成zip压缩文件，上传至云构建server并完成构建打包。
+ 云构建server 支持git 远程代码下载到构建服务器进行云构建。需要在构建前通过"mtl set-git" 配置好Git 仓库 、分支、账号、密码等要素。
+ 云构建结束后会在控制台显示构建日志以及构建包存放目录；
+ 云构建成功后在output目录存放构建包。

### 运行

```
mtl start  [ Android ]
```
### 安装运行说明
+ 请连接android真机设备或者模拟器。


# git账号配置
```
mtl set-git  
```
### 设置git说明
+ 用于云端构建 ，在构建服务器增量更新源码。
+ 根据提示 输入git仓库URL ，分支 ，账户，密码。


