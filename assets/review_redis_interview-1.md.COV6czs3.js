import{_ as t}from"./chunks/articleMetadata.RSg_oukH.js";import{_ as d,h,u as p,B as o,l as e,x as c,ai as k,m as u,f as l,p as b,q as g}from"./chunks/framework.h2at8Qew.js";import"./chunks/theme.DxuMJqyy.js";const m="/assets/1714404711.DQhA7fbo.png",E="/assets/1714405171.CJqv_BOR.png",D=JSON.parse('{"title":"Redis面试题-八股","description":"Redis面经，资源从网络收集","frontmatter":{"sort":1,"title":"Redis面试题-八股","description":"Redis面经，资源从网络收集","date":"2024-04-29T21:17:42.000Z","tags":["Redis"]},"headers":[],"relativePath":"review/redis/interview-1.md","filePath":"posts/review/redis/interview-1/README.md","lastUpdated":1714983786000}'),y={name:"review/redis/interview-1.md"},F=e("h1",{id:"redis面试题-八股",tabindex:"-1"},[c("Redis面试题-八股 "),e("a",{class:"header-anchor",href:"#redis面试题-八股","aria-label":'Permalink to "Redis面试题-八股"'},"​")],-1),_=k(`<div class="tip custom-block"><p class="custom-block-title">声明</p><p>本文中部分内容摘自网络(下方表示出处)，如有违规可联系我进行删除 🙏🏻</p><blockquote><ul><li><a href="https://github.com/chaseSpace/interview/blob/main/db_redis.md" target="_blank" rel="noreferrer">https://github.com/chaseSpace/interview/blob/main/db_redis.md</a></li><li><a href="https://pdai.tech/md/db/nosql-redis/db-redis-overview.html" target="_blank" rel="noreferrer">https://pdai.tech/md/db/nosql-redis/db-redis-overview.html</a></li></ul></blockquote></div><details class="details custom-block"><summary>目录索引</summary><nav class="table-of-contents"><ul><li><a href="#_1-说说你对redis的理解">1. 说说你对Redis的理解</a></li><li><a href="#_2-redis为什么那么快">2. Redis为什么那么快</a></li><li><a href="#_3-为什么redis使用单线程">3. 为什么Redis使用单线程</a></li><li><a href="#_4-redis使用单线程的瓶颈">4. Redis使用单线程的瓶颈</a></li><li><a href="#_5-为什么redis后来引入多线程">5. 为什么Redis后来引入多线程</a><ul><li><a href="#redis4-x">Redis4.x</a></li><li><a href="#redis6-x中的多线程i-o">Redis6.x中的多线程I/O</a></li></ul></li><li><a href="#_6-redis中del和unlink区别">6. Redis中del和unlink区别</a><ul><li><a href="#del命令">del命令</a></li><li><a href="#unlink命令">unlink命令</a></li></ul></li><li><a href="#_7-redis的多路复用和http-2有何不同">7. Redis的多路复用和HTTP/2有何不同</a><ul><li><a href="#_1-应用层别不同">1. 应用层别不同</a></li><li><a href="#_2-目的不同">2. 目的不同</a></li></ul></li><li><a href="#_8-redis的事务">8. Redis的事务</a><ul><li><a href="#redis事务相关命令">Redis事务相关命令</a></li><li><a href="#事务使用案例">事务使用案例</a></li></ul></li><li><a href="#_9-redis会变慢的原因">9. Redis会变慢的原因</a></li><li><a href="#_10-redis内存淘汰机制">10. Redis内存淘汰机制</a></li><li><a href="#_11-redis存在线程安全问题吗">11. Redis存在线程安全问题吗</a></li><li><a href="#_12-什么是缓存雪崩">12. 什么是缓存雪崩</a></li><li><a href="#_13-什么是缓存穿透">13. 什么是缓存穿透</a></li><li><a href="#_14-什么是缓存击穿">14. 什么是缓存击穿</a></li><li><a href="#_15-什么是布隆过滤器">15. 什么是布隆过滤器</a></li><li><a href="#_16-redis和memcached有什么区别">16. Redis和Memcached有什么区别</a></li><li><a href="#_17-redis的key过期后是否立即被删除">17. Redis的key过期后是否立即被删除</a><ul><li><a href="#惰性删除">惰性删除</a></li><li><a href="#定期删除">定期删除</a></li></ul></li></ul></nav></details><h2 id="_1-说说你对redis的理解" tabindex="-1">1. 说说你对Redis的理解 <a class="header-anchor" href="#_1-说说你对redis的理解" aria-label="Permalink to &quot;1. 说说你对Redis的理解&quot;">​</a></h2><p>redis是基于key-value存储结构的NoSQL开源内存数据库，他提供了5种常用的数据结构（string，hash，set，zset，list），针对不同的结构，可以解决不同场景的问题。</p><p>其次redis本身是一个基于内存的存储，并且在数据结构上做了大量的一些优化，所以IO的性能笔记哦啊好，在实际开发中，通常把它作为应用和数据库之间的一个分布式缓存中间件，并且redis又是一个非关系型数据库的存储，他不存在表之间的关联查询的问题，所以它可以很好的去提升应用程序的IO数据效率</p><h2 id="_2-redis为什么那么快" tabindex="-1">2. Redis为什么那么快 <a class="header-anchor" href="#_2-redis为什么那么快" aria-label="Permalink to &quot;2. Redis为什么那么快&quot;">​</a></h2><ul><li>纯内存访问，不与磁盘交互</li><li>单线程避免上下文切换</li><li>丰富的数据结构</li><li>多路复用epoll网络模型</li><li>渐进式ReHash，缓存时间戳等设计</li></ul><h2 id="_3-为什么redis使用单线程" tabindex="-1">3. 为什么Redis使用单线程 <a class="header-anchor" href="#_3-为什么redis使用单线程" aria-label="Permalink to &quot;3. 为什么Redis使用单线程&quot;">​</a></h2><ul><li>简单高效：单线程模型使reids开发维护更简单，不需要处理多线程带来的枷锁，线程同步等复杂情况</li><li>瓶颈不在CPU：redis作为内存数据库，性能瓶颈主要内存和网络带宽</li><li>数据结构简单：redis的数据结构被专门设计的很简单高效，绝大部分操作的时间复杂度都是O(1)，因此单线程足以应对大部分读写场景</li><li>IO多路复用：利用了操作系统提供的多路IO复用epoll模型，可以高效的监听和处理多个客户端连接。</li></ul><h2 id="_4-redis使用单线程的瓶颈" tabindex="-1">4. Redis使用单线程的瓶颈 <a class="header-anchor" href="#_4-redis使用单线程的瓶颈" aria-label="Permalink to &quot;4. Redis使用单线程的瓶颈&quot;">​</a></h2><ul><li>只能用一个cpu核（忽略后台线程和子线程）</li><li>如果value比较大，redis的qps会下降的很厉害，有时一个大key就可以拖垮</li><li>qps难以更上一层楼</li></ul><h2 id="_5-为什么redis后来引入多线程" tabindex="-1">5. 为什么Redis后来引入多线程 <a class="header-anchor" href="#_5-为什么redis后来引入多线程" aria-label="Permalink to &quot;5. 为什么Redis后来引入多线程&quot;">​</a></h2><h3 id="redis4-x" tabindex="-1">Redis4.x <a class="header-anchor" href="#redis4-x" aria-label="Permalink to &quot;Redis4.x&quot;">​</a></h3><p>redis 在 4.x 版本引入了多线程，用来异步执行<a href="./interview-1#_6-redis中del和unlink区别"><code>UNLINK</code></a> 、<code>FLUSHALL ASYNC</code> 、<code>FLUSHDB ASYNC</code> 命令。比如对于键的删除，我们一般不需要同步等待完成，而且删除大键是一个耗时操作，所以引入多线程是方便执行那些不需要同步返回的命令。</p><h3 id="redis6-x中的多线程i-o" tabindex="-1">Redis6.x中的多线程I/O <a class="header-anchor" href="#redis6-x中的多线程i-o" aria-label="Permalink to &quot;Redis6.x中的多线程I/O&quot;">​</a></h3><p>Redis官方在2020年5月正式推出6.0版本，此版本正式引入了多线程IO。</p><p>首先要解释Redis的单线程：Redis在处理客户端的请求时，包括获取（socket读）、解析、执行、内容返回（socket写）等都由一个顺序串行的主线程执行。</p><p>随着硬件性能的提升，Redis的单线程性能瓶颈可能出现网络IO的读写，也就是：单个线程处理网络读写的速度跟不上底层网络硬件的速度，读写网络的<code>read / write</code>系统调用占用了Redis执行期间大部分CPU时间，瓶颈主要在网络的IO消耗，此时的优化方向：</p><ul><li>提高网络IO性能，典型的实现比如使用 <a href="https://zh.wikipedia.org/wiki/DPDK" target="_blank" rel="noreferrer"><code>DPDK</code></a> 来代替内核网络栈的方向</li><li>使用多线程充分利用多核，提高网络请求读写的并行度，典型的实现比如 <code>Memcached</code></li></ul><p>🤔 Redis采用了第二种方式，即Redis采用多个IO线程来处理网络请求，提高网络请求处理的并行度，<strong>需要注意的是</strong>，Redis多IO线程模型只用来处理网络读写请求，对于Redis的读写命令，依然是单线程处理。</p><p><strong>开启多线程 - redis.conf</strong><br> Redis的多线程默认是禁用的，只使用主线程，如需开启需要修改redis.conf配置：</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>io-threads-do-reads yes</span></span>
<span class="line"><span>io-threads 4 # 建议为CPU核心数-1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="_6-redis中del和unlink区别" tabindex="-1">6. Redis中del和unlink区别 <a class="header-anchor" href="#_6-redis中del和unlink区别" aria-label="Permalink to &quot;6. Redis中del和unlink区别&quot;">​</a></h2><p><code>del</code>和<code>unlink</code>都是用来删除的指令</p><h3 id="del命令" tabindex="-1">del命令 <a class="header-anchor" href="#del命令" aria-label="Permalink to &quot;del命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DEL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [KEY </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>del</code>可以指定多个键名，删除多个键，如果指定的键不存在，则会被忽略</li><li><code>del</code>命令不会释放已经分配的内存，如需释放使用<code>unlink</code></li><li><code>del</code>是一种同步命令，它会阻塞客户端，直到所有指定的键都被删除为止</li></ul><h3 id="unlink命令" tabindex="-1">unlink命令 <a class="header-anchor" href="#unlink命令" aria-label="Permalink to &quot;unlink命令&quot;">​</a></h3><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">UNLINK</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [KEY </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">...]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>unlink</code>可以指定多个键名，删除多个键，如果指定的键不存在，则会被忽略</li><li><code>unlink</code>命令会释放已经分配的内存，有大量键需要删除时会减少内存使用量</li><li><code>unlink</code>命令会异步删除指定的键及与之相关联的值，结果立即返回，不会阻塞客户端</li></ul><h2 id="_7-redis的多路复用和http-2有何不同" tabindex="-1">7. Redis的多路复用和HTTP/2有何不同 <a class="header-anchor" href="#_7-redis的多路复用和http-2有何不同" aria-label="Permalink to &quot;7. Redis的多路复用和HTTP/2有何不同&quot;">​</a></h2><h3 id="_1-应用层别不同" tabindex="-1">1. 应用层别不同 <a class="header-anchor" href="#_1-应用层别不同" aria-label="Permalink to &quot;1. 应用层别不同&quot;">​</a></h3><p>HTTP/2 的多路复用发生在应用层，即在一个TCP链接上复用多条流。而Redis的多路复用发生在更底层的网络IO层，即在一个线程中同时处理多个客户端socket连接的IO操作。</p><h3 id="_2-目的不同" tabindex="-1">2. 目的不同 <a class="header-anchor" href="#_2-目的不同" aria-label="Permalink to &quot;2. 目的不同&quot;">​</a></h3><p>HTTP/2 多路复用的主要目的是减少TCP连接数，提高带宽利用率。Redis的多路复用主要目的是保持单线程以及不必要的上下文切换开销。</p><h2 id="_8-redis的事务" tabindex="-1">8. Redis的事务 <a class="header-anchor" href="#_8-redis的事务" aria-label="Permalink to &quot;8. Redis的事务&quot;">​</a></h2><p>Redis事务的本质是一组命令的集合，事务支持一次执行多个命令，一个事务中所有命令，一个事务中所有的命令都会被序列化。在事务执行过程中，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。</p><p>总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。</p><h3 id="redis事务相关命令" tabindex="-1">Redis事务相关命令 <a class="header-anchor" href="#redis事务相关命令" aria-label="Permalink to &quot;Redis事务相关命令&quot;">​</a></h3><ul><li><code>WATCH</code>: 在事务开始前，用于监视一个或多个键，如果键的值发生了变化，则EXEC无法执行，事务中断（在<code>MULTI</code>前执行） <ul><li>事务中断后，<code>WATCH</code>命令自动取消</li><li>单个会话有效</li></ul></li><li><code>UNWATCH</code>: 取消<code>WATCH</code>对所有key的监视（在<code>MULTI</code>前执行）</li><li><code>MULTI</code>: 标志着事务开始</li><li><code>EXEC</code>: 服务器以先进先出的顺序执行命令，如果命令执行失败，则继续执行下一条命令，也不会回滚已执行的命令</li><li><code>DISCARD</code>: 取消一个事务（在<code>EXEC</code>前执行）</li><li><code>输入其他命令</code>: 命令在服务器入列，命令语法错误会导致<code>EXEC</code>无法执行，即事务中断（所有命令都不执行）</li></ul><p>🤔 Redis事务(ACID)提供一致性和隔离性，<span style="color:red;font-weight:bold;">但不提供原子性和持久性</span></p><ul><li>一致性(Consistency)：指可以保证命令失败的情况下得以回滚，数据能恢复到没有执行以前的样子</li><li>隔离性(Isolation)：指事务之间互不干扰，同时也不会在事务内插入其他命令</li><li>原子性(Atomicity)：指事务内的命令全部执行或都不执行，无法做到因为一条命令的运行错误导致其他命令中断</li><li>持久性(Durability)：因为Redis的持久化都是异步的，做不到实时落盘（为了保证性能）</li></ul><h3 id="事务使用案例" tabindex="-1">事务使用案例 <a class="header-anchor" href="#事务使用案例" aria-label="Permalink to &quot;事务使用案例&quot;">​</a></h3><h4 id="正常使用" tabindex="-1">正常使用 <a class="header-anchor" href="#正常使用" aria-label="Permalink to &quot;正常使用&quot;">​</a></h4><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 连接到 Redis 服务器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis-cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开启 Redis 事务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MULTI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行递增操作</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">INCR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> counter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QUEUED</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 记录递增值</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">INCR</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log:counter</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QUEUED</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行 Redis 事务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EXEC</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="验证原子性" tabindex="-1">验证原子性 <a class="header-anchor" href="#验证原子性" aria-label="Permalink to &quot;验证原子性&quot;">​</a></h4><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">SET</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> k1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> v1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OK</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MULTI</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">OK</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379(TX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SET k2 v2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QUEUED</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379(TX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> INCR k1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QUEUED</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379(TX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GET k2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">QUEUED</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">127.0.0.1:6379(TX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EXEC</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) OK</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) ERR value is not an integer or out of range</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;v2&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="watch命令" tabindex="-1">watch命令 <a class="header-anchor" href="#watch命令" aria-label="Permalink to &quot;watch命令&quot;">​</a></h4><p>watch命令用于监视一个或多个key，如果在事务执行前这个key被其他命令所改动，那么事务将被打断，可以实现乐观锁。</p><p><img src="`+m+'" alt="img" loading="lazy"></p><p><img src="'+E+'" alt="img" loading="lazy"></p><h2 id="_9-redis会变慢的原因" tabindex="-1">9. Redis会变慢的原因 <a class="header-anchor" href="#_9-redis会变慢的原因" aria-label="Permalink to &quot;9. Redis会变慢的原因&quot;">​</a></h2><ul><li>当内存不足时，key可能会频繁被淘汰，响应时间上升</li><li>频繁的内存持久化，如果数据量大且写操作比较多必然会引起大量的磁盘IO操作，导致性能下降</li><li>阻塞操作，某些redis命令会导致阻塞，比如阻塞式列表操作，慢查询，当这些操作频繁调用或者执行时间长的时候，会导致整个系统的性能下降，可以使用redis的性能分析工具和命令来识别慢查询和阻塞的操作对并发行进行优化调整</li><li>网络问题，比如网络延迟和带宽受限</li></ul><h2 id="_10-redis内存淘汰机制" tabindex="-1">10. Redis内存淘汰机制 <a class="header-anchor" href="#_10-redis内存淘汰机制" aria-label="Permalink to &quot;10. Redis内存淘汰机制&quot;">​</a></h2><p>当 Redis 内存不够用的时候，它根据设置的淘汰策略来删除部分键，支持以下策略：</p><ul><li><code>noeviction(默认策略)</code>: 当内存超过配置时就会返回错误，不会驱逐任何键</li><li><code>allkeys-lru</code>: 首先通过LRU算法驱逐最久没有使用的键</li><li><code>voliatile-lru</code>: 首先从设置过期时间的键集合中驱逐最久没有使用的键</li><li><code>allkey-random</code>: 从所有key中随机删除</li><li><code>voliatile-random</code>: 从设置了过期时间的键集合中随机删除</li><li><code>voliatile-ttl</code>: 从配置了过期时间的键中驱逐马上要过期的键</li><li><code>voliatile-lfu</code>: 从所有配置了过期时间的键中驱逐使用频率最少的键</li><li><code>voliatile-lfu</code>: 从所有键中驱逐使用频率最少的键</li></ul><h2 id="_11-redis存在线程安全问题吗" tabindex="-1">11. Redis存在线程安全问题吗 <a class="header-anchor" href="#_11-redis存在线程安全问题吗" aria-label="Permalink to &quot;11. Redis存在线程安全问题吗&quot;">​</a></h2><ul><li><code>从redis服务端层面</code>：redis-server本身是一个线程安全的服务，在redis-server端去执行指令的时候不需要任何的同步机制，不会存在任何线程安全的问题。</li><li><code>从redis客户端层面</code>：虽然redis中的指令操作是原子的，但是如果多个redis客户端同时执行多个指令的情况下，就无法保证原子性。假设两个redis client同时获取redis server的key，同时进行读取和写入，因为多线程下的原子性无法被保障，以及多进程情况下同享资源访问的一个竞争问题，使得数据的安全性无法保障</li></ul><h2 id="_12-什么是缓存雪崩" tabindex="-1">12. 什么是缓存雪崩 <a class="header-anchor" href="#_12-什么是缓存雪崩" aria-label="Permalink to &quot;12. 什么是缓存雪崩&quot;">​</a></h2><p>缓存在同一时间大面积的失效，后面的请求都直接落到了数据库上，造成数据库短时间内承担大量的请求。</p><p><strong>解决办法：</strong><br> 根据缓存雪崩的原因执行不同的方案：</p><ul><li>Redis宕机 <ul><li>集群化或使用哨兵模式部署Redis</li><li>开启持久化，保证重启后快速恢复缓存数据</li></ul></li><li>大量缓存同时失效 <ul><li>在批量往redis存数据的时候，把每个key的失效时间都加个随机值</li><li>或者设置热点数据永远不过期，有更新操作就更新缓存</li><li>在代码中实现本地缓存，避免请求全部落到数据库</li><li>接口限流</li></ul></li></ul><h2 id="_13-什么是缓存穿透" tabindex="-1">13. 什么是缓存穿透 <a class="header-anchor" href="#_13-什么是缓存穿透" aria-label="Permalink to &quot;13. 什么是缓存穿透&quot;">​</a></h2><p>请求的数据根本不存在，所以缓存 <code>miss</code>，请求一直落到数据库，此时如果请求量较大就会击垮数据库。</p><p><strong>解决办法：</strong></p><ul><li>添加参数校验，在API入口处判断请求参数是否合理，是否有非法制</li><li>缓存空值key，还可设置一个较短的过期时间</li><li>使用布隆过滤器，过滤掉不存在的数据避免打到数据库上</li></ul><h2 id="_14-什么是缓存击穿" tabindex="-1">14. 什么是缓存击穿 <a class="header-anchor" href="#_14-什么是缓存击穿" aria-label="Permalink to &quot;14. 什么是缓存击穿&quot;">​</a></h2><p>大量的请求同时查询一个热 key 时，假设此时，这个key正好失效了，就会导致大量的请求都打到数据库上面去，这种现象我们称为击穿。缓存击穿带来的问题就是会造成某一时刻数据库请求量过大，压力剧增。</p><p><strong>解决办法：</strong></p><ul><li>热点数据永不过期，由定时任务定期去刷新缓存</li><li>互斥锁。在缓存<code>miss</code>后，从数据库加载缓存前，对操作加一个互斥锁</li></ul><h2 id="_15-什么是布隆过滤器" tabindex="-1">15. 什么是布隆过滤器 <a class="header-anchor" href="#_15-什么是布隆过滤器" aria-label="Permalink to &quot;15. 什么是布隆过滤器&quot;">​</a></h2><p>它由一个很长的二进制向量和一系列随机映射函数组成。布隆过滤器可以用于检索出一个元素是否在一个集合中，它的优点是空间效率和查询时间远远超过一般的算法。</p><p><strong>原理：</strong><br> 当一个元素被加入集合时，通过K个散列函数将这个元素映射成一个位数组中的K个点（offset），把它们置为 <code>1</code>。<br> 检索时，我们只要看看这些点是不是就是 <code>1</code> 就（大概）知道集合中有没有它了：如果这些点有任何一个 <code>0</code>，则被检索元素一定不在；如果都是 <code>1</code>，则被检索元素很可能在，这就是布隆过滤器的基本思想。</p><p><strong>优点：</strong></p><ul><li>空间占用极小，因为本身不存储数据而是用比特位表示数据是否存在，某种程度具有保密的效果</li><li>插入与查询操作的时间复杂度均为O(k)，常数级别，k表示散列函数执行次数</li><li>散列函数之间可以相互独立，可以在硬件指令层加速计算</li></ul><p><strong>缺点：</strong></p><ul><li>误差（假阳性率）</li><li>无法删除</li></ul><p><strong>go-redis库中的使用：</strong><br><a href="https://github.com/redis/go-redis/blob/b64d9deef330a51cfbd3e0425b6c26b27c1ee370/example/redis-bloom/main.go#L32" target="_blank" rel="noreferrer">bloomFilter</a></p><h2 id="_16-redis和memcached有什么区别" tabindex="-1">16. Redis和Memcached有什么区别 <a class="header-anchor" href="#_16-redis和memcached有什么区别" aria-label="Permalink to &quot;16. Redis和Memcached有什么区别&quot;">​</a></h2><p><strong>共同点：</strong></p><ul><li>都是基于内存的数据库</li><li>都有过期策略</li><li>性能都非常高</li></ul><p><strong>不同点：</strong></p><ul><li>Redis支持的数据结构丰富，Memcached只支持最简单的key-val数据结构</li><li>Redis支持数据持久化，Memcached没有持久化功能，当服务挂掉后，容易丢数据</li><li>Redis原生支持集群模式，Memcached没有原生的集群模式，需要依靠客户端来实现往集群中分片写入数据</li><li>Redis支持发布订阅模式、Lua脚本、事务等功能，而Memcached不支持</li></ul><h2 id="_17-redis的key过期后是否立即被删除" tabindex="-1">17. Redis的key过期后是否立即被删除 <a class="header-anchor" href="#_17-redis的key过期后是否立即被删除" aria-label="Permalink to &quot;17. Redis的key过期后是否立即被删除&quot;">​</a></h2><p><strong>先了解Redis的过期策略：</strong> <a href="https://redis.io/docs/latest/commands/expire/#how-redis-expires-keys" target="_blank" rel="noreferrer">[1]</a> <a href="https://redis.io/docs/latest/develop/use/keyspace-notifications/#timing-of-expired-events" target="_blank" rel="noreferrer">[2]</a><br> Redis的过期策略是一种自动删除过期数据的机制，在使用Redis存储数据是，可以为每个key设置一个过期时间，一旦设置了过期时间，Redis将会在key的过期时间到达后自动将其删除，释放内存空间。<strong>但需要注意的是</strong>，Redis并不保证一定会在key过期时间到达时立即删除，实际上，Redis选择了 <strong>惰性删除+定期删除</strong> 两种策略配合使用，以求在合理使用CPU时间和避免内存浪费时间取得平衡。</p><h3 id="惰性删除" tabindex="-1">惰性删除 <a class="header-anchor" href="#惰性删除" aria-label="Permalink to &quot;惰性删除&quot;">​</a></h3><p>惰性删除是指：不主动删除过期key，每次访问到这个key时，在检测是否过期，如果过期则删除</p><ul><li><strong>优点</strong>：只有在每次访问时才会检查key是否过期，所以会使用较少的系统资源，对CPU时间友好</li><li><strong>缺点</strong>：如果一个key已经过期，如果不去访问这个key，就会一直保留在内存中，造成了一定的内存空间浪费，对内存不友好</li></ul><h3 id="定期删除" tabindex="-1">定期删除 <a class="header-anchor" href="#定期删除" aria-label="Permalink to &quot;定期删除&quot;">​</a></h3><p>定期删除是指：每隔一段时间随机的取出一定数量的key进行检查，并删除其中的过期key</p><ul><li><strong>优点</strong>：限制了删除操作执行时长和频率，减少了操作对CPU的影响，同时也能删除一部分过期key释放内存空间</li><li><strong>缺点</strong>：没有惰性删除使用的系统资源少；难以确定删除操作执行的市场和频率</li></ul>',91);function f(s,R,C,v,q,x){const n=t,r=u("ClientOnly");return l(),h("div",null,[F,p(r,null,{default:o(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(l(),b(n,{key:0,article:s.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),_])}const A=d(y,[["render",f]]);export{D as __pageData,A as default};