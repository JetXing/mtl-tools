# 打开小友

<a name="MTL_upesnOpenXYChatView" class="anchor"></a>
### openXYChatView
打开小友聊天页面

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| xiaoyou_params | object | 是 | 小友配置信息 |


**xiaoyou_params 字段说明**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| tenantid | string | 是 | 租户id 申请机器人后获得 |
| appcode | string | 是 | 应用id |
| yhtuserid | string | 是 | 友互通id |

**<br />****示例**
```javascript
mtl.vui.openXYChatView({
  xiaoyou_params: { //小友机器人必要参数，必传
    tenantid: "qa56zqg7", //租户id 申请机器人后获得
    appcode: "nccloud", //应用id
    yhtuserid: "b9d3d30d-e110-41a1-99b9-f9ed8b4d771e" //友互通id
  },
  callback: function (data, callback) { //业务回调
    console.log(JSON.stringify(data));
  },
  success: function (res) {//调用成功
    alert('调用成功');
  },
  fail: function (err) {//调用失败
    alert('调用失败');
  }
});
```
