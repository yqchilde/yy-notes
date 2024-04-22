import{_ as r}from"./chunks/articleMetadata.BTt4QM4q.js";import{_ as t,B as c,a as o,u as b,E as u,e,H as m,ah as d,o as p,D as h,C as y}from"./chunks/framework.Bb9ScoKk.js";import"./chunks/theme.DroR80N-.js";const q=JSON.parse('{"title":"Docker安装MySQL后无法登录","description":"用docker跑了一个mysql容器后，发现进入容器却无法成功登录，记录一下解决方案。","frontmatter":{"title":"Docker安装MySQL后无法登录","description":"用docker跑了一个mysql容器后，发现进入容器却无法成功登录，记录一下解决方案。","date":"2021-02-11T15:52:21.000Z","categories":["奇技淫巧"],"tags":["Docker","MySQL"]},"headers":[],"relativePath":"blog/2021/docker-mysql-login-failed.md","filePath":"posts/blog/2021/docker-mysql-login-failed/README.md","lastUpdated":1713780257000}'),k={name:"blog/2021/docker-mysql-login-failed.md"},g=e("h1",{id:"docker安装mysql后无法登录",tabindex:"-1"},[m("Docker安装MySQL后无法登录 "),e("a",{class:"header-anchor",href:"#docker安装mysql后无法登录","aria-label":'Permalink to "Docker安装MySQL后无法登录"'},"​")],-1),f=d(`<h2 id="启动mysql容器" tabindex="-1">启动MySQL容器 <a class="header-anchor" href="#启动mysql容器" aria-label="Permalink to &quot;启动MySQL容器&quot;">​</a></h2><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 3306:3306</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MYSQL_ROOT_PASSWORD=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">***</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~/data/docker/mysql:/var/lib/mysql</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql:5.6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="发现错误" tabindex="-1">发现错误 <a class="header-anchor" href="#发现错误" aria-label="Permalink to &quot;发现错误&quot;">​</a></h2><ol><li>使用 Navicat 远程连接发现报 1045 错误</li><li>进入容器登录 mysql 发现仍然是<code>ERROR 1045 (28000): Access denied for user &#39;root&#39;@&#39;localhost&#39; (using password: YES)</code></li></ol><h2 id="解决问题" tabindex="-1">解决问题 <a class="header-anchor" href="#解决问题" aria-label="Permalink to &quot;解决问题&quot;">​</a></h2><p>这里说一下，在<a href="https://github.com/docker-library/mysql/issues/434" target="_blank" rel="noreferrer">https://github.com/docker-library/mysql/issues/434</a>这里看到相关问题</p><p>有人说使用 <code>mysql -uroot -p***</code> 即直接写出密码可以，我试过是不行的，这里贴出具体解决方案。</p><ol><li>进入容器中</li><li>使用命令 <code>/usr/bin/mysql_secure_installation</code></li><li>按照提示进行密码初始化即可</li></ol><p><strong>如下所示：</strong></p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># /usr/bin/mysql_secure_installation</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>NOTE: RUNNING ALL PARTS OF THIS SCRIPT IS RECOMMENDED FOR ALL MySQL</span></span>
<span class="line"><span>      SERVERS IN PRODUCTION USE!  PLEASE READ EACH STEP CAREFULLY!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>In order to log into MySQL to secure it, we&#39;ll need the current</span></span>
<span class="line"><span>password for the root user.  If you&#39;ve just installed MySQL, and</span></span>
<span class="line"><span>you haven&#39;t set the root password yet, the password will be blank,</span></span>
<span class="line"><span>so you should just press enter here.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Enter current password for root (enter for none):</span></span>
<span class="line"><span>OK, successfully used password, moving on...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Setting the root password ensures that nobody can log into the MySQL</span></span>
<span class="line"><span>root user without the proper authorisation.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You already have a root password set, so you can safely answer &#39;n&#39;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Change the root password? [Y/n] y</span></span>
<span class="line"><span>New password:</span></span>
<span class="line"><span>Re-enter new password:</span></span>
<span class="line"><span>Password updated successfully!</span></span>
<span class="line"><span>Reloading privilege tables..</span></span>
<span class="line"><span> ... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>By default, a MySQL installation has an anonymous user, allowing anyone</span></span>
<span class="line"><span>to log into MySQL without having to have a user account created for</span></span>
<span class="line"><span>them.  This is intended only for testing, and to make the installation</span></span>
<span class="line"><span>go a bit smoother.  You should remove them before moving into a</span></span>
<span class="line"><span>production environment.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Remove anonymous users? [Y/n] y</span></span>
<span class="line"><span> ... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Normally, root should only be allowed to connect from &#39;localhost&#39;.  This</span></span>
<span class="line"><span>ensures that someone cannot guess at the root password from the network.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Disallow root login remotely? [Y/n] n</span></span>
<span class="line"><span> ... skipping.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>By default, MySQL comes with a database named &#39;test&#39; that anyone can</span></span>
<span class="line"><span>access.  This is also intended only for testing, and should be removed</span></span>
<span class="line"><span>before moving into a production environment.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Remove test database and access to it? [Y/n] y</span></span>
<span class="line"><span> - Dropping test database...</span></span>
<span class="line"><span>ERROR 1008 (HY000) at line 1: Can&#39;t drop database &#39;test&#39;; database doesn&#39;t exist</span></span>
<span class="line"><span> ... Failed!  Not critical, keep moving...</span></span>
<span class="line"><span> - Removing privileges on test database...</span></span>
<span class="line"><span> ... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reloading the privilege tables will ensure that all changes made so far</span></span>
<span class="line"><span>will take effect immediately.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Reload privilege tables now? [Y/n] y</span></span>
<span class="line"><span> ... Success!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>All done!  If you&#39;ve completed all of the above steps, your MySQL</span></span>
<span class="line"><span>installation should now be secure.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Thanks for using MySQL!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Cleaning up...</span></span>
<span class="line"><span># mysql -uroot -p</span></span>
<span class="line"><span>Enter password:</span></span>
<span class="line"><span>Welcome to the MySQL monitor.  Commands end with ; or \\g.</span></span>
<span class="line"><span>Your MySQL connection id is 17</span></span>
<span class="line"><span>Server version: 5.6.50 MySQL Community Server (GPL)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Oracle is a registered trademark of Oracle Corporation and/or its</span></span>
<span class="line"><span>affiliates. Other names may be trademarks of their respective</span></span>
<span class="line"><span>owners.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Type &#39;help;&#39; or &#39;\\h&#39; for help. Type &#39;\\c&#39; to clear the current input statement.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br></div></div>`,10);function v(s,S,C,_,w,F){const l=r,i=c("ClientOnly");return p(),o("div",null,[g,b(i,null,{default:u(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(p(),h(l,{key:0,article:s.$frontmatter},null,8,["article"])):y("",!0)]}),_:1}),f])}const M=t(k,[["render",v]]);export{q as __pageData,M as default};
