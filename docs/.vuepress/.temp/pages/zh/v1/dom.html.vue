<template><div><h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom"><span>dom</span></a></h1>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span>$</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>查找dom元素</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(string|Element)} selector 选择器</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{(Element|NodeListOf&lt;Element&gt;|null)} 返回元素或元素集合</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#id"</span><span class="token punctuation">)</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".class"</span><span class="token punctuation">)</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hasclass" tabindex="-1"><a class="header-anchor" href="#hasclass"><span>hasClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>检测类名，校验指定元素的类名是否包含指定的类名</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} ele dom元素</li>
<li>{string} className 类名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} true/false</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	jsToolkit<span class="token punctuation">.</span><span class="token function">hasClass</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'a'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// true</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addclass" tabindex="-1"><a class="header-anchor" href="#addclass"><span>addClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>添加类名</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Element|NodeList)} ele 元素</li>
<li>{string} className 类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	jsToolkit<span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removeclass" tabindex="-1"><a class="header-anchor" href="#removeclass"><span>removeClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>删除类名</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Element|NodeList)} ele 元素</li>
<li>{string} className 类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	jsToolkit<span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="replaceclass" tabindex="-1"><a class="header-anchor" href="#replaceclass"><span>replaceClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>替换类名</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Element|NodeList)} ele 元素</li>
<li>{string} newClassName 新类名</li>
<li>{string} oldClassName 旧类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>a b c<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	jsToolkit<span class="token punctuation">.</span><span class="token function">replaceClass</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="siblings" tabindex="-1"><a class="header-anchor" href="#siblings"><span>siblings</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取兄弟节点</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} ele dom元素</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*[]} 兄弟节点数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="getbystyle" tabindex="-1"><a class="header-anchor" href="#getbystyle"><span>getByStyle</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取行间样式属性</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} ele 元素</li>
<li>{string} attrName 属性名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 属性值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>e<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span>red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">	jsToolkit<span class="token punctuation">.</span><span class="token function">getByStyle</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"color"</span><span class="token punctuation">)</span></span>
<span class="line">	<span class="token comment">// "red"</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="elinsertafter" tabindex="-1"><a class="header-anchor" href="#elinsertafter"><span>elInsertAfter</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在指定元素之后插入新元素</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} el 元素</li>
<li>{string} htmlString 插入元素</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">elInsertAfter</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"&lt;div>123&lt;/div>"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="elinsertbefore" tabindex="-1"><a class="header-anchor" href="#elinsertbefore"><span>elInsertBefore</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在指定元素之前插入新元素</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} el 当前元素</li>
<li>{string} htmlString 插入元素</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">elInsertBefore</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"&lt;div>123&lt;/div>"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="addstyle" tabindex="-1"><a class="header-anchor" href="#addstyle"><span>addStyle</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>元素添加style样式</p>
</li>
<li>
<p>添加版本：1.1.0-beta.8</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{HTMLElement} el 元素</li>
<li>{Object} style 样式对象</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">addStyle</span><span class="token punctuation">(</span>jsToolkit<span class="token punctuation">.</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#e"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">fontSize</span><span class="token operator">:</span> <span class="token string">"12px"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


