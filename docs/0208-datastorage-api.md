# 数据缓存

> 改动：
> mtl.getStorage 值为空时返回 null

<a name="MTL_setStorage" class="anchor"></a>
### setStorage
存储缓存数据

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| domain | string | 否 | 缺省时使用默认的域 |
| key | string | 是 | 存储数据用的 key |
| data | any |  | 存储的数据，支持 number、string、及能够通过 JSON.stringify 序列化的对象。 |


**示例**
```javascript
mtl.setStorage({
  domain: "a",
  key: "key",
  data: "value",
  success: function() {
    // 成功回调
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_getStorage" class="anchor"></a>
### getStorage
获取缓存数据

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| domain | string | 否 | 缺省时使用默认的域 |
| key | string | 是 | 存储数据用的 key |


**示例**
```javascript
mtl.getStorage({
  domain: "a",
  key: "key",
  success: function(res) {
    var value = res.data;	// 没取到值时 value 为 null
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_removeStorage" class="anchor"></a>
### removeStorage
移除缓存数据

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| domain | string | 否 | 缺省时使用默认的域 |
| key | string | 是 | 存储数据用的 key |


**示例**
```javascript
mtl.removeStorage({
  domain: "a",
  key: "key",
  success: function() {
		// 成功回调
  },  
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_clearStorage" class="anchor"></a>
### clearStorage
清除所有缓存

<br>

**支持平台**

| **微信** | **钉钉** | **友空间** | **原生** | **HTML5** |
| :--- | :--- | :--- | :--- | :--- |
| ✔︎ | ✔︎ | ✔︎ | ✔︎ | ✘ |


**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| domain | string | 否 | 缺省时使用默认的域 |


**示例**
```javascript
mtl.clearStorage({
  domain: "a",
  success: function() {
		// 成功回调
  },  
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```


