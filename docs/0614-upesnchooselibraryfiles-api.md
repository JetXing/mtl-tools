# 选择文库文件

<a name="MTL_upesnChooseLibraryFiles" class="anchor"></a>
### chooseLibraryFiles
从文库列表中选择文库文件，返回文件基础信息<br />注：文件下载URL和预览URL要通过接口单独获取。预览URL有code失效值。下载URL中添加了密钥。

<br>

**入参**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| type | number | 0 | 否 | 文库选择类型 |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |

**入参说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| type | number | 0:从文库列表和传输列表选择 1:从文库列表选择 2:从传输列表选择 |


**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| fileName | string | 文件名称 |
| fileId | string | 文件ID |
| fileSize | number | 文件大小(字节) |
| fileType | string | 文件扩展名 |
| fileTypeFlag | number | 扩展名分类(-1:"未知格式"; 0:"doc,docx,wps,dps,wpt";1: "pot,potx,ppt,pptx,dpt,pps,ppsx";2: "xls,xlsx";3: "txt";4: "pdf";5: "rar,zip"; 6: "avi,rmvb,rm,asf,divx,mpg,mpeg,mpe,wmv,mp4,mkv,vob,flv";7: "jpg,jpeg,bmp,psd,gif,png,tiff";8: "mp3,wav") |
| created | string | 创建时间 |
| qzId | string | 文件所在圈子ID |
| userName | string | 上传者名称 |
| userId | string | 上传者ID |



**示例**
```javascript
mtl.upesn.chooseLibraryFiles({
  success: function(res) {
    alert(JSON.stringify(res).substr(0, 250) + "……");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```

