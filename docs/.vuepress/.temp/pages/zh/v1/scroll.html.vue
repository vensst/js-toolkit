<template><div><h1 id="滚动" tabindex="-1"><a class="header-anchor" href="#滚动"><span>滚动</span></a></h1>
<details class="hint-container details"><summary>点击查看综合示例代码</summary>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width,initial-scale=1,user-scalable=no<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css"></span>
<span class="line">    <span class="token comment">/* global styles */</span></span>
<span class="line">    <span class="token selector">:root</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">--color-black-text</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">--color-white-background</span><span class="token punctuation">:</span> #fff</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">*</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">-moz-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">html</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">font-size</span><span class="token punctuation">:</span> 62.5%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">/*font-family: Microsoft YaHei, Arial, sans-serif;*/</span></span>
<span class="line">      <span class="token comment">/*阻止旋转屏幕时自动调整字体大小*/</span></span>
<span class="line">      <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">-ms-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">/* 解决IOS默认滑动很卡的情况 */</span></span>
<span class="line">      <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">html,</span>
<span class="line">    body</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">/*width: 100%;*/</span></span>
<span class="line">      <span class="token comment">/*height: 100%;*/</span></span>
<span class="line">      <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">/*overflow: auto;*/</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">body</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">font-family</span><span class="token punctuation">:</span> Inter<span class="token punctuation">,</span> -apple-system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> <span class="token string">"Segoe UI"</span><span class="token punctuation">,</span> Roboto<span class="token punctuation">,</span> Oxygen<span class="token punctuation">,</span> Ubuntu<span class="token punctuation">,</span> Cantarell<span class="token punctuation">,</span> <span class="token string">"Fira Sans"</span><span class="token punctuation">,</span> <span class="token string">"Droid Sans"</span><span class="token punctuation">,</span> <span class="token string">"Helvetica Neue"</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-black-text<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--color-white-background<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">line-height</span><span class="token punctuation">:</span> 1.15<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">padding</span><span class="token punctuation">:</span> 20px 10%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">#back</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">bottom</span><span class="token punctuation">:</span> 10%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">right</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.dir</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translateY</span><span class="token punctuation">(</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">width</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token selector">.dir > div</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">line-height</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">background</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.dir > div.active</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">background</span><span class="token punctuation">:</span> #fac105<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token selector">.content div</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">height</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #181818<span class="token punctuation">;</span></span>
<span class="line">      <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dir<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>f<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>g<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">data-id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>h<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  TOP</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>d<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>f<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>g<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>g<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>h<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>h<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://unpkg.com/@vensst/js-toolkit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span></span>
<span class="line">    addClass<span class="token punctuation">,</span></span>
<span class="line">    siblings<span class="token punctuation">,</span></span>
<span class="line">    removeClass<span class="token punctuation">,</span></span>
<span class="line">    getScrollPosition<span class="token punctuation">,</span></span>
<span class="line">    smoothScroll<span class="token punctuation">,</span></span>
<span class="line">    scrollToTop<span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    ScrollView<span class="token punctuation">,</span></span>
<span class="line">    initScrollView<span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span>  <span class="token operator">=</span> jsToolkit</span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> els <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">'.dir > div'</span><span class="token punctuation">)</span></span>
<span class="line">  els<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    item<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">'data-id'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">smoothScroll</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">#</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'back'</span><span class="token punctuation">)</span></span>
<span class="line">  btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">scrollToTop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// scrollToTop(window,{behavior: 'instant'})</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'--getScrollPosition--'</span><span class="token punctuation">,</span> <span class="token function">getScrollPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// body为滚动元素</span></span>
<span class="line">    <span class="token comment">// scrollToTop('body')</span></span>
<span class="line">    <span class="token comment">// console.log('--getScrollPosition--', getScrollPosition('body'),)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'a'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'b'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'c'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'d'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'e'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'f'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'g'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'h'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line">  <span class="token comment">// const arr2 = [</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'a',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'b',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'c',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'd',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'e',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'f',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'g',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">//   {</span></span>
<span class="line">  <span class="token comment">//     name: 'h',</span></span>
<span class="line">  <span class="token comment">//   },</span></span>
<span class="line">  <span class="token comment">// ]</span></span>
<span class="line">  <span class="token keyword">const</span> scrollEl <span class="token operator">=</span> window</span>
<span class="line">  <span class="token comment">// body为滚动元素</span></span>
<span class="line">  <span class="token comment">// const scrollEl = document.querySelector('body')</span></span>
<span class="line">  <span class="token keyword">const</span> scrollView <span class="token operator">=</span> <span class="token function">initScrollView</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">dataList</span><span class="token operator">:</span> arr1<span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// valueKey: 'name',</span></span>
<span class="line">    <span class="token literal-property property">attrName</span><span class="token operator">:</span><span class="token string">"id"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">const</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[data-id=</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">addClass</span><span class="token punctuation">(</span>el<span class="token punctuation">,</span> <span class="token string">'active'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token function">siblings</span><span class="token punctuation">(</span>el<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">removeClass</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token string">'active'</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  scrollEl<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'scroll'</span><span class="token punctuation">,</span> scrollView<span class="token punctuation">.</span><span class="token function">handlerScroll</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>scrollView<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="getscrollposition" tabindex="-1"><a class="header-anchor" href="#getscrollposition"><span>getScrollPosition</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取当前的滚动位置</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Window|Element|string)} [el=window] 元素或选择器</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object} 滚动位置 {x,y}</p>
</li>
<li>
<p>示例：</p>
<p>参考上面的综合示例代码</p>
</li>
</ul>
<h2 id="smoothscroll" tabindex="-1"><a class="header-anchor" href="#smoothscroll"><span>smoothScroll</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>滚动到指定元素区域</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Element|string)} el 元素或选择器</li>
</ul>
</li>
<li>
<p>示例：</p>
<p>参考上面的综合示例代码</p>
</li>
</ul>
<h2 id="scrolltotop" tabindex="-1"><a class="header-anchor" href="#scrolltotop"><span>scrollToTop</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>平滑滚动至顶部</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Window|Element|string)} [el=window] 元素或选择器</li>
<li>{Object} [options={behavior: 'smooth'}] 参数</li>
</ul>
</li>
<li>
<p>示例：</p>
<p>参考上面的综合示例代码</p>
</li>
</ul>
<h2 id="initscrollview" tabindex="-1"><a class="header-anchor" href="#initscrollview"><span>initScrollView</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>初始化滚动监听</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Object} options 配置对象</li>
<li>{Array} options.dataList 数据列表</li>
<li>{string} options.valueKey valueKey 有值时，dataList为对象数组</li>
<li>{string} options.attrName 属性名</li>
<li>{Function} options.callback 回调函数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{ScrollView} 返回ScrollView实例对象</p>
</li>
<li>
<p>示例：</p>
<p>参考上面的综合示例代码</p>
</li>
</ul>
</div></template>


