<template><div><h1 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h1>
<h2 id="getblobtype" tabindex="-1"><a class="header-anchor" href="#getblobtype"><span>getBlobType</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据文件类型查询对应 blob type类型</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} name 文件类型（例如：&quot;a.png&quot;，&quot;b.jpg&quot;，或者 &quot;.xls&quot;）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{(string|null)} 对应 blob type类型</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">getBlobType</span><span class="token punctuation">(</span><span class="token string">".image/png"</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// "text/xml"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="downloadfile" tabindex="-1"><a class="header-anchor" href="#downloadfile"><span>downloadFile</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据二进制数据流和文件名称（带类型名称）下载文件</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Blob} blobFile 二进制数据流</li>
<li>{string} fileName 文件名称</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{boolean} 是否下载成功</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token string">"...."</span><span class="token punctuation">,</span> <span class="token string">"a.png"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


