# 获取个人友互通信息

<a name="MTL_upesnGetUserYHTInfo" class="anchor"></a>
### getUserYHTInfo
获取个人友互通信息

<br>

**入参**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| tenant_id | string | 当前租户空间id |
| yht_userid | string | 当前用户友互通id |


**示例**
```javascript
mtl.upesn.getUserYHTInfo({
  success: function(res) {
    alert(JSON.stringify(res));
  },
  fail: err => {
    alert(JSON.stringify(err));
  },
  complete: function(res) {}
});
```
