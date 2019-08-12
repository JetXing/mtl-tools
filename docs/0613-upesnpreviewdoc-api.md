# 文件预览

<a name="MTL_upesnPreviewDoc" class="anchor"></a>
### previewDoc
提供文件下载url或者文件fid，实现文件的预览，界面可包含下载等功能<br />**注:**<br />有文件fid传入文件fid，传参参考-**入参1**；<br />没有文件fid必须传入下载url，传参参考-**入参2**；

<br>

**入参(1)（ 文件有fid）**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| fileId | string |  | 是 | 文件ID |
| fromType | number | 0 | 否 | 文件来源 |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**入参数(1)说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fromType | number | 0：来自文库，1：IM，2：web，3：项目，4：旧IM，6：公告附件，7：新NC预览，8：任务预览 |


**入参2（ 文件有下载地址）**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| downloadUrl | string |  | 是 | 文件下载url |
| fromType | number | 5 | 否 | 文件来源 |
| fileName | string |  | 是 | 文件名，且文件名必须带后缀名 |
| needDownload | number |  | 否 | 是否需要下载按钮（0不需要，1需要） |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**入参数(2)说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fromType | number | 5：下载地址预览，9：金格编辑 |


**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| error_code | number | 返回的状态码 |
| tip_level | number | 提示级别 |
| error_description | string | 提示信息 |


**示例**
```javascript
mtl.upesn.previewDoc({
  fileId: '114135',
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```

