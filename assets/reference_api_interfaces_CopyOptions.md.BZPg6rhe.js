import{_ as t,c as o,a2 as d,o as r}from"./chunks/framework.8ycqjF2p.js";const f=JSON.parse('{"title":"Interface: CopyOptions","description":"","frontmatter":{},"headers":[],"relativePath":"reference/api/interfaces/CopyOptions.md","filePath":"reference/api/interfaces/CopyOptions.md"}'),a={name:"reference/api/interfaces/CopyOptions.md"};function n(i,e,c,s,p,l){return r(),o("div",null,e[0]||(e[0]=[d('<p><a href="./../globals.html">dw</a> / CopyOptions</p><h1 id="interface-copyoptions" tabindex="-1">Interface: CopyOptions <a class="header-anchor" href="#interface-copyoptions" aria-label="Permalink to &quot;Interface: CopyOptions&quot;">​</a></h1><h2 id="extends" tabindex="-1">Extends <a class="header-anchor" href="#extends" aria-label="Permalink to &quot;Extends&quot;">​</a></h2><ul><li><a href="./SharedCopyAddOptions.html"><code>SharedCopyAddOptions</code></a>.<a href="./OnBuildOption.html"><code>OnBuildOption</code></a></li></ul><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>chmod?</code></td><td><code>string</code></td><td>Permission bits of the copied content <strong>Since</strong> Dockerfile v1.2</td></tr><tr><td><code>chown?</code></td><td><code>string</code></td><td>Owner of the copied content: username, groupname, or UID/GID combination.</td></tr><tr><td><code>from?</code></td><td><code>string</code></td><td>Copy files from an image, a build stage, or a named context.</td></tr><tr><td><code>link?</code></td><td><code>boolean</code></td><td>Copy files that remain independent on their own layer and don&#39;t get invalidated when commands on previous layers are changed. Source files are copied into an empty destination directory. That directory is turned into a layer that is linked on top of your previous state. <strong>Since</strong> Dockerfile v1.4</td></tr><tr><td><code>onBuild?</code></td><td><code>boolean</code></td><td>Adds a trigger instruction to be executed at a later time, when the image is used as the base for another build.</td></tr></tbody></table>',6)]))}const m=t(a,[["render",n]]);export{f as __pageData,m as default};