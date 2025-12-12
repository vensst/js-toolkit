<template><div><h1 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>URL</span></a></h1>
<h2 id="geturlparams" tabindex="-1"><a class="header-anchor" href="#geturlparams"><span>getUrlParams</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>解析 URL 并提取查询参数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} [url=window.location.href] - 要解析的 URL 地址，默认为当前页面 URL</li>
<li>{string} [key] - 可选，要获取的特定参数名，如果不提供则返回所有参数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object|string|undefined} 如果提供了 key 则返回对应参数值，否则返回包含所有查询参数的对象</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getUrlParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getUrlParams</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token string">'_ijt'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getUrlParams</span><span class="token punctuation">(</span><span class="token string">'http://www.baidu.com?a=1&amp;b=2'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getUrlParams</span><span class="token punctuation">(</span><span class="token string">'http://www.baidu.com?a=1&amp;b=2'</span><span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removeurlparam" tabindex="-1"><a class="header-anchor" href="#removeurlparam"><span>removeUrlParam</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>从 URL 中删除指定的查询参数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} url - 需要处理的 URL 地址</li>
<li>{string} name - 要删除的参数名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 删除指定参数后的新 URL 地址</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">removeUrlParam</span><span class="token punctuation">(</span><span class="token string">'http://www.baidu.com?a=1&amp;b=2'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">removeUrlParam</span><span class="token punctuation">(</span><span class="token string">'http://www.baidu.com?a=1&amp;b=2'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tourlparams" tabindex="-1"><a class="header-anchor" href="#tourlparams"><span>toUrlParams</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将对象转换为 URL 查询参数字符串</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Object} obj - 包含查询参数的键值对对象</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 格式化后的 URL 查询参数字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">toUrlParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">toUrlParams</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


