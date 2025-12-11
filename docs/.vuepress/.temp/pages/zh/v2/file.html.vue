<template><div><h1 id="file" tabindex="-1"><a class="header-anchor" href="#file"><span>File</span></a></h1>
<h2 id="getmimetype" tabindex="-1"><a class="header-anchor" href="#getmimetype"><span>getMimeType</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据文件名的扩展名获取对应的 MIME 类型</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} fileName - 文件名（例如：&quot;a.png&quot;，&quot;b.jpg&quot;）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string|undefined} 对应的 MIME 类型，如果未找到则返回 undefined</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getMimeType</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getMimeType</span><span class="token punctuation">(</span><span class="token string">'a.png'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getMimeType</span><span class="token punctuation">(</span><span class="token string">'a.abc'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download"><span>download</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据传入的数据类型自动选择合适的下载方式（支持多种数据类型：URL、Blob、ArrayBuffer、Uint8Array、字符串等）</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string|Blob|ArrayBuffer|Uint8Array|any} data - 要下载的数据
<ul>
<li>string: 如果是 URL 则强制下载，否则作为文本内容下载</li>
<li>Blob: 直接下载 Blob 对象</li>
<li>ArrayBuffer/Uint8Array: 转换为 Blob 后下载</li>
<li>其他类型: 转换为 JSON 字符串后下载</li>
</ul>
</li>
<li>{string} fileName - 下载文件的名称（包含扩展名，用于确定 MIME 类型）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Promise&lt;boolean&gt;} 是否成功触发下载流程</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">const</span> blob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"binary data"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"application/octet-stream"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">download</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">"Hello World"</span><span class="token punctuation">,</span> <span class="token string">"hello.txt"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">download</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"data.json"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">'blob:https://www.dapengjiaoyu.cn/9d4e9b7d-f7bb-445c-9881-a35a7cf2dd5e'</span><span class="token punctuation">,</span> <span class="token string">'a.png'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">'https://m.tuniucdn.com/fb2/t1/G5/M00/44/52/Cii-s1soezyIF2UxABn76u-yKl8AAIwBgB34jAAGfwC3020871'</span><span class="token punctuation">,</span> <span class="token string">'1.png'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">download</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">"data.bin"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">download</span><span class="token punctuation">(</span><span class="token string">"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="forcedownloadbyurl" tabindex="-1"><a class="header-anchor" href="#forcedownloadbyurl"><span>forceDownloadByUrl</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>强制下载 URL（fetch + Blob），通过 fetch 请求获取文件内容，然后创建 Blob 对象进行下载</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} url - 要下载的文件 URL</li>
<li>{string} [fileName] - 下载文件的名称（可选）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Promise&lt;boolean&gt;} 下载是否成功</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">forceDownloadByUrl</span><span class="token punctuation">(</span><span class="token string">"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


