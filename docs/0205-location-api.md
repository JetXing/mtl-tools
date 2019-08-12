# 地理位置

<a name="MTL_getLocation" class="anchor"></a>
### getLocation
获取当前坐标

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| type | string | 否 | 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02' |


**示例**
```javascript
mtl.getLocation({
  type: "wgs84",
  success: function(res) {
    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_openLocation" class="anchor"></a>
### openLocation
打开地图查看指定坐标位置

<br>

**界面**<br />![IMG_1656.PNG](https://cdn.nlark.com/yuque/0/2019/png/271502/1556192322858-2f9f8ca2-c49a-426b-b176-64a34487c17e.png#align=left&display=inline&height=512&name=IMG_1656.PNG&originHeight=1334&originWidth=750&size=464606&status=done&width=288)

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| latitude | number | 是 | 纬度，浮点数，范围为90 ~ -90 |
| longitude | number | 是 | 经度，浮点数，范围为180 ~ -180。 |
| name | string | 否 | 位置名，如 "用友软件园"，缺省时显示 "[位置]" |
| address | string | 否 | 地址详情说明 |
| scale | number | 否 | 地图缩放级别,整形值,范围从1~28。默认为28 |


**示例**
```javascript
mtl.openLocation({
  latitude: 0,
  longitude: 0,
	name: "用友软件园",
	address: "北清路68号",
  scale: 28,
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---

<a name="vNnAS"></a>
### 附录
> 待添加: 安卓端如何配置第三方定位相关信息

