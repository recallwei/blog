# 判断文件格式

## 获取文件扩展名

```javascript
const fileLink = "www.recall4056/batman.jpg";
let fileExtension = fileLink.split(".").pop().toLowerCase();
```

```javascript
const fileLink = "www.recall4056/batman.jpg";
let index = fileLink.lastIndexOf(".");
let fileExtension = fileLink.substring(index + 1).toLowerCase();
```

### 带 Token 的链接

先去掉 URL **?** 后的链接参数，再处理新 URL 的后缀。

```javascript
const fileLink = `www.recall4056/batman.jpg?sv=2018-03-28&sr=c&sig=UOJbzOqTBTKYZtnyT3%2FDQ%2FrdFMFTlbpNij%2B3%2B0MU%2FSg%3D&se=2022-05-03T15%3A58%3A12Z&sp=rl`;
let fileExtension = fileLink.split("?")[0].split(".").pop().toLowerCase();
```

## 文件类型判断

```javascript
let fileExtension = "PNG";
// 常见图片扩展名数组
let imageArr = [
  "png",
  "jpg",
  "jpeg",
  "bmp",
  "gif",
  "webp",
  "psd",
  "svg",
  "tiff",
];
console.log(imageArr.indexOf(fileExtension.toLowerCase()) > -1); // expect: true
```