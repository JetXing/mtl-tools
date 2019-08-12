# OCR 识别

> OCR 接口调用阿里云的 API（收费），需要用户自己到阿里云平台上申请 appCode。
> 待添加：申请 appCode 相关教程。


<a name="moFpH"></a>
## 发票
<a name="MTL_scanInvoice" class="anchor"></a>
### scanInvoice
打开相机拍摄发票并返回识别结果。

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 阿里云申请的 appcode |


**示例**
```javascript
mtl.scanInvoice({
  appCode: "",
  success: function(res) {
    var result = res.data; // 返回识别结果
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

**返回数据格式**
```json
{
  "发票代码": "032001500XXX",
  "发票号码": "25272XXX",
  "开票日期": "2017年XX月XX日",
  "校验码": "15922733756000XXXXXX",
  "发票金额": "XXX.00",
  "发票税额": "XXX.43",
  "不含税金额": "XXX.57",
  "受票方名称": "XXX",
  "受票方税号": "XXXX",
  "受票方地址、电话": "XXX",
  "受票方开户行、账号": "XXX",
  "销售方名称": "XXX",
  "销售方税号": "913201043023368XXX",
  "销售方地址、电话": "XXX",
  "销售方开户行、账号": "XXX"
}
```

---


<a name="MTL_recognizeInvoice" class="anchor"></a>
### recognizeInvoice
配合[图像接口]()使用，直接识别已选择(或下载)的图片。 

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 阿里云申请的 appcode |
| image | string | 是 | 图片，支持 localId/base64 |


**示例**
```javascript
mtl.recognizeInvoice({
  appCode: "",
  image: "",
  success: function(res) {
    var result = res.data; // 返回识别结果，同 scanInvoice
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---

<a name="qZ8Gm"></a>
## 身份证
<a name="MTL_scanIDCard" class="anchor"></a>
### scanIDCard
打开相机扫描身份证并返回识别结果

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 阿里云申请的 appcode |
| side | string | 是 | 身份证正反面；face/back   |


**示例**
```javascript
mtl.scanIDCard({
  appCode: "",
  side: "face",
  success: function(res) {
    var result = res.data;
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

**返回的数据格式**
```json
{
  address: "浙江省杭州市余杭区文一西路969号", // 地址信息
  config_str: '{"side":"face"}', // 配置信息，同输入configure
  face_rect: {
    // 人脸位置
    angle: -90, // angle 表示矩形顺时针旋转的度数
    center: {
      // center 表示人脸矩形中心坐标
      x: 952,
      y: 325.5
    },
    size: {
      // size表示人脸矩形长宽
      height: 181.99,
      width: 164.99
    }
  },
  face_rect_vertices: [
    // 人脸位置，四个顶点表示
    {
      x: 1024.6600341796875,
      y: 336.629638671875
    },
    {
      x: 906.66107177734375,
      y: 336.14801025390625
    },
    {
      x: 907.1590576171875,
      y: 214.1490478515625
    },
    {
      x: 1025.157958984375,
      y: 214.63067626953125
    }
  ],
  name: "张三", // 姓名
  nationality: "汉", // 民族
  num: "1234567890", // 身份证号
  sex: "男", // 性别
  birth: "20000101", // 出生日期
  nationality: "汉", // 民族
  success: true // 识别结果，true表示成功，false表示失败
};
```

```json
{
  config_str: '{"side":"back"}', // 配置信息，同输入configure
  start_date: "19700101", // 有效期起始时间
  end_date: "19800101", // 有效期结束时间
  issue: "杭州市公安局", // 签发机关
  success: true // 识别结果，true表示成功，false表示失败
}
```

---


<a name="MTL_recognizeIDCard" class="anchor"></a>
### recognizeIDCard
配合[图像接口]()使用，直接识别已选择(或下载)的图片。 

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 阿里云申请的 appcode |
| side | string | 是 | 身份证正反面；face/back   |
| image | string | 是 | 图片，支持 localId/base64 |


**示例**
```javascript
mtl.recognizeIDCard({
  appCode: "",
  image: "",
  side: "",
  success: function(res) {
    var result = res.data; // 返回识别结果，同上
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="VpNee"></a>
## 银行卡
<a name="MTL_scanBankCard" class="anchor"></a>
### scanBankCard
打开相机扫描银行卡并返回识别结果

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 阿里云申请的 appcode |


**示例**
```javascript
mtl.scanBankCard({
  appCode: "",
  success: function(res) {
    var result = res.data; // 返回识别结果
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

**返回数据格式**
```json
{
  "card_num" : "1234567890123456",		// 银行卡卡号，可能为空
  "request_id" : "2017...b865d2973",	// 请求唯一标识，用于错误追踪
  "success" : true      							// 识别成功与否 true/false
}
```

---


<a name="MTL_recognizeBankCard" class="anchor"></a>
### recognizeBankCard
配合[图像接口]()使用，直接识别已选择(或下载)的图片。

<br> 

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| appCode | string | 是 | 阿里云申请的 appcode |
| image | string | 是 | 图片，支持 localId/base64 |


**示例**
```javascript
mtl.recognizeBankCard({
  appCode: "",
  image: "",
  success: function(res) {
    var result = res.data; // 返回识别结果，同上
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```


