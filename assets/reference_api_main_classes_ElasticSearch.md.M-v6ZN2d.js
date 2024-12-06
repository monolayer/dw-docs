import{_ as e,c as t,a2 as i,o as s}from"./chunks/framework.CW1_h_Kn.js";const k=JSON.parse('{"title":"Class: ElasticSearch<C>","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/main/classes/ElasticSearch.md","filePath":"reference/api/main/classes/ElasticSearch.md"}'),n={name:"reference/api/main/classes/ElasticSearch.md"};function r(l,a,h,o,c,d){return s(),t("div",null,a[0]||(a[0]=[i(`<p><a href="./../../modules.html">workloads</a> / <a href="./../">main</a> / ElasticSearch</p><h1 id="class-elasticsearch-c" tabindex="-1">Class: ElasticSearch&lt;C&gt; <a class="header-anchor" href="#class-elasticsearch-c" aria-label="Permalink to &quot;Class: ElasticSearch\\&lt;C\\&gt;&quot;">​</a></h1><p>Workload for ElasticSearch engines.</p><p>The <code>ElasticSearch</code> workload is initialized with:</p><ul><li><code>id</code>: A stable ID.</li><li><code>client</code>: A client constructor function providing the client of your choice. The <a href="./ElasticSearch.html#client">client</a> accessor will call this function and memoize its result. The expected envirnoment variable name with the connection string is passed as an argument.</li></ul><p><strong>NOTES</strong></p><p>When launching the development or test containers with <code>npx workloads start</code>, the environment variable will be written to the corresponding dotenv file (<code>.env</code> or <code>.env.test</code>)</p><ul><li></li></ul><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { ElasticSearch } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@monolayer/workloads&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Client } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;@elastic/elasticsearch&#39;</span><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> elastic</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElasticSearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;products&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">envVarName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // envVarName = MONO_ELASTIC_SEARCH_PRODUCTS_URL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    node: process.env[envVarName],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./StatefulWorkloadWithClient.html"><code>StatefulWorkloadWithClient</code></a>&lt;<code>C</code>&gt;</li></ul><h2 id="type-parameters" tabindex="-1">Type Parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type Parameters&quot;">​</a></h2><table><thead><tr><th>Type Parameter</th><th>Description</th></tr></thead><tbody><tr><td><p><code>C</code></p></td><td><p>Client type</p></td></tr></tbody></table><h2 id="accessors" tabindex="-1">Accessors <a class="header-anchor" href="#accessors" aria-label="Permalink to &quot;Accessors&quot;">​</a></h2><h3 id="client" tabindex="-1">client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;client&quot;">​</a></h3><h4 id="get-signature" tabindex="-1">Get Signature <a class="header-anchor" href="#get-signature" aria-label="Permalink to &quot;Get Signature&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">C</span></span></code></pre></div><p>Returns the client by calling the client constructor function.</p><p>Lazy-loaded and memoized.</p><h5 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>C</code></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./StatefulWorkloadWithClient.html"><code>StatefulWorkloadWithClient</code></a>.<a href="./StatefulWorkloadWithClient.html#client"><code>client</code></a></p><hr><h3 id="connectionstringenvvar" tabindex="-1">connectionStringEnvVar <a class="header-anchor" href="#connectionstringenvvar" aria-label="Permalink to &quot;connectionStringEnvVar&quot;">​</a></h3><h4 id="get-signature-1" tabindex="-1">Get Signature <a class="header-anchor" href="#get-signature-1" aria-label="Permalink to &quot;Get Signature&quot;">​</a></h4><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">get </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">connectionStringEnvVar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(): string</span></span></code></pre></div><p>Returns the unique environment variable name that should hold the connection string.</p><h5 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h5><p><code>string</code></p><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./StatefulWorkloadWithClient.html"><code>StatefulWorkloadWithClient</code></a>.<a href="./StatefulWorkloadWithClient.html#connectionstringenvvar"><code>connectionStringEnvVar</code></a></p><h2 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="new-elasticsearch" tabindex="-1">new ElasticSearch() <a class="header-anchor" href="#new-elasticsearch" aria-label="Permalink to &quot;new ElasticSearch()&quot;">​</a></h3><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ElasticSearch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;(id, client): ElasticSearch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">C</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><p><code>id</code></p></td><td><p><code>string</code></p></td><td><p>Unique ID.</p></td></tr><tr><td><p><code>client</code></p></td><td><p>(<code>connectionStringVar</code>) =&gt; <code>C</code></p></td><td><p>Client constructor function. Executed once when accessing the <code>client</code> property.</p></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./ElasticSearch.html"><code>ElasticSearch</code></a>&lt;<code>C</code>&gt;</p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./StatefulWorkloadWithClient.html"><code>StatefulWorkloadWithClient</code></a>.<a href="./StatefulWorkloadWithClient.html#constructors"><code>constructor</code></a></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Modifier</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>id</code></td><td><code>readonly</code></td><td><code>string</code></td><td>Unique ID</td></tr></tbody></table>`,44)]))}const u=e(n,[["render",r]]);export{k as __pageData,u as default};