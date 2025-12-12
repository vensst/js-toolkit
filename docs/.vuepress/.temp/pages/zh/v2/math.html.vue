<template><div><h1 id="math" tabindex="-1"><a class="header-anchor" href="#math"><span>Math</span></a></h1>
<h2 id="add" tabindex="-1"><a class="header-anchor" href="#add"><span>add</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>两个数相加</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} a - 第一个数</li>
<li>{number} b - 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 相加后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 0.5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="subtract" tabindex="-1"><a class="header-anchor" href="#subtract"><span>subtract</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>两个数相减</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} a - 第一个数</li>
<li>{number} b - 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 相减后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 0.3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiply" tabindex="-1"><a class="header-anchor" href="#multiply"><span>multiply</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>两个数相乘</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} a - 第一个数</li>
<li>{number} b - 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 相乘后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">multiply</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">,</span> <span class="token number">0.1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 0.04</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="divide" tabindex="-1"><a class="header-anchor" href="#divide"><span>divide</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>两个相除</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} a - 第一个数</li>
<li>{number} b - 第二个数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 相除后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">divide</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sum" tabindex="-1"><a class="header-anchor" href="#sum"><span>sum</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>数组求和</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number[]} arr - 数组</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 和</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">sum</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="average" tabindex="-1"><a class="header-anchor" href="#average"><span>average</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>求数组中数值平均值</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number[]} arr - 数组</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 平均值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">average</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ceil" tabindex="-1"><a class="header-anchor" href="#ceil"><span>ceil</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>向上取整</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} num - 数值</li>
<li>{number} [precision=0] - 精度</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 向上取整后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">ceil</span><span class="token punctuation">(</span><span class="token string">"23.321523"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 23.33</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="floor" tabindex="-1"><a class="header-anchor" href="#floor"><span>floor</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>向下取整</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} num - 数值</li>
<li>{number} [precision=0] - 保留小数位数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 向下取整后的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">floor</span><span class="token punctuation">(</span><span class="token string">"23.321523"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 23.32</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="decimal" tabindex="-1"><a class="header-anchor" href="#decimal"><span>decimal</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>保留小数点后几位，不考虑四舍五入</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} num - 数值</li>
<li>{number} [precision=0] - 保留小数位数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 保留小数点后几位的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">decimal</span><span class="token punctuation">(</span><span class="token string">"23.321523"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 23.32</span></span>
<span class="line"><span class="token function">decimal</span><span class="token punctuation">(</span><span class="token string">"23"</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 23</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="round" tabindex="-1"><a class="header-anchor" href="#round"><span>round</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>保留小数点后几位，四舍五入</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} num - 数值</li>
<li>{number} [precision=0] - 保留小数位数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 保留小数点后几位的数字</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">3.1415926</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 3.142</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


