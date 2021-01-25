---
title: 用Hexo+GitPage搭建一个yilia主题的博客
toc: true
categories: 其他
date: 2021-01-24 20:04:40
tags:
---


如何在Mac平台搭建一个跟这个网站一样的博客，记录一下踩过的坑。

<!-- more -->

# Hexo 简介

# 初步搭建

包括环境的准备、部署到GitPage并能够基本运行起来

## 环境准备

包括Node.js，Git，Hexo的环境准备以及部署到github并发布第一篇文章

### Node.js

因为Hexo是基于Node.js编写的，所以不管是产物编译还是插件安装等都需要Node.js环境。

使用Homebrew的话，可以很方便的安装node.js。没有Homebrew可以参考[这个文章](https://zhuanlan.zhihu.com/p/90508170)

```bash
brew install nodejs
brew install npm
```

之后运行下边命令可以看看安没安装成功，成功会显示版本号

```bash
node -v
npm -v
```

### Git

因为hexo产物要部署到github所以git也是必不可少的，同时也方便源码的管理及迁移。

mac应该自带了git运行下边命令可以查看有没有。

```bash
git --version
```

成功会显示版本号，没安装最简单方法就是安装XCode命令行工具

先到 App Store 安装 Xcode，Xcode 完成后，启动并进入 **Preferences -> Download -> Command Line Tools -> Install** 安装命令行工具。

### Hexo

贴一下官方[基础文档](https://hexo.io/zh-cn/docs/)

先在任意位置新建个文件夹如hexo，然后cd进去，运行

```bash
npm install -g hexo-cli
```

然后可以运行下边命令看是否安装成功

```bash
hexo -v
```

之后运行

```bash
hexo init myblog
```

来初始化博客，实际上就是把hexo源码从git拉下来，myblog是文件夹名字可以随便取。这时候ls一下可以发现生成了一个myblog文件夹，cd进去之后运行

```bash
npm install
```

来安装运行环境。完成之后会发现myblog下生成了一系列文件及文件夹：

```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```

这样一个空的网站就生成了。可以先运行起来看看效果：

```bash
hexo server
```

命令行会显示：

```bash
INFO  Validating config
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop
```

接下来只需要打开浏览器并打开 [localhost:4000](http://localhost:4000) 就可以看到基本的效果了

![基本网站](基础网站示例.png)

命令行**⌃(control)+c**就可以关掉服务器了

### 建立GitPage

#### 建立个人仓库

注册账号就不说了，注册之后想使用GitPage功能，需要有一个跟用户名同名的[username].github.io仓库。点击**New Repository**来建立仓库。**owner**留着默认的自己用户名就行，后边**Repository name**要填写**你的用户名+.github.io**。下边仓库类型最好直接选**Public**不然会有坑，这个留到后边说。点击**create repository**

![建立个人仓库](建个人仓库.png)

#### 如果部署后显示404

如果建库的时候选了private仓库，后边部署的时候会发现GitPage一直都是404，这里需要做些修改。

* 修改名字

  进到刚建好的的仓库中，选择**settings**，进来就会看到有一个**Repository name**，改成正确的名字.github.io，点rename就好

* 建了private库

  还是在**settings**中直接搜索或者往下拉找到**GitHub Pages**，我们要修改的就是这里，不过现在应该是灰的，因为只有高级账户或者Public仓库才能修改这里。再往下一点有个**Danger Zone**，点第一个**Change repository visibility**右边的**Change Visibility**，选public。然后回到上边，**Source**下拉框选**master**分支就Ok了。

### 部署

#### 部署hexo

也就是将hexo生成的文章上传到GitHub从而可以再GitPage中展示出来。

首先安装**deploy-git**插件来让hexo可以部署到GitHub上

```bash
npm install hexo-deployer-git --save
```

然后打开**_config.yml**，搜索或翻到最下边，找到**deploy:**修改其中的参数，记得保存。

```yaml
deploy:
  type: git
  repo: https://github.com/"你的用户名"/"你的用户名".gihub.io.git
  branch: master
```

最后只需要运行下边命令就会把生成的文件上传到仓库了

```bash
hexo clean # 清除之前的产物
hexo generate # 生成静态网站
hexo deploy # 上传仓库部署
```

稍等一会，然后打开**你的名字.github.io**应该就可以看到网站了，如果显示404可以参考上边的两种情况解决方案。由于静态网站文件都在GitHub所以国内上基本都会有些卡，以后可能会考虑部署到自己的服务器上，配套可以搞一套域名。

另外**_config.yml**中有很多配置项，可以参考[官网doc](https://hexo.io/zh-cn/docs/configuration)文档来根据个人需要配置，这个博客用到的一些配置会写在最后。

#### 多终端工作

由于deploy命令只是把生成的静态网站上传，如果跨终端工作我们还需要把源码也上传到仓库，这样如果换了机器只需要拉下来仓库就可以继续工作了。

可以选择同仓库两个分支，也可以选择两个仓库，为了方便就选择建两个仓库了，这样就不用两个分支换来换去。先去GitHub创建一个仓库，就叫hexoBlog了。

### 发布一篇Hello World

