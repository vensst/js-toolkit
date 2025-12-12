<template><div><h1 id="其它" tabindex="-1"><a class="header-anchor" href="#其它"><span>其它</span></a></h1>
<h2 id="deepclone" tabindex="-1"><a class="header-anchor" href="#deepclone"><span>deepClone</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>深克隆</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{*} data 要克隆的数据</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 返回克隆后的数据</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"aa"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">deepClone</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// [null, undefined, true, Wed Jun 22 2022 13:53:02 GMT+0800 (中国标准时间), ƒ, 1, 'aa', [], {}]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getrandomcolor" tabindex="-1"><a class="header-anchor" href="#getrandomcolor"><span>getRandomColor</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取十六进制随机颜色</p>
</li>
<li>
<p>返回值：</p>
<p>{string} 颜色值</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> jsToolkit<span class="token punctuation">.</span><span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #2a260b</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="addscript" tabindex="-1"><a class="header-anchor" href="#addscript"><span>addScript</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>动态加载脚本文件</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} src 地址</li>
<li>{Boolean} isAsync 是否异步加载</li>
</ul>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">addScript</span><span class="token punctuation">(</span><span class="token string">"https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="downloadbyurl" tabindex="-1"><a class="header-anchor" href="#downloadbyurl"><span>downloadByUrl</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据url下载</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} url 链接地址</li>
</ul>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">downloadByUrl</span><span class="token punctuation">(</span><span class="token string">"https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="btoa" tabindex="-1"><a class="header-anchor" href="#btoa"><span>btoa</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>简单base64编码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str 需要编码的字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 返回编码后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">btoa</span><span class="token punctuation">(</span><span class="token string">'www.baidu.com?a=1&amp;b=2'</span><span class="token punctuation">)</span> <span class="token comment">// d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI=</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="atob" tabindex="-1"><a class="header-anchor" href="#atob"><span>atob</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>简单base64解码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str 通过btoa编码后的字符串</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 解码后的字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">atob</span><span class="token punctuation">(</span><span class="token string">'d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// www.baidu.com?a=1&amp;b=2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="base64-decode" tabindex="-1"><a class="header-anchor" href="#base64-decode"><span>base64_decode</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>base64 解码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} data 需要解码的数据</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 返回解码后的数据</p>
</li>
</ul>
<h2 id="utf8-decode" tabindex="-1"><a class="header-anchor" href="#utf8-decode"><span>utf8_decode</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>utf8 解码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} data 需要解码的数据</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
</ul>
<h2 id="loadaudio" tabindex="-1"><a class="header-anchor" href="#loadaudio"><span>loadAudio</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>音频加载</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} src 音频地址</li>
<li>{Function} callback 回调函数</li>
</ul>
</li>
</ul>
<h2 id="domtostring" tabindex="-1"><a class="header-anchor" href="#domtostring"><span>domToString</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>DOM转字符串</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} htmlDOM DOM</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
</li>
</ul>
<h2 id="stringtodom" tabindex="-1"><a class="header-anchor" href="#stringtodom"><span>stringToDom</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>字符串转DOM</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} htmlString</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Element}</p>
</li>
</ul>
<h2 id="setcursorposition" tabindex="-1"><a class="header-anchor" href="#setcursorposition"><span>setCursorPosition</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>光标所在位置插入字符，并设置光标位置</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} dom 输入框</li>
<li>{string} val 插入的值</li>
<li>{number} posLen 光标位置处在 插入的值的哪个位置</li>
</ul>
</li>
</ul>
<h2 id="insertatcursor" tabindex="-1"><a class="header-anchor" href="#insertatcursor"><span>insertAtCursor</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>光标所在位置插入字符</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} dom</li>
<li>{string} val</li>
</ul>
</li>
</ul>
<h2 id="escapehtml" tabindex="-1"><a class="header-anchor" href="#escapehtml"><span>escapeHTML</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>转义 HTML</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} str</li>
</ul>
</li>
</ul>
<h2 id="compareversion" tabindex="-1"><a class="header-anchor" href="#compareversion"><span>compareVersion</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>版本对比</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} version1 版本号</li>
<li>{string} version2 版本号</li>
</ul>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>返回值：</p>
<p>{number} 1: version1 &gt; version2, -1: version1 &lt; version2, 0: version1 = version2</p>
</li>
</ul>
</div></template>


