# terminal-proxy

一个在命令行中便捷使用Proxy的cli工具。支持bash和cmd。

## 简单的用法

```bash
termproxy curl www.google.com
```

## 安装

```bash
npm install -g terminal-proxy
```

## 使用源码安装

```bash
npm link
```

## 在使用之前你需要配置你的Proxy地址

```bash
termproxy-set <YOUR_PROXY_URL>
```

## 用法

```bash
termproxy <YOUR_COMMANDS>
```

## 显示当前Proxy的配置

```bash
termproxy-show
```

## 清楚配置

```bash
termproxy-set
```

## 配置文件地址

> ~/.termproxy