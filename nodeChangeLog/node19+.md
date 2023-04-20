## nodeJS changelog
#### 20221018更新
> node  v19+  更新feature

1. node --watch 选项在 "watch" 模式下运行。在 "watch" 模式下运行，当观察文件有所更改，将自动重新启动服务器或脚本。
```
    $ node --watch index.js
```

2. 默认启用 HTTP (S)/1.1 KeepAlive，提供更好的吞吐量。默认的保持活动持续时间限制为 5 秒，以防止服务器上的连接膨胀。

3. 新增WebCrypto - Web平台的标准加密 API。
```
    globalThis.crypto 
    或
    require('node:crypto').webcrypto // 以此来访问模块
```

4. Node.js 已经删除 --experimental-specifier-resolution ，其功能现在可以通过自定义加载器实现。
例如：
```
    import { valueInFile } from './file';
```
./file 如果没有自定义加载器，不会去查找文件的扩展名，比如 ./file.js 或 ./file.mjs，运行时会报错。设置自定义加载器后，则可解决上述问题。
5. 在 v19.0.0 中，出于对资源进行优先排序的目的和原因，团队移除了对 DTrace/SystemTap/ETW 的支持。 数据表明很少人用到 DTrace、SystemTap 或 ETW，维护它们没有多大的意义。
6. Node.js v19 将 V8 JavaScript 引擎更新至 V8 10.7，其中包含一个新函数 Intl.NumberFormat，用于格式化敏感数字。
```
    Intl.NumberFormat(locales, options)
```
7. llhttp。Node.js 19 搭载了 llhttp@8.1.0
8. npm。 Node.js 19 搭载了 npm@8.19.2
9. Node.js 14 将在 2023 年 4 月生命周期达到结束，因此建议用户开始计划升级到 Node.js 16（LTS）或 Node.js 18（LTS）。Node.js 16 (LTS) 将在 2023 年 9 月达到生命周期结束，比原计划 2024 年 4 月提前了。
10. Node 19 最新版本附带了“fetch”。现在可以在没有 Node fetch 或任何其他第三方库的情况下直接使用 Nodejs 进行网络fetch。
---
> node  v18  更新feature