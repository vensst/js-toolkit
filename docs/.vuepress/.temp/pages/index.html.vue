<template><div><h1 id="指南" tabindex="-1"><a class="header-anchor" href="#指南"><span>指南</span></a></h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h2>
<p><a href="https://github.com/vensst/js-toolkit" target="_blank" rel="noopener noreferrer">@vensst/js-toolkit</a> 是 JavaScript 工具库，整合了前端一些常用的 js 函数。</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<h3 id="使用npm" tabindex="-1"><a class="header-anchor" href="#使用npm"><span>使用npm</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @vensst/js-toolkit <span class="token parameter variable">-S</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 全部引用</span></span>
<span class="line"><span class="token keyword">import</span> jsToolkit <span class="token keyword">from</span> <span class="token string">"@vensst/js-toolkit"</span></span>
<span class="line"><span class="token comment">// 不含第三方依赖的引用方式</span></span>
<span class="line"><span class="token keyword">import</span> jsToolkit <span class="token keyword">from</span> <span class="token string">"@vensst/js-toolkit/lib/index.js"</span></span>
<span class="line"></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 按需引用</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>random<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vensst/js-toolkit"</span></span>
<span class="line"></span>
<span class="line"><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用script" tabindex="-1"><a class="header-anchor" href="#使用script"><span>使用script</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@vensst/js-toolkit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  jsToolkit<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


