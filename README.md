# MyReads Project 图书跟踪应用

该项目为一个用 React 构建的书架应用，可以使用该应用选择和归类读过的图书、正在阅读的图书以及想要阅读的图书，以及查找图书并将其添加到相应书架。

## 文件结构
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms to use with the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React Icon
│   └── index.html
└── src
    ├── AddBooks.js # The child component to build the search page.
    ├── App.css # Styles for the app.
    ├── App.js # This is the root of the app. The parent component.
    ├── App.test.js # Used for testing. Provided with Create React App.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── CreateMainPage.js # The child component to build the main page.
    ├── icons # Helpful images for the app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## 后端服务器

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I used to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* 用以获取渲染初始状态下主页面书架中图书的图书集合。


### `update`

Method Signature:

```js
update(book, shelf)
```

* 传入图书与书架，用以在后端服务器上更新该图书的书架

### `search`

Method Signature:

```js
search(query)
```

* 用以搜索图书，传入关键字，返回与关键字相匹配的图书（最多20个），获得的图书无`shelf`属性
* 后端API限制了搜索条件，_只有_ [SEARCH_TERMS.md](SEARCH_TERMS.md) 文件中提供的关键字可以成功搜索

## 安装和启动

* 使用 `npm install` 命令安装该应用
* 使用 `npm start` 命令启动该应用
