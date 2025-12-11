<template><div><h1 id="guide" tabindex="-1"><a class="header-anchor" href="#guide"><span>Guide</span></a></h1>
<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2>
<p><a href="https://github.com/vensst/js-toolkit" target="_blank" rel="noopener noreferrer">@vensst/js-toolkit</a> is a JavaScript utility library that integrates commonly used frontend JavaScript functions.</p>
<h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation"><span>Installation</span></a></h2>
<h3 id="using-npm" tabindex="-1"><a class="header-anchor" href="#using-npm"><span>Using npm</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre v-pre><code class="language-bash"><span class="line"><span class="token function">npm</span> <span class="token function">install</span> @vensst/js-toolkit <span class="token parameter variable">-S</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// Import all functions</span></span>
<span class="line"><span class="token keyword">import</span> JsToolkit <span class="token keyword">from</span> <span class="token string">"@vensst/js-toolkit"</span></span>
<span class="line"></span>
<span class="line">JsToolkit<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Import on demand</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>random<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@vensst/js-toolkit"</span></span>
<span class="line"></span>
<span class="line"><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="using-script-tag" tabindex="-1"><a class="header-anchor" href="#using-script-tag"><span>Using script tag</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@vensst/js-toolkit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  JsToolkit<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


