# 跨空间选择联系人

<a name="MTL_upesnChooseAllContacts" class="anchor"></a>
### chooseAllContacts
跨空间选择联系人，返回联系人基础信息

<br>

**参数**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| multiple | bool | ture | 是 | 是否多选 |
| navTitle | string |  | 否 | 导航标题 |
| selectedList | array. <string> |  | 否 | 已选人员ID数组 |


**入参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| multiple | bool | true:选择自己 false:不选自己 |



**返回**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| userName | string | 用户名 |
| userId | string | 用户Id |
| mobile | string | 手机号 |
| avatar | string | 头像url |
| email | number | 邮箱 |



**示例**
```javascript
mtl.upesn.chooseAllContacts({
  multiple: true,
  success: function(res) {
    alert(JSON.stringify(res));
  },
  fail: err => {
    alert(JSON.stringify(err));
  },
  complete: function(res) {}
});
```
