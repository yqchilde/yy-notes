import{_ as p}from"./chunks/articleMetadata.BTt4QM4q.js";import{_ as r,B as i,a as d,u as c,E as m,e as s,H as _,ah as w,o,D as h,C as g}from"./chunks/framework.Bb9ScoKk.js";import"./chunks/theme.DroR80N-.js";const C=JSON.parse('{"title":"解决在 Apple M1 上使用 Parallels 安装 Windows 后无法使用 OpenVPN 的问题","description":"由于工作需要，我在 macOS 上安装 Windows，但是在 Windows 上却无法使用 OpenVPN。","frontmatter":{"title":"解决在 Apple M1 上使用 Parallels 安装 Windows 后无法使用 OpenVPN 的问题","description":"由于工作需要，我在 macOS 上安装 Windows，但是在 Windows 上却无法使用 OpenVPN。","date":"2022-04-18T15:03:51.000Z","categories":["奇技淫巧"],"tags":["MacOS"]},"headers":[],"relativePath":"blog/2022/macos-parallels-miss-tap-windows.md","filePath":"posts/blog/2022/macos-parallels-miss-tap-windows/README.md","lastUpdated":1713780257000}'),u={name:"blog/2022/macos-parallels-miss-tap-windows.md"},P=s("h1",{id:"解决在-apple-m1-上使用-parallels-安装-windows-后无法使用-openvpn-的问题",tabindex:"-1"},[_("解决在 Apple M1 上使用 Parallels 安装 Windows 后无法使用 OpenVPN 的问题 "),s("a",{class:"header-anchor",href:"#解决在-apple-m1-上使用-parallels-安装-windows-后无法使用-openvpn-的问题","aria-label":'Permalink to "解决在 Apple M1 上使用 Parallels 安装 Windows 后无法使用 OpenVPN 的问题"'},"​")],-1),A=w('<p>在安装 <code>openVpn</code> 的最后步骤报错如下:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>There are no TAP-Windows adapters on this system.  You should be able to create a TAP-Windows adapter by going to Start -&gt; All Programs -&gt; TAP-Windows -&gt; Utilities -&gt; Add a new TAP-Windows virtual ethernet adapter.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>虽然报错，但是提示安装完成，打开后，果不其然，无法连接</p><p>打开设备管理器 &gt; 网络适配器 查看，并没有 <code>TAP-Windows Adapter V9</code> 适配器</p><p>解决办法如下：</p><ol><li>下载 <a href="https://www.aliyundrive.com/s/9ZjEohW4JTs" target="_blank" rel="noreferrer">OpenVPN</a> 客户端 (提取码 4f5c)，并安装，安装好后再次查看网络适配器，应该有 <code>TAP-Windows Adapter V9</code> 适配器，如下：</li></ol><p><img src="https://pic.yqqy.top/blog/202204181522517.png" alt=""></p><ol start="2"><li>再次进行测试连接</li></ol><p><img src="https://pic.yqqy.top/blog/202204181529411.png" alt=""></p>',9);function b(e,f,V,T,W,v){const n=p,l=i("ClientOnly");return o(),d("div",null,[P,c(l,null,{default:m(()=>{var a,t;return[(((a=e.$frontmatter)==null?void 0:a.aside)??!0)&&(((t=e.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(o(),h(n,{key:0,article:e.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),A])}const k=r(u,[["render",b]]);export{C as __pageData,k as default};
