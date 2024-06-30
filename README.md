## React19 + React Compiler 移动端基础脚手架

## 文件式路由系统 [vite-plugin-pages](https://www.npmjs.com/package/vite-plugin-pages)
```
// pages 文件路由说明 remix 路由风格（支持路由组，无布局路径等）
|-- pages
|   |-- _app.tsx      // 默认项目目录文件
|   |-- index.tsx     // 默认index页
|   |-- $.tsx         // 404页
```

### 使用前需全局执行以下命令
* `npm install -g commitizen` 解决部分 windows 电脑提交代码时校验不生效（macOS 系统可跳过）
* `git config --global core.autocrlf false` 解决部分 windows 电脑下换行符问题（macOS 系统可跳过）

### 构建命令
```
yarn dev // 开发环境启动项目
yarn build:staging // 测试环境build命令
yarn build // 生产环境build命令
```
## commit规范

    示例: `git commit -m "feat(home): 添加导航栏"`

1. type（必须） : commit 的类别，只允许使用下面几个标识：
```
  - feat : 新功能
  - fix : 修复bug
  - bug: 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
  - docs : 文档改变
  - style : 代码格式改变
  - refactor : 某个已有功能重构
  - test : 增加测试
  - build : 改变了build工具 如 grunt换成了 npm
  - revert : 撤销上一次的 commit
  - chore : 构建过程或辅助工具的变动
  - merge : 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
```
2. scope（必须） : 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同。

3. subject（必须） : commit 的简短描述，不超过50个字符。
