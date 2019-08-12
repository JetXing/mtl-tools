# 页面导航

<a name="MTL_navigateTo" class="anchor"></a>

### navigateTo

保留当前页面，跳转到应用内的某个原生页面。

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| page | string | 是 | 跳转页面 id，会从 page.json 中读取页面信息进行跳转。 |
| parameters | object | 否 | 跳转时传递参数。 |


**示例**
```javascript
mtl.navigateTo({
  page: "index",
  parameters: {
    key: "value"
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_redirectTo" class="anchor"></a>
### redirectTo
关闭当前页面，跳转到应用内的某个页面

<br>

**参数**

| **字段** | **类型** | **必填** | **说明** |
| :--- | :--- | :--- | :--- |
| page | string | 是 | 跳转页面 id，会从 page.json 中读取页面信息进行跳转。 |
| parameters | object | 否 | 跳转时传递参数。 |


**示例**
```javascript
mtl.redirectTo({
  page: "index",
  parameters: {
    key: "value"
  },
  fail: function(err) {
    var message = err.message; // 错误信息
  }
});
```

---


<a name="MTL_navigateBack" class="anchor"></a>
### navigateBack
关闭当前页面，返回上一页面

<br>

**参数**<br />

<br>

-无-

<br>

**示例**
```javascript
mtl.navigateBack()
```

---


<a name="nB6qu"></a>
### 附录
<a name="BGvTf"></a>
#### 扩展自定义原生页面
> 待添加

<a name="ZeN8O"></a>
#### 配置原生页面
> 待添加

<a name="WPf6E"></a>
#### pages.json 格式
```json
{
  "platforms": [
    {
      "platform": "wx",
      "pages": {
        "login": {
          "url": "/pages/login/login"
        },
        "index": {
          "url": "/pages/index/index"
        }
      }
    },
    {
      "platform": "ios",
      "pages": {
        "login": {
          "class": "LoginViewController"
        },
        "index": {
          "class": "HomeViewController"
        },
      }
    },
    {
      "platform": "android",
      "pages": {
        "audio": {
          "class": "com.yonyou.myapis.AudioActivity"
        }
      }
    }
  ]
}
```

