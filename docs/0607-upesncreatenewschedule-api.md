# 新建日程

<a name="MTL_upesnCreateNewSchedule" class="anchor"></a>
### createNewSchedule
提供新建日程功能，调用时端上会打开新建日程页面，用户可以在此完善日程信息，并新建日程

<br>

**参数**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| scheduleId | string | 日程id |


**示例**
```javascript
mtl.upesn.createNewSchedule({
  success: function(res) {
    alert(JSON.stringify(res));
  },
  fail: err => {
    alert(JSON.stringify(err));
  },
  complete: function(res) {}
});
```
