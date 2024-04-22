import{_ as p}from"./chunks/articleMetadata.BTt4QM4q.js";import{_ as r,B as o,a as c,u as h,E as d,e as a,H as g,ah as k,o as e,D as m,C as F}from"./chunks/framework.Bb9ScoKk.js";import"./chunks/theme.DroR80N-.js";const v=JSON.parse('{"title":"golang写的web程序如何简单的部署到宝塔面板中","description":"golang web程序部署到宝塔面板中，并常驻后台的方法","frontmatter":{"title":"golang写的web程序如何简单的部署到宝塔面板中","description":"golang web程序部署到宝塔面板中，并常驻后台的方法","date":"2019-12-14T11:25:02.000Z","categories":["后端"],"tags":["Golang"]},"headers":[],"relativePath":"blog/2019/golang-web-baota.md","filePath":"posts/blog/2019/golang-web-baota/README.md","lastUpdated":1713780257000}'),b={name:"blog/2019/golang-web-baota.md"},u=a("h1",{id:"golang写的web程序如何简单的部署到宝塔面板中",tabindex:"-1"},[g("golang写的web程序如何简单的部署到宝塔面板中 "),a("a",{class:"header-anchor",href:"#golang写的web程序如何简单的部署到宝塔面板中","aria-label":'Permalink to "golang写的web程序如何简单的部署到宝塔面板中"'},"​")],-1),C=k(`<div class="tip custom-block"><p class="custom-block-title">🤔?</p><p>写好的go web 如何在不配置环境的情况下部署到宝塔呢</p></div><h2 id="描述" tabindex="-1">描述 <a class="header-anchor" href="#描述" aria-label="Permalink to &quot;描述&quot;">​</a></h2><p>写好了，如何部署在服务器上，毕竟本地没法给别人用，不多BB</p><ol><li><p>发挥golang的交叉编译功能，我服务器是linux，那我们先编译成linux</p></li><li><p>先去查看一下我们服务器的型号 <code>uname -a</code>，确认是amd64 <img src="https://pic.yqqy.top/blog/20200111/fwo1S6NLmwub.png" alt="mark" title="确认编译类型"></p></li><li><p>GOOS：目标平台的操作系统（darwin、freebsd、linux、windows） GOARCH：目标平台的体系架构（386、amd64、arm） 交叉编译不支持 CGO 所以要禁用它</p></li><li><p>Terminal执行以下四个命令</p><ul><li><code>SET CGO_ENABLED=0</code></li><li><code>SET GOOS=linux</code></li><li><code>SET GOARCH=amd64</code></li><li><code>go build main.go</code></li></ul></li><li><p>打包完之后有一个<code>main</code>程序，没有后缀</p><p><img src="https://pic.yqqy.top/blog/20200111/GxH2poCkqRq6.png" alt="mark" title="编译后文件"></p></li><li><p>在宝塔面板文件中创建一个文件夹，将这个文件上传上去</p></li><li><p>我们在终端中进入这个文件目录，然后<code>./main</code>就可以跑起来了</p><p><img src="https://pic.yqqy.top/blog/20200111/ttqcIXyxsRIS.png" alt="mark" title="服务器"></p></li><li><p>注意：golang的http已经开启了一个端口，那我们需要去开启安全组对应的端口，之后跑起来就可以用<code>ip:port</code>来访问了</p></li><li><p>如果想通过访问域名来访问到golang的程序，那么我们需要了解<code>nginx</code>的反向代理知识</p><ul><li>宝塔面板有傻瓜式设置反向代理</li><li>设置完了之后就可以通过域名访问了</li></ul><p><img src="https://pic.yqqy.top/blog/20200111/UiqC3zNM6KBK.png" alt="mark" title="宝塔设置代理"></p></li></ol><h2 id="保活" tabindex="-1">保活 <a class="header-anchor" href="#保活" aria-label="Permalink to &quot;保活&quot;">​</a></h2><ol><li><p>没有后台运行，当我们关掉终端就会结束掉程序，那有什么意义呢</p></li><li><p>了解一下linux的screen命令</p></li></ol><ul><li>下载screen <code>yum install screen</code></li></ul><ol start="3"><li><p>【终端操作】 （需要在物理shell中操作）</p><ul><li>screen -S name 创建 名为name的 screen</li><li>screen -a 然后 d 暂时离开此screen 后台继续运行</li><li>screen -ls 列出所有screen 进程 pid 与名称</li><li>screen -r + pid（或者名称）回到screen(attached状态）,如果就一个screen进程，可以省略 pid</li></ul></li><li><p>【终端中的窗口操作】（挂载某个终端）</p><ul><li><strong>Ctrl+a c</strong> ：创建窗口</li><li><strong>Ctrl+a w</strong> ：窗口列表</li><li><strong>Ctrl+a n</strong> ：下一个窗口</li><li><strong>Ctrl+a p</strong> ：上一个窗口</li><li><strong>Ctrl+a 0-9</strong> ：在第0个窗口和第9个窗口之间切换</li><li><strong>Ctrl+a K(大写)</strong> ：关闭当前窗口，并且切换到下一个窗口（当退出最后一个窗口时，该终端自动终止，并且退回到原始shell状态）</li><li><strong>exit</strong> ：关闭当前窗口，并且切换到下一个窗口（当退出最后一个窗口时，该终端自动终止，并且退回到原始shell状态）</li><li><strong>Ctrl+a d</strong> ：退出当前终端，返回加载screen前的shell命令状态</li></ul></li><li><p><strong>如何关闭一个终端？</strong> 如果需要关闭一个终端，可以先进入此终端，然后将所有窗口关闭，当所有窗口都关闭的时候，终端自动关闭，并且出现“[screen is terminating]”。</p><p>具体命令如下</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 关闭某个进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">screen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> kill</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Screen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pid</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> quit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 关闭全部进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">screen</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> killall</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 在进程中关闭</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ctrl+c</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div></li></ol><p><img src="https://pic.yqqy.top/blog/20200111/ym3qOaGiSJIL.png" alt="mark" title="运行图"></p>`,9);function y(s,_,B,E,w,q){const n=p,t=o("ClientOnly");return e(),c("div",null,[u,h(t,null,{default:d(()=>{var i,l;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((l=s.$frontmatter)==null?void 0:l.showArticleMetadata)??!0)?(e(),m(n,{key:0,article:s.$frontmatter},null,8,["article"])):F("",!0)]}),_:1}),C])}const O=r(b,[["render",y]]);export{v as __pageData,O as default};
