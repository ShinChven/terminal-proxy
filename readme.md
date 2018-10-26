# terminal-proxy

A terminal tool to run commands behind proxy in terminal. Can be used in bash and CMD.

## use it like

```bash
termproxy curl www.google.com
```

## install

```bash
npm install -g terminal-proxy
```

## install from source

```bash
npm link
```

## set proxy before using it

```bash
termproxy-set <YOUR_PROXY_URL>
```

## usage

```bash
termproxy <YOUR_COMMANDS>
```

## show proxy

```bash
termproxy-show
```

## unset proxy

```bash
termproxy-set
```

## config file path

> ~/.termproxy