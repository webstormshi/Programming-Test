### 基本概念

#### webpack、grunt和gulp的区别
- 都是模块打包工具
- webpack可以递归打包项目中的所有模块
- Scss，less等CSS预处理器
- webpack支持code-splitting(代码分割)、模块化(AMD，ESM，CommonJs)、全局分析。
- Webpack的处理速度更快更直接，能打包更多不同类型的文件

##### Grunt和Gulp的工作方式
在一个配置文件中，指明对某些文件进行类似编译，组合，压缩等任务的具体步骤，工具之后可以自动替你完成这些任务。
<img src='https://upload-images.jianshu.io/upload_images/1031000-d0693c06bb3a00e3.png?imageMogr2/auto-orient/' />

##### Webpack的工作方式
把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。
<img src='https://upload-images.jianshu.io/upload_images/1031000-160bc667d3b6093a.png?imageMogr2/auto-orient/' />

#### bundle、chunk和module
- bundle: webpack打包出来的文件
- chunk: webpack进行模块依赖分析，代码分割出来的代码块
- module: 开发中的单个模块


 
