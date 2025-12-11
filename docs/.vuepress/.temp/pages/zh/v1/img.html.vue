<template><div><h1 id="图片" tabindex="-1"><a class="header-anchor" href="#图片"><span>图片</span></a></h1>
<h2 id="scaleimg" tabindex="-1"><a class="header-anchor" href="#scaleimg"><span>scaleImg</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取图片缩放比例和缩放后宽高</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} imgWidth  图片宽度</li>
<li>{number} imgHeight 图片高度</li>
<li>{number} containerWidth 容器宽度</li>
<li>{number} containerHeight 容器高度</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object} 缩放后图片宽、高、缩放比例 {width: number, scale: number, height: number}</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line">jsToolkit<span class="token punctuation">.</span><span class="token function">scaleImg</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// {height: 360, scale: 1.2, width: 600}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="imgloadall" tabindex="-1"><a class="header-anchor" href="#imgloadall"><span>imgLoadAll</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>图片加载</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string[]} arr 图片地址数组</li>
<li>{Function} callback  回调函数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Promise} Promise对象</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">'//fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string">'//fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line">  jsToolkit<span class="token punctuation">.</span><span class="token function">imgLoadAll</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"--imgLoadAll--"</span><span class="token punctuation">,</span> <span class="token string">"加载完成"</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arraybuffertobase64" tabindex="-1"><a class="header-anchor" href="#arraybuffertobase64"><span>arrayBufferToBase64</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>图片arrayBuffer转base64</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Uint8Array} buffer 格式为 responseType:arraybuffer 的返回值</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Object} 返回图片的base64和base64Url</p>
</li>
</ul>
</div></template>


