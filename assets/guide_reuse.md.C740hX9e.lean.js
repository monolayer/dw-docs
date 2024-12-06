import{_ as i,c as a,a2 as e,o as n}from"./chunks/framework.8ycqjF2p.js";const c=JSON.parse('{"title":"Reuse Dockerfiles","description":"","frontmatter":{},"headers":[],"relativePath":"guide/reuse.md","filePath":"guide/reuse.md"}'),t={name:"guide/reuse.md"};function l(k,s,h,p,r,d){return n(),a("div",null,s[0]||(s[0]=[e(`<h1 id="reuse-dockerfiles" tabindex="-1">Reuse Dockerfiles <a class="header-anchor" href="#reuse-dockerfiles" aria-label="Permalink to &quot;Reuse Dockerfiles&quot;">​</a></h1><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Dockerfile } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/dw&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> base</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Dockerfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">base.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">FROM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node:20-alpine&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> runner</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Dockerfile</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(base);</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">TIP</p><p>Useful when building stages shared across many Dockerfiles.</p></div>`,3)]))}const g=i(t,[["render",l]]);export{c as __pageData,g as default};
