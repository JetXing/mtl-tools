# 发送微邮

<a name="MTL_upesnSendMiniMail" class="anchor"></a>
### sendMiniMail
打开发送微邮界面

<br>

**入参**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| users | array.<object> |  | 是 | 收件人列表 |
| spaceId | string | 当前所在空间id | 否 | 空间id |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**users内部结构字段说明**

| 值 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| uid | string | 是 | 用户id |
| name | string | 是 | 用户名 |
| avatar | string | 是 | 头像url |
| mobile | string | 是 | 手机号 |


**示例**
```javascript
mtl.upesn.sendMiniMail({
  users:[{
    "uid":"54cbad",
    "name":"小友",
    "avatar":"http://ykj-esn-test.oss-cn-beijing.aliyuncs.com/13722/3260120/201806/1/15278271217ZOr.jpg",
    "mobile":"18888888888"
  }],
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```
