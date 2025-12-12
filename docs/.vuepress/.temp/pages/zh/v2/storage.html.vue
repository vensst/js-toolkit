<template><div><h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage"><span>Storage</span></a></h1>
<h2 id="setlocalstorage" tabindex="-1"><a class="header-anchor" href="#setlocalstorage"><span>setLocalStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>设置 localStorage</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} key - key值</li>
<li>{any} val - value值</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'r1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'r2'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">setLocalStorage</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"tom"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">setLocalStorage</span><span class="token punctuation">(</span><span class="token string">"userInfo"</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getlocalstorage" tabindex="-1"><a class="header-anchor" href="#getlocalstorage"><span>getLocalStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取 localStorage</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} key - key值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getLocalStorage</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="removelocalstorage" tabindex="-1"><a class="header-anchor" href="#removelocalstorage"><span>removeLocalStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>清除某个 localStorage</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} key - key值</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">removeLocalStorage</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="clearlocalstorage" tabindex="-1"><a class="header-anchor" href="#clearlocalstorage"><span>clearLocalStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>清除所有 localStorage</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">clearLocalStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="setsessionstorage" tabindex="-1"><a class="header-anchor" href="#setsessionstorage"><span>setSessionStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>设置 sessionStorage</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} key - key值</li>
<li>{any} val - value值</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'r1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'r2'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">setSessionStorage</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"tom"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">setSessionStorage</span><span class="token punctuation">(</span><span class="token string">"userInfo"</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getsessionstorage" tabindex="-1"><a class="header-anchor" href="#getsessionstorage"><span>getSessionStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取 sessionStorage</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} key - key值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any} value值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getSessionStorage</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="removesessionstorage" tabindex="-1"><a class="header-anchor" href="#removesessionstorage"><span>removeSessionStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>清除某个 sessionStorage</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} key - key值</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">removeSessionStorage</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="clearsessionstorage" tabindex="-1"><a class="header-anchor" href="#clearsessionstorage"><span>clearSessionStorage</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>清除所有 sessionStorage</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">clearSessionStorage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="setcookie" tabindex="-1"><a class="header-anchor" href="#setcookie"><span>setCookie</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>设置 cookie</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} name - cookie 名称</li>
<li>{any} value - cookie 值</li>
<li>{Object} [options] - 配置选项</li>
<li>{number} [options.expires] - 过期时间(秒)</li>
<li>{string} [options.domain] - 域名</li>
<li>{string} [options.path] - 路径</li>
<li>{boolean} [options.secure] - 是否仅 HTTPS 传输</li>
<li>{string} [options.sameSite] - SameSite 策略 ('Strict' | 'Lax' | 'None')</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span> <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'r1'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'r2'</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">expires</span><span class="token operator">:</span> <span class="token number">3600</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"/"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">domain</span><span class="token operator">:</span> <span class="token string">"www.baidu.com"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token string">"userInfo"</span><span class="token punctuation">,</span> userInfo<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getcookie" tabindex="-1"><a class="header-anchor" href="#getcookie"><span>getCookie</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取 cookie</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} name - 存储的键名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any|undefined} 返回存储的值，如果不存在返回 undefined</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getCookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="removecookie" tabindex="-1"><a class="header-anchor" href="#removecookie"><span>removeCookie</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>删除某个 cookie</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} name - cookie 名称</li>
<li>{Object} options - 配置选项</li>
<li>{number} [options.expires] - 过期时间(秒)</li>
<li>{string} [options.domain] - 域名</li>
<li>{string} [options.path] - 路径</li>
<li>{boolean} [options.secure] - 是否仅 HTTPS 传输</li>
<li>{string} [options.sameSite] - SameSite 策略 ('Strict' | 'Lax' | 'None')</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">removeCookie</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


