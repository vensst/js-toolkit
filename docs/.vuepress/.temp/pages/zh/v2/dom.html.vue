<template><div><h1 id="dom" tabindex="-1"><a class="header-anchor" href="#dom"><span>DOM</span></a></h1>
<h2 id="queryelement" tabindex="-1"><a class="header-anchor" href="#queryelement"><span>queryElement</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>查找dom元素</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} [selector] - CSS选择器字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Element|NodeList|undefined} 返回单个元素、元素集合（NodeList或数组）或 undefined</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre v-pre><code class="language-html"><span class="line"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>../../lib/index.umd.js<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">  这是一段内容 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sp<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>s1 s--style<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是span标签1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sp<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>s2 s--style<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是span标签2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>s3 s--style<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> #e4393c<span class="token punctuation">;</span><span class="token property">font-size</span><span class="token punctuation">:</span> 18px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>我是span标签3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>s4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>我是span标签4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>我是div标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">  <span class="token keyword">const</span> <span class="token punctuation">{</span>queryElement<span class="token punctuation">}</span> <span class="token operator">=</span> JsToolkit</span>
<span class="line">  <span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app span"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page>.s1"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page span"</span><span class="token punctuation">)</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hasclass" tabindex="-1"><a class="header-anchor" href="#hasclass"><span>hasClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>检测元素是否包含指定的CSS类名</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element|NodeList|Element[]} el - DOM元素</li>
<li>{string} className - 要检测的类名</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 如果元素包含指定类名则返回true，否则返回false</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"page"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page span"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"page"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">hasClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page span"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"s1"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addclass" tabindex="-1"><a class="header-anchor" href="#addclass"><span>addClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>添加类名</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element|NodeList|Element[]} el - 元素</li>
<li>{string} className - 类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'page--style'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page span"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'span--style'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removeclass" tabindex="-1"><a class="header-anchor" href="#removeclass"><span>removeClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>删除类名</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element|NodeList|Element[]} el - 元素</li>
<li>{string} className - 类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'page--style'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page span"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'span--style'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="replaceclass" tabindex="-1"><a class="header-anchor" href="#replaceclass"><span>replaceClass</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>替换元素的CSS类名(用新类名替换旧类名)</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element|NodeList|Element[]} el - DOM元素或元素集合</li>
<li>{string} oldClassName - 旧类名</li>
<li>{string} newClassName - 新类名</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">replaceClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">replaceClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'page'</span><span class="token punctuation">,</span> <span class="token string">'page1'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">replaceClass</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page1 span"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'s--style'</span><span class="token punctuation">,</span> <span class="token string">'s--style1'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getsiblings" tabindex="-1"><a class="header-anchor" href="#getsiblings"><span>getSiblings</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取兄弟节点</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} el - DOM元素</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Element[]|undefined} 兄弟节点数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getSiblings</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getSiblings</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getSiblings</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">".page1 span"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getstyle" tabindex="-1"><a class="header-anchor" href="#getstyle"><span>getStyle</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取元素的样式属性值</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} el - DOM元素</li>
<li>{string} [attrName] - CSS属性名（驼峰命名或短横线命名），例如 'backgroundColor' 或 'font-size'</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string|CSSStyleDeclaration|undefined} 如果提供了attrName，返回具体的样式值字符串；否则返回CSSStyleDeclaration对象；如果元素无效则返回undefined</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'font-size'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app .s3"</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app .s3"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'color'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app .s3"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'font-size'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="addstyle" tabindex="-1"><a class="header-anchor" href="#addstyle"><span>addStyle</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>设置元素的样式(支持为单个元素或元素集合批量设置样式)</p>
</li>
<li>
<p>添加版本：1.1.0-beta.8</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element|NodeList|Element[]} el - DOM元素、元素集合或元素数组</li>
<li>{Object} styles - 样式对象，键为CSS属性名，值为属性值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Element|NodeList|Element[]} 原始元素或元素集合</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">addStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">'font-size'</span><span class="token operator">:</span> <span class="token string">'18px'</span><span class="token punctuation">,</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'#e4393c'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app span"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span> <span class="token string-property property">"color"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">addStyle</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app .s4"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">"backgroundColor"</span><span class="token operator">:</span> <span class="token string">"#1d1fe8"</span><span class="token punctuation">,</span> <span class="token string-property property">"color"</span><span class="token operator">:</span> <span class="token string">"#fff"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="insertafter" tabindex="-1"><a class="header-anchor" href="#insertafter"><span>insertAfter</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在指定元素之后插入新元素</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} el - 元素</li>
<li>{string} htmlString - 插入元素</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">insertAfter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">insertAfter</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app .s1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"&lt;div>s1之后插入div&lt;/div>"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">insertAfter</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"title"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;script src="./vue.js">&lt;\/script></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="insertbefore" tabindex="-1"><a class="header-anchor" href="#insertbefore"><span>insertBefore</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在指定元素之前插入新元素</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} el - 当前元素</li>
<li>{string} htmlString - 插入元素</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">insertBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">insertBefore</span><span class="token punctuation">(</span><span class="token function">queryElement</span><span class="token punctuation">(</span><span class="token string">"#app .s1"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"&lt;div>s1之前插入div&lt;/div>"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


