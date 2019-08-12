# 选择内部群

<a name="MTL_upesnChooseInsideGroup"  class="anchor"></a>
### chooseInsideGroup
选择内部群，返回内部群信息

<br>

**参数**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| multiple | bool | ture | 否 | 是否多选 |
| selectedList | array.<object> |  | 否 | 已选内部群数组 |
| groupType | number | 1 | 否 | 内部群类型 |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| multiple | bool | true:多选 false:单选 |
| groupType | number | 0:已加入的内部群 1:所有内部群 2:未加入的内部群 |


**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| groupId | string | 内部群Id |
| groupName | string | 内部群名称 |


**示例**
```javascript
mtl.upesn.chooseInsideGroup({
  success: function(res) {
    alert(JSON.stringify(res));
  },
  fail: err => {
    alert(JSON.stringify(err));
  },
  complete: function(res) {}
});
```

