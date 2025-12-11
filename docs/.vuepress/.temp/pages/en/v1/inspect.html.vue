<template><div><h1 id="检测" tabindex="-1"><a class="header-anchor" href="#检测"><span>检测</span></a></h1>
<h2 id="istype" tabindex="-1"><a class="header-anchor" href="#istype"><span>isType</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>类型判断</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} type 类型 String,Number,Boolean,Object,Array,Function,Date,RegExp,Error,Symbol</li>
<li>{any} val 值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否符合类型</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">isType</span><span class="token punctuation">(</span><span class="token string">"String"</span><span class="token punctuation">,</span> <span class="token string">"123"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isstring" tabindex="-1"><a class="header-anchor" href="#isstring"><span>isString</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否字符串</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isString</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isnumber" tabindex="-1"><a class="header-anchor" href="#isnumber"><span>isNumber</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否数字</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isNumber</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isnumeric" tabindex="-1"><a class="header-anchor" href="#isnumeric"><span>isNumeric</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否数字</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{*} value 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isNumeric</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isNumeric</span><span class="token punctuation">(</span><span class="token string">"123"</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isNumeric</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span> <span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isboolean" tabindex="-1"><a class="header-anchor" href="#isboolean"><span>isBoolean</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否 boolean</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isBoolean</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isBoolean</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isfunction" tabindex="-1"><a class="header-anchor" href="#isfunction"><span>isFunction</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否函数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isFunction</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isnull" tabindex="-1"><a class="header-anchor" href="#isnull"><span>isNull</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否为 null</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isNull</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isundefined" tabindex="-1"><a class="header-anchor" href="#isundefined"><span>isUndefined</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否 undefined</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isobject" tabindex="-1"><a class="header-anchor" href="#isobject"><span>isObject</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否对象</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isObject</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//  rue</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isarray" tabindex="-1"><a class="header-anchor" href="#isarray"><span>isArray</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否数组</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isdate" tabindex="-1"><a class="header-anchor" href="#isdate"><span>isDate</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否时间</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isregexp" tabindex="-1"><a class="header-anchor" href="#isregexp"><span>isRegExp</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否正则</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isRegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iserror" tabindex="-1"><a class="header-anchor" href="#iserror"><span>isError</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否错误对象</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isError</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="issymbol" tabindex="-1"><a class="header-anchor" href="#issymbol"><span>isSymbol</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否 Symbol 函数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isSymbol</span><span class="token punctuation">(</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ispromise" tabindex="-1"><a class="header-anchor" href="#ispromise"><span>isPromise</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否 Promise 对象</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isPromise</span><span class="token punctuation">(</span>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isset" tabindex="-1"><a class="header-anchor" href="#isset"><span>isSet</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否 Set 对象</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isSet</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isfalse" tabindex="-1"><a class="header-anchor" href="#isfalse"><span>isFalse</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否为 false</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"false"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"null"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"undefined"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isFalse</span><span class="token punctuation">(</span><span class="token string">"NaN"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="istrue" tabindex="-1"><a class="header-anchor" href="#istrue"><span>isTrue</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否为 true</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any} o 任意类型</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isTrue</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iscardid" tabindex="-1"><a class="header-anchor" href="#iscardid"><span>isCardID</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>严格的身份证校验</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} sId 身份证号码</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isCardID</span><span class="token punctuation">(</span><span class="token string">"350524199010109876"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// false</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ismobile" tabindex="-1"><a class="header-anchor" href="#ismobile"><span>isMobile</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断当前环境是否为移动端</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否为移动端</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isMobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="isios" tabindex="-1"><a class="header-anchor" href="#isios"><span>isIos</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断当前环境是否为ios苹果手机</p>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isIos</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="ispc" tabindex="-1"><a class="header-anchor" href="#ispc"><span>isPC</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断当前环境是否为 PC 端</p>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isPC</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="ispcbrowser" tabindex="-1"><a class="header-anchor" href="#ispcbrowser"><span>isPcBrowser</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否是PC浏览器</p>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否是PC浏览器</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isPcBrowser</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getmobileenv" tabindex="-1"><a class="header-anchor" href="#getmobileenv"><span>getMobileEnv</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取当前属于哪种类型手机运行环境</p>
</li>
<li>
<p>返回值：</p>
<p>{string} 是手机环境返回运行环境，不是手机运行环境返回Unknown</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">getMobileEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="getbrowsertype" tabindex="-1"><a class="header-anchor" href="#getbrowsertype"><span>getBrowserType</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取浏览器类型</p>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">getBrowserType</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="checkpasswordlevel" tabindex="-1"><a class="header-anchor" href="#checkpasswordlevel"><span>checkPasswordLevel</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>检测密码强度</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} password 需要检测密码</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 级别 0-4</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">checkPasswordLevel</span><span class="token punctuation">(</span><span class="token string">"123456"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="checkformat" tabindex="-1"><a class="header-anchor" href="#checkformat"><span>checkFormat</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>检查手机号码，座机号码，身份证，密码，邮政编码，QQ号，邮箱，金额(小数点2位)，网址，IP，日期时间，数字，英文，中文，小写，大写，HTML标记格式是否正确</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str 检查的字符串</li>
<li>{string} type 检查的类型 类型 phone, tel, card, pwd, postal, QQ, email, money, URL, IP, date, number, english,
chinese, lower, upper, HTML</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">checkFormat</span><span class="token punctuation">(</span><span class="token string">"15061709876"</span><span class="token punctuation">,</span> <span class="token string">"phone"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">checkFormat</span><span class="token punctuation">(</span><span class="token string">"025-1234567"</span><span class="token punctuation">,</span> <span class="token string">"tel"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// true</span></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="isfullscreen" tabindex="-1"><a class="header-anchor" href="#isfullscreen"><span>isFullScreen</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断是否是全屏</p>
</li>
<li>
<p>添加版本：1.1.0-beta.15</p>
</li>
<li>
<p>返回值：</p>
<p>{Element|*}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">isFullScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


