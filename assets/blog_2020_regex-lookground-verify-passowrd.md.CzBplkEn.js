import{_ as h}from"./chunks/articleMetadata.BTt4QM4q.js";import{_ as e,B as k,a as r,u as E,E as d,e as n,H as g,ah as o,o as t,D as y,C as c}from"./chunks/framework.Bb9ScoKk.js";import"./chunks/theme.DroR80N-.js";const q=JSON.parse('{"title":"Golang实现一个简单的密码强度验证","description":"了解正则表达式环视的使用方法，知道Golang为什么不支持该功能，实现一个简单的密码强度验证。","frontmatter":{"title":"Golang实现一个简单的密码强度验证","description":"了解正则表达式环视的使用方法，知道Golang为什么不支持该功能，实现一个简单的密码强度验证。","date":"2020-09-15T23:02:44.000Z","categories":["奇技淫巧"],"tags":["Golang"]},"headers":[],"relativePath":"blog/2020/regex-lookground-verify-passowrd.md","filePath":"posts/blog/2020/regex-lookground-verify-passowrd/README.md","lastUpdated":1713780257000}'),F={name:"blog/2020/regex-lookground-verify-passowrd.md"},b=n("h1",{id:"golang实现一个简单的密码强度验证",tabindex:"-1"},[g("Golang实现一个简单的密码强度验证 "),n("a",{class:"header-anchor",href:"#golang实现一个简单的密码强度验证","aria-label":'Permalink to "Golang实现一个简单的密码强度验证"'},"​")],-1),u=o(`<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>最近写了一个正则来表达遇到了一个问题，特此记录</p></div><h2 id="了解规则" tabindex="-1">了解规则 <a class="header-anchor" href="#了解规则" aria-label="Permalink to &quot;了解规则&quot;">​</a></h2><p>密码强度规则</p><ol><li>必须有大写字母</li><li>必须有小写字母</li><li>必须有一个数字或者标点符号</li><li>密码长度为6到14位</li></ol><p><strong>首先看一下正则表达式</strong></p><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">((?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\d)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[\\\\\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">^</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\$\\.\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\?\\{\\}\\(\\)\\[\\]\\</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">))(?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">z])(?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[A</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Z]).{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}$</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://pic.yqqy.top/blog/image-20200915220733612.png" alt="image-20200915220733612" title="匹配结果"></p><p>可以看到图片，该正则是可以正确判断的</p><p>那么我们把该正则用Go写一下，如下</p><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	reg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`^((?=.*\\d)|(?=.*[\\\\\\^\\$\\.\\*\\+\\?\\{\\}\\(\\)\\[\\]\\|]+))(?=.*[a-z])(?=.*[A-Z]).{6, 14}$\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	matchString, err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> regexp.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MatchString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(reg, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;123456&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> err </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;err is &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, err)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	log.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Res is &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, matchString)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>报错如下</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2020/09/15</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 21:51:46</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> err</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  error</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parsing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> regexp:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> invalid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unsupported</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Perl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> syntax:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>拿着该问题去google一下，发现官方并不支持正则中的 <code>环视（lookaround）</code>，说是不符合Go的风格，因为它的复杂度相对比较高，毕竟是要全局去搜一下的</p><p>The go regexp package uses RE2 syntax, not PCRE <a href="https://github.com/google/re2/wiki/Syntax" target="_blank" rel="noreferrer">github.com/google/re2/wiki/Syntax</a></p><h2 id="代替方法" tabindex="-1">代替方法 <a class="header-anchor" href="#代替方法" aria-label="Permalink to &quot;代替方法&quot;">​</a></h2><p>那既然正则不支持了，就只能通过写个方法代替了，不过也比较简单，如下</p><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VerifyPasswordRule</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">minLen</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">maxLen</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		isUpper   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		isLower   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		isNumber  </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		isSpecial </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> minLen </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(str) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> maxLen {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> errors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">New</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The password must contain uppercase and lowercase letters, numbers or punctuation, and must be 6-14 digits long. &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _, s </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> str {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		switch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unicode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsUpper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			isUpper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unicode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsLower</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			isLower </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unicode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsNumber</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			isNumber </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		case</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unicode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsPunct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> unicode.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">IsSymbol</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">			isSpecial </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">		}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (isUpper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isLower) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (isNumber </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> isSpecial) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">		return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nil</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">	}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> errors.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">New</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;The password must contain uppercase and lowercase letters, numbers or punctuation, and must be 6-14 digits long. &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><h2 id="了解环视" tabindex="-1">了解环视 <a class="header-anchor" href="#了解环视" aria-label="Permalink to &quot;了解环视&quot;">​</a></h2><p>环视是什么，环视是正则中的一个难点，但是在实际应用起来真的很方面，比如去寻找一个串中是否出现过的这种情况就十分方便，但是由于全局去遍历也就导致了他的复杂度上来。环视不匹配文本中的任何字符，只匹配文本中的特定位置。环视类似于定位符 <code>^</code>, <code>$</code>, <code>\\b</code>，不会占用字符</p><p>环视分为 <code>顺序环视</code>、 <code>逆序环视</code>两种</p><h3 id="顺序环视" tabindex="-1">顺序环视 <a class="header-anchor" href="#顺序环视" aria-label="Permalink to &quot;顺序环视&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">正则表达式</th><th>匹配成功的条件</th></tr></thead><tbody><tr><td style="text-align:left;">肯定顺序环视</td><td style="text-align:left;">(?=exp)</td><td>子表达式 能够 匹配 右侧 文本</td></tr><tr><td style="text-align:left;">否定顺序环视</td><td style="text-align:left;">(?!exp)</td><td>子表达式 不能 匹配 右侧 文本</td></tr></tbody></table><p>顺序环视会检查子表达式 <code>exp</code> 能否匹配成功，且只寻找子表达式匹配成功时左侧位置，即子表达式能够匹配右侧文本</p><p><img src="https://pic.yqqy.top/blog/image-20200915225541491.png" alt="image-20200915225541491" title="顺序环视"></p><h3 id="逆序环视" tabindex="-1">逆序环视 <a class="header-anchor" href="#逆序环视" aria-label="Permalink to &quot;逆序环视&quot;">​</a></h3><table><thead><tr><th>类型</th><th>正则表达式</th><th>匹配成功的条件</th></tr></thead><tbody><tr><td>肯定逆序环视</td><td>(?&lt;=exp)</td><td>子表达式 能够 匹配 左侧 文本</td></tr><tr><td>否定逆序环视</td><td>(?&lt;!exp)</td><td>子表达式 不能 匹配 左侧 文本</td></tr></tbody></table><p>逆序环视同样会检查字表达式子 <code>exp</code>的匹配，这次匹配的是左侧文本</p><p><img src="https://pic.yqqy.top/blog/image-20200915225506021.png" alt="image-20200915225506021" title="逆序环视"></p><h3 id="例子" tabindex="-1">例子 <a class="header-anchor" href="#例子" aria-label="Permalink to &quot;例子&quot;">​</a></h3><blockquote><p>比较经典的有数字显示问题，比如我们常见到的 <code>12345</code> 要显示成 <code>12,345</code>，就是从右往左每隔三个位置加一个逗号</p></blockquote><div class="language-go vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 正序环视</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\d)(?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 逆序环视</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(\\</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">d</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$)(?</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\\d)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>用以上的表达式匹配位置替换为逗号即可</p>`,32);function m(s,C,A,D,B,v){const l=h,p=k("ClientOnly");return t(),r("div",null,[b,E(p,null,{default:d(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(t(),y(l,{key:0,article:s.$frontmatter},null,8,["article"])):c("",!0)]}),_:1}),u])}const w=e(F,[["render",m]]);export{q as __pageData,w as default};
