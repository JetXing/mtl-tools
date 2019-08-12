# 打开日程详情

<a name="MTL_upesnViewScheduleDetail" class="anchor"></a>
### viewScheduleDetail
提供一个日程详情页面，根据传入的日程id以及用户id，展示出指定日程的详细信息

<br>

**参数**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| scheduleId | string | 0 | 是 | 日程id |
| subId | string | 0 | 否 | 日程子Id |
| memberId | string | 当前用户ID | 否 | 用户ID |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| subId | string | 只有重复日程存在子Id |


**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| error_code | number | 返回的状态码 |
| tip_level | number | 提示级别 |
| error_description | string | 提示信息 |


**示例**
```javascript
mtl.upesn.viewScheduleDetail({
  scheduleId: "20761",
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```
