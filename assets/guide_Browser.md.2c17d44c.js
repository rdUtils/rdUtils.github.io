import{_ as s,o as e,c as l,a}from"./app.58811f42.js";const u=JSON.parse('{"title":"Browser","description":"","frontmatter":{},"headers":[{"level":2,"title":"isBrowser","slug":"isbrowser","link":"#isbrowser","children":[]},{"level":2,"title":"getBrowserInfo","slug":"getbrowserinfo","link":"#getbrowserinfo","children":[]},{"level":2,"title":"requestFullscreen","slug":"requestfullscreen","link":"#requestfullscreen","children":[]},{"level":2,"title":"exitFullscreen","slug":"exitfullscreen","link":"#exitfullscreen","children":[]}],"relativePath":"guide/Browser.md","lastUpdated":1696675603000}'),n={name:"guide/Browser.md"},o=a(`<h1 id="browser" tabindex="-1">Browser <a class="header-anchor" href="#browser" aria-hidden="true">#</a></h1><h2 id="isbrowser" tabindex="-1">isBrowser <a class="header-anchor" href="#isbrowser" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 判断代码是否运行在浏览器环境</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">isBrowser</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="getbrowserinfo" tabindex="-1">getBrowserInfo <a class="header-anchor" href="#getbrowserinfo" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 获取浏览器类型</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">getBrowserInfo</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> target </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getBrowserInfo</span><span style="color:#BABED8;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// { &quot;type&quot;: &quot;Chrome&quot;, &quot;version&quot;: 117 }</span></span>
<span class="line"></span></code></pre></div><h2 id="requestfullscreen" tabindex="-1">requestFullscreen <a class="header-anchor" href="#requestfullscreen" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 全屏</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">requestFullscreen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#BABED8;"> element </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#BABED8;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;">)</span></span>
<span class="line"><span style="color:#82AAFF;">requestFullscreen</span><span style="color:#BABED8;">(element)</span></span>
<span class="line"></span></code></pre></div><h2 id="exitfullscreen" tabindex="-1">exitFullscreen <a class="header-anchor" href="#exitfullscreen" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用：</p><p>🎉 退出全屏</p></div><p><strong>Demo</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">exitFullscreen</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@rd/utils</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#82AAFF;">exitFullscreen</span><span style="color:#BABED8;">()</span></span>
<span class="line"></span></code></pre></div>`,17),t=[o];function p(r,c,i,y,D,d){return e(),l("div",null,t)}const B=s(n,[["render",p]]);export{u as __pageData,B as default};
