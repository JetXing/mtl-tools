# 打开文库具体路径

<a name="MTL_upesnOpenLibraryFiles" class="anchor"></a>
### openLibraryFiles
打开文库具体路径

<br>

**入参**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| firstCatalog | number |  | 否 | 一级目录 |
| secondCatalog | number |  | 否 | 二级目录 |
| thirdCatalog | number |  | 否 | 三级目录 |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**入参说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| firstCatalog | number | 企业文档：1；内部群文档：2；我的文档：3；项目文档：4 |
| secondCatalog | number | 企业文档：0；我的文档：0；我的文档(TA人共享)：-4；内部群文档：内部群ID；项目文档：项目ID； |
| thirdCatalog | number | 文件夹id |


**枚举**

| 类型 | firstCatalog | secondCatalog | thirdCatalog |
| --- | --- | --- | --- |
| 企业文档 | 1 | 0 | 文件夹ID |
| 内部群文档-一级目录 | 2 | 内部群ID | 0 |
| 内部群文档-二级目录 | 2 | 0 | 文件夹ID |
| 项目群文档-一级目录 | 4 | 项目群ID | 0 |
| 项目群文档-二级目录 | 4 | 0 | 文件夹ID |
| 我的文档-TA共享一级目录 | 3 | -4 | 0 |
| 我的文档-TA共享二级目录 | 3 | -4 | 文件夹ID |
| 我的文档-非TA人共享目录 | 3 | 0 | 文件夹ID |


**示例**
```javascript
mtl.upesn.openLibraryFiles({
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```

