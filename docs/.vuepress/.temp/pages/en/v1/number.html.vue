<template><div><h1 id="数字" tabindex="-1"><a class="header-anchor" href="#数字"><span>数字</span></a></h1>
<h2 id="random" tabindex="-1"><a class="header-anchor" href="#random"><span>random</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据区间获取随机数</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(number|string)} [min=0] 最小值（包含）</li>
<li>{(number|string)} [max=1] 最大值（不包含）</li>
<li>{boolean} [floating=true] 是否返回浮点数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 随机数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 79</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inrange" tabindex="-1"><a class="header-anchor" href="#inrange"><span>inRange</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>判断数字是否在区间内</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} num 数字</li>
<li>{number} min 最小值（不包含）</li>
<li>{number} max 最大值（不包含）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否在区间内</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">inRange</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="tochinese" tabindex="-1"><a class="header-anchor" href="#tochinese"><span>toChinese</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将数字转成中文大写</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(number|string)} num 数字</li>
</ul>
</li>
<li>
<p>返回值：</p>
<ul>
<li>{string} 中文大写</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">toChinese</span><span class="token punctuation">(</span><span class="token number">3141592654</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 三十一億四仟一百五十九萬二仟六百五十四 </span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">toChinese</span><span class="token punctuation">(</span><span class="token number">31415926.54</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 三仟一百四十一萬五仟九百二十六点五四 </span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">toChinese</span><span class="token punctuation">(</span><span class="token string">'abc'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tocny" tabindex="-1"><a class="header-anchor" href="#tocny"><span>toCny</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将数字金额转为中文大写金额</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(number|string)} num 数字金额</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 中文大写金额</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">toCny</span><span class="token punctuation">(</span><span class="token number">3141592654</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 叁拾壹亿肆仟壹佰伍拾玖万贰仟陆佰伍拾肆元整</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">toCny</span><span class="token punctuation">(</span><span class="token string">'31415926.54321'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 叁仟壹佰肆拾壹万伍仟玖佰贰拾陆元伍角肆分</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="thousandseparator" tabindex="-1"><a class="header-anchor" href="#thousandseparator"><span>thousandSeparator</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将数字千分位分割</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(number|string)} num 数字</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 千分位分割后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">thousandSeparator</span><span class="token punctuation">(</span><span class="token number">3141592654</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 3,141,592,654</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">thousandSeparator</span><span class="token punctuation">(</span><span class="token number">31415926.12233655</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 31,415,926.12233655</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="numberformatter" tabindex="-1"><a class="header-anchor" href="#numberformatter"><span>numberFormatter</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>数字格式化</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} num 数字</li>
<li>{number} [digits] 保留小数位数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 格式化后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">numberFormatter</span><span class="token punctuation">(</span><span class="token number">3141592654</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 3G</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


