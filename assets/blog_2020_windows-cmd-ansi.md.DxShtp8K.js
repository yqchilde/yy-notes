import{_ as r}from"./chunks/articleMetadata.BTt4QM4q.js";import{_ as o,B as c,a as p,u as d,E as m,e as s,H as h,ah as u,o as i,D as g,C as _}from"./chunks/framework.Bb9ScoKk.js";import"./chunks/theme.DroR80N-.js";const x=JSON.parse('{"title":"解决win10的cmd命令行不转义ANSI序列（让cmd输出彩色字体）","description":"简单来说就是装了之后能在cmd中通过一些代码实现华丽的效果，比如改变字体颜色","frontmatter":{"title":"解决win10的cmd命令行不转义ANSI序列（让cmd输出彩色字体）","description":"简单来说就是装了之后能在cmd中通过一些代码实现华丽的效果，比如改变字体颜色","date":"2020-01-11T10:26:10.000Z","categories":["奇技淫巧"],"tags":["Terminal"]},"headers":[],"relativePath":"blog/2020/windows-cmd-ansi.md","filePath":"posts/blog/2020/windows-cmd-ansi/README.md","lastUpdated":1713780257000}'),b={name:"blog/2020/windows-cmd-ansi.md"},k=s("h1",{id:"解决win10的cmd命令行不转义ansi序列-让cmd输出彩色字体",tabindex:"-1"},[h("解决win10的cmd命令行不转义ANSI序列（让cmd输出彩色字体） "),s("a",{class:"header-anchor",href:"#解决win10的cmd命令行不转义ansi序列-让cmd输出彩色字体","aria-label":'Permalink to "解决win10的cmd命令行不转义ANSI序列（让cmd输出彩色字体）"'},"​")],-1),f=u(`<h2 id="什么是ansi序列" tabindex="-1">什么是ANSI序列 <a class="header-anchor" href="#什么是ansi序列" aria-label="Permalink to &quot;什么是ANSI序列&quot;">​</a></h2><p>ANSI转义序列是一种带内信号的转义序列标准，用于控制视频文本终端上的光标位置、颜色和其他选项。在文本中嵌入确定的字节序列，大部分以ESC转义字符和&quot;[&quot;字符开始，终端会把这些字节序列解释为相应的指令，而不是普通的字符编码。</p><p>ANSI序列是在二十世纪七十年代引入的标准，用以取代特定于终端供应商的序列，并在二十世纪八十年代早期开始在计算机设备市场上广泛使用。与早期缺少光标移动功能的系统相比，新生的电子公告板系统使用ANSI序列改进其显示。正是因为这个原因，ANSI序列变成了所有制造商共同采用的标准。</p><p>简单来说就是装了之后能在cmd中通过一些代码实现华丽的效果，比如改变字体颜色</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><ol><li><p>从<a href="https://github.com/adoxa/ansicon/releases" target="_blank" rel="noreferrer">这里</a>下载最新文件，解压</p></li><li><p>选择自己的电脑需要的配置</p><p><img src="https://pic.yqqy.top/blog/20200111/PtEwQgNosvfj.png" alt="mark"></p><p><img src="https://pic.yqqy.top/blog/20200111/Wa5AQmQeh1H1.png" alt="mark"></p></li><li><p>路径行输入cmd快捷进入当前路径下的cmd窗口</p></li><li><p>执行下面两行代码进行安装</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ansicon.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ansicon.exe</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ol><h2 id="效果展示" tabindex="-1">效果展示 <a class="header-anchor" href="#效果展示" aria-label="Permalink to &quot;效果展示&quot;">​</a></h2><ul><li><p><strong>原来效果</strong></p><p><img src="https://pic.yqqy.top/blog/20200111/maNVT3Wcio8H.png" alt="mark"></p></li><li><p><strong>现在效果</strong></p><p><img src="https://pic.yqqy.top/blog/20200111/y4lANsHxEczi.png" alt="mark"></p></li></ul><h2 id="参考博客" tabindex="-1">参考博客 <a class="header-anchor" href="#参考博客" aria-label="Permalink to &quot;参考博客&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/naiij/p/9772584.html" target="_blank" rel="noreferrer">cmd输出彩色字体（win10 cmd控制台支持ANSI转义序列）</a></li></ul>`,10);function N(a,w,A,q,y,C){const n=r,l=c("ClientOnly");return i(),p("div",null,[k,d(l,null,{default:m(()=>{var e,t;return[(((e=a.$frontmatter)==null?void 0:e.aside)??!0)&&(((t=a.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(i(),g(n,{key:0,article:a.$frontmatter},null,8,["article"])):_("",!0)]}),_:1}),f])}const E=o(b,[["render",N]]);export{x as __pageData,E as default};
