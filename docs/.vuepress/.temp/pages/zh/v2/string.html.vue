<template><div><h1 id="string" tabindex="-1"><a class="header-anchor" href="#string"><span>String</span></a></h1>
<h2 id="desens" tabindex="-1"><a class="header-anchor" href="#desens"><span>desens</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>字符串脱敏</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 需要脱敏的字符串</li>
<li>{Object} [options={}] - 脱敏选项</li>
<li>{string} [options.char=&quot;*&quot;] - 脱敏字符</li>
<li>{number} [options.startIndex=0] - 脱敏起始位置（包含）</li>
<li>{number} [options.endIndex=str.length] - 脱敏结束位置（不包含）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已脱敏字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"01234567890"</span></span>
<span class="line"><span class="token function">desens</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">desens</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">char</span><span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">startIndex</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">endIndex</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">desens</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">char</span><span class="token operator">:</span> <span class="token string">"x"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">startIndex</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">endIndex</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim"><span>trim</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>去除字符串中前后指定字符</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 去除字符的字符串</li>
<li>{string} [chars=''] - 去除的字符（默认为空格）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已去除的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">" admin 1234 "</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"-admin-1234-"</span></span>
<span class="line"><span class="token function">trim</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trim</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token string">'-'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trim</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trimall" tabindex="-1"><a class="header-anchor" href="#trimall"><span>trimAll</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>去除字符串中所有指定字符</p>
</li>
<li>
<p>添加版本：2.0.0</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 需要去除字符的字符串</li>
<li>{string} chars - 需要去除的字符（默认为空格）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已去除的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">" admin 1234 "</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"-admin-1234-"</span></span>
<span class="line"><span class="token function">trimAll</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trimAll</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token string">'-'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trimAll</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trimend" tabindex="-1"><a class="header-anchor" href="#trimend"><span>trimEnd</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>去除字符串中末尾空格或指定字符</p>
</li>
<li>
<p>添加版本：2.0.0</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 去除字符的字符串</li>
<li>{string} [chars=''] - 去除的字符（默认为空格）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已去除的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">" admin 1234 "</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"-admin-1234-"</span></span>
<span class="line"><span class="token function">trimEnd</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trimEnd</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token string">'-'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trimstart" tabindex="-1"><a class="header-anchor" href="#trimstart"><span>trimStart</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>去除字符串中开头空格或指定字符</p>
</li>
<li>
<p>添加版本：2.0.0</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 去除字符的字符串</li>
<li>{string} [chars=''] - 去除的字符（默认为空格）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已去除的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">" admin 1234 "</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"-admin-1234-"</span></span>
<span class="line"><span class="token function">trimStart</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trimStart</span><span class="token punctuation">(</span>str2<span class="token punctuation">,</span> <span class="token string">'-'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="touppercase" tabindex="-1"><a class="header-anchor" href="#touppercase"><span>toUpperCase</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>字符串转大写</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 要转换的字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已转换的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"footBall"</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"my name is li-lei and i am from china,i love footBall."</span></span>
<span class="line"><span class="token function">toUpperCase</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">toUpperCase</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="touppercasefirst" tabindex="-1"><a class="header-anchor" href="#touppercasefirst"><span>toUpperCaseFirst</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>字符串首字母转大写</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 要转换的字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已转换的英文字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"footBall"</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"my name is li-lei and i am from china,i love footBall."</span></span>
<span class="line"><span class="token function">toUpperCaseFirst</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">toUpperCaseFirst</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tolowercase" tabindex="-1"><a class="header-anchor" href="#tolowercase"><span>toLowerCase</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将整个字符串字符转换为小写形式</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 要转换的字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已转换的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"FootBall"</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"MY NAME IS LI-LEI AND I AM FROM CHINA,I LOVE FootBall."</span></span>
<span class="line"><span class="token function">toLowerCase</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">toLowerCase</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tolowercasefirst" tabindex="-1"><a class="header-anchor" href="#tolowercasefirst"><span>toLowerCaseFirst</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将字符串首个字符转小写</p>
</li>
<li>
<p>添加版本：2.0.0</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 要转换的字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 已转换的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"FootBall"</span></span>
<span class="line"><span class="token keyword">const</span> str2 <span class="token operator">=</span> <span class="token string">"MY NAME IS LI-LEI AND I AM FROM CHINA,I LOVE FootBall."</span></span>
<span class="line"><span class="token function">toLowerCaseFirst</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">toLowerCaseFirst</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="randomcode" tabindex="-1"><a class="header-anchor" href="#randomcode"><span>randomCode</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>生成随机验证码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} [length=4] - 验证码长度</li>
<li>{string} [checkCode] - 需要避免重复的验证码</li>
<li>{string} [charset='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'] 字符集</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 随机验证码</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">randomCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// F1Fo</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="countsubstring" tabindex="-1"><a class="header-anchor" href="#countsubstring"><span>countSubstring</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>查找子字符串在字符串中出现的次数</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 主字符串</li>
<li>{string} key - 要查找的子字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 出现次数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">" My name is Li Lei and I am from China "</span></span>
<span class="line"><span class="token function">countSubstring</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">'i'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="padstart" tabindex="-1"><a class="header-anchor" href="#padstart"><span>padStart</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在字符串开头填充指定字符，使字符串达到指定长度</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 要填充的字符串</li>
<li>{number} [length=0] - 目标长度</li>
<li>{string} [chars] - 填充字符</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 补全后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 09</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="padend" tabindex="-1"><a class="header-anchor" href="#padend"><span>padEnd</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>在字符串结尾填充指定字符，使字符串达到指定长度</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 要填充的字符串</li>
<li>{number} [length=0] - 目标长度</li>
<li>{string} [chars] - 填充字符</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 补全后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">150</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="hasunit" tabindex="-1"><a class="header-anchor" href="#hasunit"><span>hasUnit</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断字符串是否为&quot;数字+单位&quot;格式，支持常见的CSS单位、度量单位等，可通过自定义单位列表扩展</p>
</li>
<li>
<p>添加版本：1.1.0-beta.12</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 待检测的字符串</li>
<li>{Array&lt;string&gt;} [customUnits=[]] - 自定义单位列表</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否包含单位</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">hasUnit</span><span class="token punctuation">(</span><span class="token string">'100px'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">hasUnit</span><span class="token punctuation">(</span><span class="token string">'200'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">hasUnit</span><span class="token punctuation">(</span><span class="token string">'300abc'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'abc'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">hasUnit</span><span class="token punctuation">(</span><span class="token string">'400abc'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">hasUnit</span><span class="token punctuation">(</span><span class="token string">'500m²'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="removeunit" tabindex="-1"><a class="header-anchor" href="#removeunit"><span>removeUnit</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>去除字符串中的单位，仅保留数字部分，支持去除各种常见单位（CSS单位、度量单位等）</p>
</li>
<li>
<p>添加版本：1.1.0-beta.12</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 包含单位的字符串</li>
<li>{Array&lt;string&gt;} [customUnits=[]] - 自定义单位列表</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 去除单位后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">removeUnit</span><span class="token punctuation">(</span><span class="token string">'100px'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">removeUnit</span><span class="token punctuation">(</span><span class="token string">'200'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">removeUnit</span><span class="token punctuation">(</span><span class="token string">'300abc'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">'abc'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">removeUnit</span><span class="token punctuation">(</span><span class="token string">'400abc'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">removeUnit</span><span class="token punctuation">(</span><span class="token string">'500m²'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cameltokebab" tabindex="-1"><a class="header-anchor" href="#cameltokebab"><span>camelToKebab</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>驼峰命名转短横线命名（kebab-case），将驼峰格式字符串转换为短横线分隔格式</p>
</li>
<li>
<p>添加版本：1.1.0-beta.13</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 需要转换的驼峰格式字符串</li>
<li>{string} [separator='-'] - 分隔符，默认为短横线</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 转换后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">camelToKebab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">camelToKebab</span><span class="token punctuation">(</span><span class="token string">'my Name'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">camelToKebab</span><span class="token punctuation">(</span><span class="token string">'myName'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">camelToKebab</span><span class="token punctuation">(</span><span class="token string">'__my__Name__'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">camelToKebab</span><span class="token punctuation">(</span><span class="token string">'__my__Name__'</span><span class="token punctuation">,</span> <span class="token string">'@'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kebabtocamel" tabindex="-1"><a class="header-anchor" href="#kebabtocamel"><span>kebabToCamel</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>短横线命名转驼峰命名（camelCase），将短横线分隔格式字符串转换为驼峰格式</p>
</li>
<li>
<p>添加版本：1.1.0-beta.13</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str - 字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 转换后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">kebabToCamel</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">kebabToCamel</span><span class="token punctuation">(</span><span class="token string">'my Name'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">kebabToCamel</span><span class="token punctuation">(</span><span class="token string">'my-name'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">kebabToCamel</span><span class="token punctuation">(</span><span class="token string">'__my_Name__'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


