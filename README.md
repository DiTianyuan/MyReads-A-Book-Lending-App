# MyReads Project 图书跟踪应用

该项目为一个用 React 构建的书架应用，可以使用该应用选择和归类读过的图书、正在阅读的图书以及想要阅读的图书，以及查找图书并将其添加到相应书架。

## 安装和启动

* 使用 `npm install` 命令安装该应用
* 使用 `npm start` 命令启动该应用

## 如何运行

介绍支持该项目运行的四个主要文件：

* [`App.js`](src/App.js)
创建此应用的根文件，在此文件中定义组件 `App` ，此组件中调用组件 `CreateMainPage` 和 `CreateSearchPage`。

* [`CreateMainPage.js`](src/CreateMainPage)
在此文件中定义组件 `CreateMainPage` ，用于创建主页面。

* [`CreateSearchPage.js`](src/CreateSearchPage.js)
在此文件中定义组件 `CreateSearchPage` ，用于创建搜索页面。此组件中调用组件 `AddBooks` 。

* [`AddBooks.js`](src/AddBooks.js)
在此文件中定义组件 `AddBooks` ，用于在搜索页面上添加图书。

## 如何使用

启动应用后，主页面显示三个书架 `"Currently Reading"`  、 `"Want to Read"`  和 `"Want to Read"` ，每个书架上有若干图书，图书下方显示书名和作者。每个图书有一个选择菜单，用于将图书在书架间移动，默认选中项为当前所在书架。点击主页面右下方的 `"+"` 按钮即可转到搜索页面。

搜索页面上方显示一个 `"←"` 按钮与一个输入框，点击 `"←"` 按钮即刻返回主页面。在输入框中输入关键字，与关键字匹配的图书即显示在输入框下方，每个图书也可通过点击选择菜单中相应项来放入特定书架。设置好书架后返回主页面，主页面相应书架上即显示新加入的图书。且每个图书的选择菜单默认选中项在主页面和搜索页面一致，都为该图书当前所在书架。

## 退出

使用 `Ctrl+C` 退出应用

