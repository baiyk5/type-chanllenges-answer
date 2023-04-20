## deno
#### 一、nodejs 缺陷
> 1. 基于集中式分发的设计欠佳的模块系统（Node的模块系统问题通过2022年年中的更新得到了解决。）
> 3. 缺乏安全性
#### 二、deno和node支持ES模块
> 1. node CommonJS模块加载采用require语句。ES模块加载采用import语句以及匹配的export语句。（CommonJS模块是同步加载，ES模块加载器则是异步的）
#### 三、deno安全性更高
> 1. Deno在默认情况下不允许程序访问磁盘、网络、子进程或环境变量。
> 2. Deno的另一个安全改进是，它总是一发现未捕获的错误就终结。相比之下，Node允许在未捕获的错误后继续执行，结果无法预测。
#### 四、Deno将TypeScript视为头等语言
> 1. 结合使用Deno中内置的TypeScript编译器和名为swc的Rust库，将TypeScript（以及TSX和JSX）转换成JavaScript。代码经过类型检查（如果启用检查）并转换后，存储在缓存中。换句话说，与Node.js或浏览器不同，您不需要使用tsc编译器手动为Deno转译TypeScript。
#### 五、Deno Deploy实现更快的部署
> 1. Deno Deploy是一个分布式系统，就近服务运行JS，TS等，Deno Deploy服务器与V8运行时环境深度集成，提供最小的延迟，消除不必要的抽象。您可以使用Deno CLI在本地开发脚本，然后在不到一秒的时间内将其部署到Deno Deploy的托管基础架构，无需进行任何配置。
> 2. Deno Deploy有两种版本:
    - 免费版仅限于每天10W个请求、每月100GB数据传输量以及每个请求10毫秒的CPU时间。
    - 专业版每月收费10美元，包括每月500万次请求和100GB数据传输量，加上每月每多出1百万次请求就收费2美元，以及超过配额后每传输1GB数据就收费0.30美元；允许每个请求50毫秒的CPU时间。

#### 理解
个人认为有优点如下：
1. 原生支持 ts 太重要了。
2. 基本是 0 配置起手，也没有“安装依赖”这个问题。
3. Vs code deno 扩展好用，在开发过程中不用担心工具链和 IDE 集成。

package.json、tsconfig.json、pnpm、lock、npm scripts nodejs是避不开的。
如果项目不需要很重的工程化，用 deno 的体验是非常良好的

缺点也有：
1. 与 Node.js 生态的兼容性问题。
目前持续有在提升跟 node / npm 的兼容性，但很难把deno定位成和node平替产物。
2. 模块成熟度问题。
比如：开发时找到一个 commonjs 的成熟包，发现还没有 esm 的，就抓狂了。

deno更像是关注到了node一些缺陷问题而存在，感谢deno让大家用上更好的node : )
