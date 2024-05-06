import{_ as i}from"./chunks/articleMetadata.RSg_oukH.js";import{_ as p,h as r,u as d,B as c,l as s,x as m,ai as _,m as w,f as o,p as g,q as h}from"./chunks/framework.h2at8Qew.js";import"./chunks/theme.DxuMJqyy.js";const u="/assets/202204181522517.CyvHyvvX.png",P="/assets/202204181529411.wHiZiRIf.png",M=JSON.parse('{"title":"解决在Apple M1上使用Parallels安装Windows后无法使用OpenVPN的问题","description":"由于工作需要，我在 macOS 上安装 Windows，但是在 Windows 上却无法使用 OpenVPN。","frontmatter":{"title":"解决在Apple M1上使用Parallels安装Windows后无法使用OpenVPN的问题","description":"由于工作需要，我在 macOS 上安装 Windows，但是在 Windows 上却无法使用 OpenVPN。","date":"2022-04-18T15:03:51.000Z","tags":["MacOS"]},"headers":[],"relativePath":"blog/2022/macos-parallels-miss-tap-windows.md","filePath":"posts/blog/2022/macos-parallels-miss-tap-windows/README.md","lastUpdated":1714983786000}'),A={name:"blog/2022/macos-parallels-miss-tap-windows.md"},f=s("h1",{id:"解决在apple-m1上使用parallels安装windows后无法使用openvpn的问题",tabindex:"-1"},[m("解决在Apple M1上使用Parallels安装Windows后无法使用OpenVPN的问题 "),s("a",{class:"header-anchor",href:"#解决在apple-m1上使用parallels安装windows后无法使用openvpn的问题","aria-label":'Permalink to "解决在Apple M1上使用Parallels安装Windows后无法使用OpenVPN的问题"'},"​")],-1),b=_('<p>在安装 <code>openVpn</code> 的最后步骤报错如下:</p><div class="language-text vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>There are no TAP-Windows adapters on this system.  You should be able to create a TAP-Windows adapter by going to Start -&gt; All Programs -&gt; TAP-Windows -&gt; Utilities -&gt; Add a new TAP-Windows virtual ethernet adapter.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>虽然报错，但是提示安装完成，打开后，果不其然，无法连接</p><p>打开设备管理器 &gt; 网络适配器 查看，并没有 <code>TAP-Windows Adapter V9</code> 适配器</p><p>解决办法如下：</p><ol><li>下载 <a href="https://www.aliyundrive.com/s/9ZjEohW4JTs" target="_blank" rel="noreferrer">OpenVPN</a> 客户端 (提取码 4f5c)，并安装，安装好后再次查看网络适配器，应该有 <code>TAP-Windows Adapter V9</code> 适配器，如下：</li></ol><p><img src="'+u+'" alt="img" loading="lazy"></p><ol start="2"><li>再次进行测试连接</li></ol><p><img src="'+P+'" alt="img" loading="lazy"></p>',9);function v(e,V,T,W,N,O){const n=i,l=w("ClientOnly");return o(),r("div",null,[f,d(l,null,{default:c(()=>{var a,t;return[(((a=e.$frontmatter)==null?void 0:a.aside)??!0)&&(((t=e.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(o(),g(n,{key:0,article:e.$frontmatter},null,8,["article"])):h("",!0)]}),_:1}),b])}const S=p(A,[["render",v]]);export{M as __pageData,S as default};