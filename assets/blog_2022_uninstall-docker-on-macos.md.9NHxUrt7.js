import{_ as p}from"./chunks/articleMetadata.C4FTDCLz.js";import{_ as t,B as h,a as r,u as F,E as d,e as n,H as o,ah as c,o as e,D as C,C as g}from"./chunks/framework.DYe01KkP.js";import"./chunks/theme.DYHMC7H3.js";const P=JSON.parse('{"title":"在Mac上彻底卸载Docker","description":"当我从 Intel 芯片的 Mac 使用迁移助理迁移到 M1 芯片的 Mac 时，docker desktop 打不开了（尝试了很多次卸载重装M1版本的 docker desktop ），这是因为卸载 docker desktop 时没有卸载干净，即使是使用三方工具，如 sensei 工具卸载。这个文章就是为了解决这个问题。","frontmatter":{"title":"在Mac上彻底卸载Docker","description":"当我从 Intel 芯片的 Mac 使用迁移助理迁移到 M1 芯片的 Mac 时，docker desktop 打不开了（尝试了很多次卸载重装M1版本的 docker desktop ），这是因为卸载 docker desktop 时没有卸载干净，即使是使用三方工具，如 sensei 工具卸载。这个文章就是为了解决这个问题。","date":"2022-03-08T15:12:47.000Z","categories":["奇技淫巧"],"tags":["Docker"]},"headers":[],"relativePath":"blog/2022/uninstall-docker-on-macos.md","filePath":"posts/blog/2022/uninstall-docker-on-macos/README.md","lastUpdated":1713927161000}'),y={name:"blog/2022/uninstall-docker-on-macos.md"},B=n("h1",{id:"在mac上彻底卸载docker",tabindex:"-1"},[o("在Mac上彻底卸载Docker "),n("a",{class:"header-anchor",href:"#在mac上彻底卸载docker","aria-label":'Permalink to "在Mac上彻底卸载Docker"'},"​")],-1),u=c(`<h2 id="情况一-可以打开-docker-desktop" tabindex="-1">情况一：可以打开 Docker Desktop <a class="header-anchor" href="#情况一-可以打开-docker-desktop" aria-label="Permalink to &quot;情况一：可以打开 Docker Desktop&quot;">​</a></h2><p>直接在 Mac 上打开 Docker Desktop，然后点击troubleshoot <img src="https://pic.yqqy.top/blog/202203081550197.png" alt=""> 进入后再点击 uninstall。</p><p><img src="https://pic.yqqy.top/blog/202203081544328.png" alt="img" title="img1"></p><h2 id="情况二-打不开-docker-desktop" tabindex="-1">情况二：打不开 Docker Desktop <a class="header-anchor" href="#情况二-打不开-docker-desktop" aria-label="Permalink to &quot;情况二：打不开 Docker Desktop&quot;">​</a></h2><p>打开命令行执行以下命令：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/Applications/Docker.app/Contents/MacOS/Docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --uninstall</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="情况三-打不开-docker-desktop-且情况二无法解决" tabindex="-1">情况三：打不开 Docker Desktop 且情况二无法解决 <a class="header-anchor" href="#情况三-打不开-docker-desktop-且情况二无法解决" aria-label="Permalink to &quot;情况三：打不开 Docker Desktop 且情况二无法解决&quot;">​</a></h2><p>打开命令行执行以下命令：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Applications/Docker.app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker-machine</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/com.docker.cli</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker-compose</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker-compose-v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker-credential-desktop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker-credential-ecr-login</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/docker-credential-osxkeychain</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/hub-tool</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/hyperkit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/kubectl.docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/vpnkit</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/.docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/Containers/com.docker.docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/Application</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Support/Docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Desktop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/Group</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Containers/group.com.docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/HTTPStorages/com.docker.docker.binarycookies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Library/PrivilegedHelperTools/com.docker.vmnetd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /Library/LaunchDaemons/com.docker.vmnetd.plist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/Logs/Docker</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Desktop</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/lib/docker</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/Preferences/com.docker.docker.plist</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Rf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/Saved</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Application</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">State/com.electron.docker-frontend.savedState</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/Library/Preferences/com.electron.docker-frontend.plist</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p><strong>参考资料：</strong></p><ul><li><a href="https://docs.docker.com/desktop/mac/troubleshoot/" target="_blank" rel="noreferrer">https://docs.docker.com/desktop/mac/troubleshoot/</a></li></ul>`,11);function m(s,b,E,f,_,D){const l=p,k=h("ClientOnly");return e(),r("div",null,[B,F(k,null,{default:d(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(e(),C(l,{key:0,article:s.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),u])}const A=t(y,[["render",m]]);export{P as __pageData,A as default};