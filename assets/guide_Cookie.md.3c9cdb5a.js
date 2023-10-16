import{_ as s,o as a,c as e,a as l}from"./app.58811f42.js";const B=JSON.parse('{"title":"Cookie","description":"","frontmatter":{},"headers":[{"level":2,"title":"setItem","slug":"setitem","link":"#setitem","children":[]},{"level":2,"title":"setItems","slug":"setitems","link":"#setitems","children":[]},{"level":2,"title":"getItem","slug":"getitem","link":"#getitem","children":[]},{"level":2,"title":"getAllKeys","slug":"getallkeys","link":"#getallkeys","children":[]},{"level":2,"title":"removeItem","slug":"removeitem","link":"#removeitem","children":[]},{"level":2,"title":"clear","slug":"clear","link":"#clear","children":[]}],"relativePath":"guide/Cookie.md","lastUpdated":1696675603000}'),n={name:"guide/Cookie.md"},o=l(`<h1 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-hidden="true">#</a></h1><h2 id="setitem" tabindex="-1">setItem <a class="header-anchor" href="#setitem" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 设置单个 cookie</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">Cookie</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Cookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test_number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">999</span><span style="color:#BABED8;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="setitems" tabindex="-1">setItems <a class="header-anchor" href="#setitems" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 设置多个 cookie</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">Cookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItems</span><span style="color:#BABED8;">([</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">      </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zs</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#BABED8;">    ])</span></span>
<span class="line"></span></code></pre></div><h2 id="getitem" tabindex="-1">getItem <a class="header-anchor" href="#getitem" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 获取 cookie</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Cookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getItem</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test_number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)) </span><span style="color:#676E95;font-style:italic;">// 999</span></span>
<span class="line"></span></code></pre></div><h2 id="getallkeys" tabindex="-1">getAllKeys <a class="header-anchor" href="#getallkeys" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 获取 cookie 的 key 集合</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Cookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getAllKeys</span><span style="color:#BABED8;">()) </span><span style="color:#676E95;font-style:italic;">// [999]</span></span>
<span class="line"></span></code></pre></div><h2 id="removeitem" tabindex="-1">removeItem <a class="header-anchor" href="#removeitem" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 移除 cookie</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Cookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeItem</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">999</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">))</span></span>
<span class="line"></span></code></pre></div><h2 id="clear" tabindex="-1">clear <a class="header-anchor" href="#clear" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 清空所有 cookie</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#BABED8;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#BABED8;">(Cookie</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clear</span><span style="color:#BABED8;">())</span></span>
<span class="line"></span></code></pre></div>`,25),p=[o];function t(c,r,i,y,D,F){return a(),e("div",null,p)}const m=s(n,[["render",t]]);export{B as __pageData,m as default};
