# 选择联系人（不跨空间）

<a name="MTL_upesnChooseContacts" class="anchor"></a>
### chooseContacts
选择联系人，返回联系人基础信息

<br>

**入参**

| 名称 | 类型 | 默认值 | 必填 | 说明 |
| --- | --- | --- | --- | --- |
| multiple | bool | ture | 否 | 是否多选 |
| source | number | 1 | 否 | 选人来源 |
| selectedList | array.<string> |  | 否 | 已选用户数组 |
| maxCount | number |  | 否 | 最大选择人数 |
| selectedCount | number |  | 否 | 已选择人数 |
| navTitle | string | 选择联系人 | 否 | 导航标题 |
| navColor | string | #ffffff | 否 | 导航颜色值 |
| qzId | string | 当前登录空间ID | 否 | 需要选择的空间id |
| canDelete | bool | ture | 否 | 是否可以删除已选人员 |
| canSelectDept | bool | ture | 否 | 是否可以点部门选择 |
| needYhtUserId | number | 0 | 否 | 是否需要友户通ID |
| success | function |  | 否 | 调用成功的回调函数 |
| fail | function |  | 否 | 调用失败的回调函数 |
| complete | function |  | 否 | 调用结束的回调函数（调用成功、失败都会执行） |


**入参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| multiple | bool | true:多选 false:单选 |
| source | number | 1:联系人 2:手机通讯录 |
| canSelectDept | bool | true:可通过部门选择 false:不可以通过部门选择 |
| needYhtUserId | number | 1:需要友户通ID 0:不需要友户通ID |

<a name="a5XvA"></a>
## 
**返回参数说明**

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| userName | string | 用户名 |
| userId | string | 用户Id |
| mobile | string | 手机号 |
| avatar | string | 头像url |
| email | number | 邮箱 |


**示例**
```javascript
mtl.upesn.chooseContacts({
  success: function(res) {
    alert("调用成功");
  },
  fail: err => {
    alert("调用失败");
  },
  complete: function(res) {}
});
```

