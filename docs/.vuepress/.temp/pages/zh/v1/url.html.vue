<template><div><h1 id="url" tabindex="-1"><a class="header-anchor" href="#url"><span>Url</span></a></h1>
<h2 id="geturlparam" tabindex="-1"><a class="header-anchor" href="#geturlparam"><span>getUrlParam</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取当前url地址栏指定参数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} name 参数名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{(string|null)} 参数值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// http://localhost/examples/index.html?name=张三&amp;age=18</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 张三</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">getUrlParam</span><span class="token punctuation">(</span><span class="token string">'sex'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// null</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="geturlparams" tabindex="-1"><a class="header-anchor" href="#geturlparams"><span>getUrlParams</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取指定url地址上所有参数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(string|null)} url url地址</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object} 参数对象</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// http://localhost/examples/index.html?name=张三&amp;age=18</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">getUrlParams</span><span class="token punctuation">(</span><span class="token string">'name'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// {name: '张三', age: '18'}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delurlparam" tabindex="-1"><a class="header-anchor" href="#delurlparam"><span>delUrlParam</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>删除指定url地址上指定参数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} url url地址</li>
<li>{string} name 参数名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{(string|*)} 返回新的url地址</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">delUrlParam</span><span class="token punctuation">(</span><span class="token string">'http://localhost/examples/index.html?name=张三&amp;age=18'</span><span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// http://localhost/examples/index.html?age=18</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="objtourlparams" tabindex="-1"><a class="header-anchor" href="#objtourlparams"><span>objToUrlParams</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>对象转url参数</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Object} obj 参数对象</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} url参数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">objToUrlParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// a=1&amp;b=2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


