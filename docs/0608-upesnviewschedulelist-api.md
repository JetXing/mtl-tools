# 查看日程列表

<a name="MTL_upesnViewScheduleList" class="anchor"></a>
### viewScheduleList
传入指定日期，展示指定日期的日程列表界面（展示界面包括月视图）

<br>

**参数**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| time | number | 当前时间戳 | 否 | 指定日期时间戳（10位） |
| memberId | string |  | 否 | 人员id |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| error_code | number | 返回的状态码 |
| tip_level | number | 提示级别 |
| error_description | string | 提示信息 |


**示例**
```javascript
mtl.upesn.viewScheduleList({
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```

