<template><div><h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h1>
<h2 id="find" tabindex="-1"><a class="header-anchor" href="#find"><span>find</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>返回数组中满足提供的函数的判断条件的第一个元素的值</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array} arr 数组</li>
<li>{Function} callback 回调函数</li>
<li>{number} [fromIndex=0] 从该索引处开始查找</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{undefined|*} 满足条件的元素值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">"a"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// {id: 1, name: 'a'}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="findindex" tabindex="-1"><a class="header-anchor" href="#findindex"><span>findIndex</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>返回数组中满足提供的函数的判断条件的第一个元素的下标,未找到返回-1</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array} arr 数组</li>
<li>{Function} callback 回调函数</li>
<li>{number} [fromIndex=0] 从该索引处开始查找</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 满足条件的元素下标或-1</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="foreach" tabindex="-1"><a class="header-anchor" href="#foreach"><span>forEach</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>自定义 forEach 函数</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any[]} arr 数组</li>
<li>{Function} callback 回调函数</li>
<li>{Object} [thisObj] this 指向</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"--forEach--"</span><span class="token punctuation">,</span> item<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map"><span>map</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>自定义 map 函数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any[]} arr 数组</li>
<li>{Function} callback 回调函数</li>
<li>{Object} [thisObj] this 指向</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*[]}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> _arr1 <span class="token operator">=</span> jsToolkit<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> item<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"--map--"</span><span class="token punctuation">,</span> _arr1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="join" tabindex="-1"><a class="header-anchor" href="#join"><span>join</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>对象数组中根据指定属性名以及拼接字符，返回拼接的属性名的值的字符串（普通或对象数组）</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Object[]|string} arr 对象数组</li>
<li>{string} char 符号</li>
<li>{string} [attrName] 属性名，该参数有值是 arr 必须是对象数组</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 符号拼接的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token string">","</span><span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 1,2,3,4,4,3,4</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"-"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 1-2-3-4-5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sort" tabindex="-1"><a class="header-anchor" href="#sort"><span>sort</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>排序</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number[]} arr number 类型数组</li>
<li>{number} [type=1] 排序类型 1：从小到大 2：从大到小 3：随机</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number[]} 排序后的数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> _sortArrr <span class="token operator">=</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>_sortArrr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 2, 3, 3, 4]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="unique" tabindex="-1"><a class="header-anchor" href="#unique"><span>unique</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>数组去重（普通数组或对象数组都可以）</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array&lt;any&gt;} arr 数组</li>
<li>{string} [attrName] 指定属性名称 (如果传这个值，就是对象数组去重，arr 参数必须是对象数组)</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Array} 去重后的数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">unique</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [1, 2, 3, 4, 5, 6]</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">unique</span><span class="token punctuation">(</span>arr1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">unique</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="union" tabindex="-1"><a class="header-anchor" href="#union"><span>union</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>求两个数组的并集（普通数组或对象数组都可以）</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any[]} arr1 数组</li>
<li>{any[]} arr2 数组</li>
<li>{string} [attrName] 指定属性名称 (如果传这个值，就是对象数组合并，arr1 和 arr2 必须是对象数组)</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any[]} 返回并集数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsttk<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">jsttk<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span>arr3<span class="token punctuation">,</span> arr4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">jsttk<span class="token punctuation">.</span><span class="token function">union</span><span class="token punctuation">(</span>arr3<span class="token punctuation">,</span> arr4<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intersect" tabindex="-1"><a class="header-anchor" href="#intersect"><span>intersect</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>求两个数组的交集</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any[]} arr1 数组</li>
<li>{any[]} arr2 数组</li>
<li>{string} [attrName] 指定属性名称 (如果传这个值，就是求两个对象数组交集，arr1 和 arr2 必须是对象数组)</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any[]} 返回交集数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">intersect</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">intersect</span><span class="token punctuation">(</span>arr3<span class="token punctuation">,</span> arr4<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">intersect</span><span class="token punctuation">(</span>arr3<span class="token punctuation">,</span> arr4<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intersectinmatrix" tabindex="-1"><a class="header-anchor" href="#intersectinmatrix"><span>intersectInMatrix</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在二维数组中根据指定属性名获取数组的交集</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array&lt;Array&lt;Object&gt;&gt;} arr 数组，例如：[[{a:1},{a:2}],[{a:1},{a:3}]]</li>
<li>{string} [attrName] 指定属性名称，如果不传，就是普通数组，如果传了，就是对象数组</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any[]} 返回交集数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr4 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> arr3<span class="token punctuation">,</span> arr4<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">intersectInMatrix</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">intersectInMatrix</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elcount" tabindex="-1"><a class="header-anchor" href="#elcount"><span>elCount</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>对象数组重复数据添加标记</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any[]} arr 数组</li>
<li>{(Function|*)} predicate 指定元素或者回调函数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 返回出现次数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">elCount</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">elCount</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> item <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="duplicatedatatag" tabindex="-1"><a class="header-anchor" href="#duplicatedatatag"><span>duplicateDataTag</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>对象数组重复数据添加标记</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Object[]} arr 对象数组</li>
<li>{string} attrName 指定属性名称 例如：'a'</li>
<li>{string} tagAttrName 标记属性名称 默认：'_xh' 值从 1 开始</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object[]} 返回新的对象数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr7 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">duplicateDataTag</span><span class="token punctuation">(</span>arr7<span class="token punctuation">,</span> <span class="token string">"nodeStr"</span><span class="token punctuation">,</span> <span class="token string">"axh"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// [</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'div', axh: 1},</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'span', axh: 1},</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'p', axh: 1},</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'div', axh: 2},</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'div', axh: 3},</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'p', axh: 2},</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'span', axh: 2},</span></span>
<span class="line"><span class="token comment">//   {nodeStr: 'span', axh: 3}</span></span>
<span class="line"><span class="token comment">// ]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groupbyattr" tabindex="-1"><a class="header-anchor" href="#groupbyattr"><span>groupByAttr</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据指定属性对数组进行分组</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Object[]} arr 对象数组</li>
<li>{string} attrName 指定属性名称</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object} 返回分组后的对象</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr8 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">groupByAttr</span><span class="token punctuation">(</span>arr8<span class="token punctuation">,</span> <span class="token string">"nodeStr"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groupbysize" tabindex="-1"><a class="header-anchor" href="#groupbysize"><span>groupBySize</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据指定长度对数组进行分组</p>
</li>
<li>
<p>添加版本：</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any[]} arr 数组</li>
<li>{number} size 指定长度</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{any[][]} 返回分组后的二维数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr8 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"div"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"p"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nodeStr</span><span class="token operator">:</span> <span class="token string">"span"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">nodeSize</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">groupBySize</span><span class="token punctuation">(</span>arr8<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toarray" tabindex="-1"><a class="header-anchor" href="#toarray"><span>toArray</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将类数组转换为数组的方法</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{any[]} arr 类数组</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Array} 数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> <span class="token function-variable function">fun</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toArray</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">fun</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arraytotree" tabindex="-1"><a class="header-anchor" href="#arraytotree"><span>arrayToTree</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>一维数组转树形结构数据</p>
</li>
<li>
<p>添加版本：1.1.0-beta.16</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array} arr 数组</li>
<li>{Object} options 配置项</li>
<li>{string} [options.id='id'] 唯一表示字段</li>
<li>{string} [options.parentId='parentId'] 父级标识字段</li>
<li>{string} [options.children='children'] 子级数据字段</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*[]}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> flatArray <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.2"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1.1"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1.2"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2.1"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">parentCode</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2.2"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> jsToolkit<span class="token punctuation">.</span><span class="token function">arrayToTree</span><span class="token punctuation">(</span>flatArray<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"code"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">parentId</span><span class="token operator">:</span> <span class="token string">"parentCode"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token string">"sons"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"buildTree"</span><span class="token punctuation">,</span> tree<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="treetoarray" tabindex="-1"><a class="header-anchor" href="#treetoarray"><span>treeToArray</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>树形数据转一维数组</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array} tree 树形结构数组</li>
<li>{Object} options 配置项</li>
<li>{string} [options.children='children'] 子级数据字段</li>
</ul>
</li>
<li>
<p>添加版本：1.1.0-beta.16</p>
</li>
<li>
<p>返回值：</p>
<p>{*[]}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1.1"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1.2"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.2"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2.1"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2.2"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> flatArray <span class="token operator">=</span> <span class="token function">treeToArray</span><span class="token punctuation">(</span>tree<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"treeToArray"</span><span class="token punctuation">,</span> flatArray<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="findtreepath" tabindex="-1"><a class="header-anchor" href="#findtreepath"><span>findTreePath</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在树形结构中查找目标节点的路径</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array} tree 树形结构数据</li>
<li>{string} targetKey 目标键名</li>
<li>{string} targetValue 目标键值</li>
<li>{string} [childrenKey='children'] 子节点键名</li>
<li>{string} [backKey='id'] 返回值的键名</li>
</ul>
</li>
<li>
<p>添加版本：@version 1.2.0</p>
</li>
<li>
<p>返回值：</p>
<p>{null|*[]}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1.1"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.1.2"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点1.2"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2.1"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"节点2.2"</span><span class="token punctuation">,</span> <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> path <span class="token operator">=</span> jsToolkit<span class="token punctuation">.</span><span class="token function">findTreePath</span><span class="token punctuation">(</span>tree<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// [1, 2, 5]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="max" tabindex="-1"><a class="header-anchor" href="#max"><span>max</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>数组最大值</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array&lt;number|Object&gt;} arr 数组</li>
<li>{string} [attrName] 对象数组的属性名</li>
</ul>
</li>
<li>
<p>添加版本：1.1.0-beta.16</p>
</li>
<li>
<p>返回值：</p>
<p>{number|*}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"max"</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// max 64 3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="min" tabindex="-1"><a class="header-anchor" href="#min"><span>min</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>数组最小值</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Array&lt;number|Object&gt;} arr 数组</li>
<li>{string} [attrName] 对象数组的属性名</li>
</ul>
</li>
<li>
<p>添加版本：1.1.0-beta.16</p>
</li>
<li>
<p>返回值：</p>
<p>{number|*}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token number">64</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"a"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"b"</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">28</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"min"</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">max</span><span class="token punctuation">(</span>arr1<span class="token punctuation">,</span> <span class="token string">"id"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// min 2 1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


