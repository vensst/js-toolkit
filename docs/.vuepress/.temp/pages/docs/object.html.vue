<template><div><h1 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h1>
<h2 id="chainget" tabindex="-1"><a class="header-anchor" href="#chainget"><span>chainGet</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>链式获取对象属性</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Object} obj 检索对象</li>
<li>{string} chain 属性链（例如：a.b.c）</li>
<li>{*} [defaultValue=undefined] 默认值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">chainGet</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"a.b[0].c"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 1</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">chainGet</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"a.b[0].d"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// undefined</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">chainGet</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"a.d.d"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 0</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">chainGet</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"a['c']"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 2</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">chainGet</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">"a['d']"</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 0</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">chainGet</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


