import{_ as u}from"./chunks/articleMetadata.BTt4QM4q.js";import{_ as k,B as o,a as m,u as l,E as e,e as i,H as s,ah as h,o as d,D as y,C as g}from"./chunks/framework.Bb9ScoKk.js";import"./chunks/theme.DroR80N-.js";const v=JSON.parse('{"title":"MySQL的优化笔记","description":"整理MySQL优化相关的笔记，持续补充 🌈","frontmatter":{"title":"MySQL的优化笔记","description":"整理MySQL优化相关的笔记，持续补充 🌈","date":"2021-11-21T20:12:46.000Z","categories":["奇技淫巧"],"tags":["MySQL"]},"headers":[],"relativePath":"blog/2021/mysql-optimization-notes.md","filePath":"posts/blog/2021/mysql-optimization-notes/README.md","lastUpdated":1713780257000}'),b={name:"blog/2021/mysql-optimization-notes.md"},E=i("h1",{id:"mysql的优化笔记",tabindex:"-1"},[s("MySQL的优化笔记 "),i("a",{class:"header-anchor",href:"#mysql的优化笔记","aria-label":'Permalink to "MySQL的优化笔记"'},"​")],-1),q=h("",6),_=h("",52);function f(n,x,D,A,F,L){const p=u,c=o("ClientOnly"),a=o("font");return d(),m("div",null,[E,l(c,null,{default:e(()=>{var t,r;return[(((t=n.$frontmatter)==null?void 0:t.aside)??!0)&&(((r=n.$frontmatter)==null?void 0:r.showArticleMetadata)??!0)?(d(),y(p,{key:0,article:n.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),q,i("ol",null,[i("li",null,[l(a,{color:"#389e0d"},{default:e(()=>[s("单表查询易于优化，易于管理。单表的索引优化也比多个表好做，在进行排序时，多个表关联查询后order by往往是很复杂的，设计成反范式后易于简单化。")]),_:1})]),i("li",null,[l(a,{color:"#389e0d"},{default:e(()=>[s("SQL语句简单，有利于程序开发，团队协作。")]),_:1})]),i("li",null,[l(a,{color:"#f5222d"},{default:e(()=>[s("存在数据冗余，写操作时需要额外更新从表数据。")]),_:1})]),i("li",null,[l(a,{color:"#f5222d"},{default:e(()=>[s("不合理的反范式设计会让表变得臃肿不堪。")]),_:1})])]),_])}const C=k(b,[["render",f]]);export{v as __pageData,C as default};
