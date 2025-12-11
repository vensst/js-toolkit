<template><div><h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h1>
<h2 id="debounce" tabindex="-1"><a class="header-anchor" href="#debounce"><span>debounce</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>函数防抖</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Function} fun 需要被防抖的函数</li>
<li>{number} [wait=500]  防抖的时间（毫秒）</li>
<li>{boolean} [immediate=true] 是否立即执行</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Function} 返回新的 debounced（防抖动）函数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">debounceEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>防抖<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">const</span> debounceEvent <span class="token operator">=</span> jsToolkit<span class="token punctuation">.</span><span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'防抖成功'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="throttle" tabindex="-1"><a class="header-anchor" href="#throttle"><span>throttle</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>函数节流</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Function} fun 需要被节流的函数</li>
<li>{number} [wait=500] 节流的时间（毫秒</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Function} 返回一个新的函数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token special-attr"><span class="token attr-name">onclick</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value javascript language-javascript"><span class="token function">throttleEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>节流<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	<span class="token keyword">const</span> throttleEvent <span class="token operator">=</span> jsToolkit<span class="token punctuation">.</span><span class="token function">throttle</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">		console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'节流成功'</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


