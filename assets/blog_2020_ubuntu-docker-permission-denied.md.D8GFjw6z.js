import{_ as l}from"./chunks/articleMetadata.BTt4QM4q.js";import{_ as o,B as p,a as h,u as c,E as d,e as n,H as k,ah as u,o as i,D as b,C as m}from"./chunks/framework.Bb9ScoKk.js";import"./chunks/theme.DroR80N-.js";const P=JSON.parse(`{"title":"Ubuntu启动Docker报没有权限","description":"解决Ubuntu启动Docker 'Got permission denied while trying to connect to the Docker daemon socket' 问题。","frontmatter":{"title":"Ubuntu启动Docker报没有权限","description":"解决Ubuntu启动Docker 'Got permission denied while trying to connect to the Docker daemon socket' 问题。","date":"2020-11-11T08:11:30.000Z","categories":["奇技淫巧"],"tags":["Ubuntu","Docker"]},"headers":[],"relativePath":"blog/2020/ubuntu-docker-permission-denied.md","filePath":"posts/blog/2020/ubuntu-docker-permission-denied/README.md","lastUpdated":1713780257000}`),g={name:"blog/2020/ubuntu-docker-permission-denied.md"},F=n("h1",{id:"ubuntu启动docker报没有权限",tabindex:"-1"},[k("Ubuntu启动Docker报没有权限 "),n("a",{class:"header-anchor",href:"#ubuntu启动docker报没有权限","aria-label":'Permalink to "Ubuntu启动Docker报没有权限"'},"​")],-1),y=u(`<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>解决Ubuntu启动Docker &quot;Got permission denied while trying to connect to the Docker daemon socket&quot; 问题。在终端执行 <code>docker version </code>命令，出现以下错误</p><p><img src="https://pic.yqqy.top/blog/20201111081457.png" alt="image-20201111081455844" title="docker version"></p><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-label="Permalink to &quot;原因分析&quot;">​</a></h2><p>docker进程使用 Unix Socket 而不是 TCP 端口。而默认情况下，Unix socket 属于 root 用户，因此需要 <strong>root权限</strong> 才能访问。</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>将 docker 添加进用户组，代码如下，依次执行：</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 添加docker用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> groupadd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 检测当前用户是否已经在docker用户组中，其中XXX为系统用户名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gpasswd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $XXX </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 将当前用户添加至docker用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gpasswd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $USER </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docker</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 更新docker用户组</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">newgrp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><img src="https://pic.yqqy.top/blog/20201111081918.png" alt="image-20201111081917641" title="解决方案"></p><h2 id="检查结果" tabindex="-1">检查结果 <a class="header-anchor" href="#检查结果" aria-label="Permalink to &quot;检查结果&quot;">​</a></h2><p>再次执行 <code>docker version</code> 命令，发现不再出现缺失权限的问题</p><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/liangllhahaha/article/details/92077065" target="_blank" rel="noreferrer">解决Ubuntu18.04启动Docker“Got permission denied while trying to connect to the Docker daemon socket“问题</a></li></ul>`,13);function _(s,C,E,B,f,D){const t=l,r=p("ClientOnly");return i(),h("div",null,[F,c(r,null,{default:d(()=>{var a,e;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((e=s.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(i(),b(t,{key:0,article:s.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),y])}const w=o(g,[["render",_]]);export{P as __pageData,w as default};
