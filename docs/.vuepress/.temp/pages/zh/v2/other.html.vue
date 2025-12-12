<template><div><h1 id="other" tabindex="-1"><a class="header-anchor" href="#other"><span>Other</span></a></h1>
<h2 id="deepclone" tabindex="-1"><a class="header-anchor" href="#deepclone"><span>deepClone</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>深克隆</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{*} data - 要克隆的数据</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{*} 克隆后的数据副本</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">"aa"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">deepClone</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
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
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token function">getRandomColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// #2a260b</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="addscript" tabindex="-1"><a class="header-anchor" href="#addscript"><span>addScript</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>动态加载脚本文件</p>
</li>
<li>
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} src - 脚本地址</li>
<li>{boolean} [isAsync=true] - 是否异步加载</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Promise&lt;void&gt;} 脚本加载完成的 Promise</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">addScript</span><span class="token punctuation">(</span><span class="token string">"https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"</span><span class="token punctuation">)</span></span>
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
<li>{string} str - 需要编码的字符串</li>
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
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">btoa</span><span class="token punctuation">(</span><span class="token string">'www.baidu.com?a=1&amp;b=2'</span><span class="token punctuation">)</span> <span class="token comment">// d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI=</span></span>
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
<li>{string} str - 通过btoa编码后的字符串</li>
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
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">atob</span><span class="token punctuation">(</span><span class="token string">'d3d3LmJhaWR1LmNvbSUzRmElM0QxJTI2YiUzRDI'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// www.baidu.com?a=1&amp;b=2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="base64-encode" tabindex="-1"><a class="header-anchor" href="#base64-encode"><span>base64_encode</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>Base64 编码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} data - 需要编码的数据</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 编码后的字符串</p>
</li>
</ul>
<h2 id="base64-decode" tabindex="-1"><a class="header-anchor" href="#base64-decode"><span>base64_decode</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>base64 解码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} data - 需要解码的数据</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 解码后的字符串</p>
</li>
</ul>
<h2 id="utf8-encode" tabindex="-1"><a class="header-anchor" href="#utf8-encode"><span>utf8_encode</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>utf8 编码码</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} data - 需要编码的数据</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string}</p>
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
<li>{string} data - 需要解码的数据</li>
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
<li>{string} src - 音频地址</li>
<li>{Function} [callback] - 音频元数据加载完成后的回调函数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{HTMLAudioElement} Audio 元素实例</p>
</li>
</ul>
<h2 id="domtostring" tabindex="-1"><a class="header-anchor" href="#domtostring"><span>domToString</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>将 DOM 元素转换为 HTML 字符串</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{Element} htmlDOM - DOM 元素</li>
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
<p>将 HTML 字符串转换为 DOM 元素</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} htmlString - HTML 字符串</li>
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
<p>在光标位置插入字符</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{HTMLTextAreaElement|HTMLInputElement} dom - 输入框元素</li>
<li>{string} val - 要插入的值</li>
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
<li>{HTMLTextAreaElement|HTMLInputElement} dom - 输入框元素</li>
<li>{string} val - 要插入的值</li>
</ul>
</li>
</ul>
<h2 id="escapehtml" tabindex="-1"><a class="header-anchor" href="#escapehtml"><span>escapeHTML</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>转义HTML特殊字符，防止XSS攻击 将 &lt;、&gt; 和 &amp; 转换为对应的HTML实体</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} [str=''] - HTML字符串</li>
</ul>
</li>
</ul>
<h2 id="unescapehtml" tabindex="-1"><a class="header-anchor" href="#unescapehtml"><span>unescapeHTML</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>解转义HTML特殊字符，将HTML实体转换回原始字符,将 &amp;, &lt;, &gt;, &quot;, 9 转换回对应的原始字符</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} [str=''] - 需要解转义的HTML字符串</li>
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
<p>添加版本：1.1.0-beta.11</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} version1 - 版本号</li>
<li>{string} version2 - 版本号</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 1: version1 &gt; version2, -1: version1 &lt; version2, 0: version1 = version2</p>
</li>
</ul>
<h2 id="copytoclipboard" tabindex="-1"><a class="header-anchor" href="#copytoclipboard"><span>copyToClipboard</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>复制文本到剪贴板</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} text - 要复制的文本</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Promise&lt;boolean&gt;} 复制操作是否成功</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"> <span class="token function">copyToClipboard</span><span class="token punctuation">(</span><span class="token string">"复制的文本"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="wait" tabindex="-1"><a class="header-anchor" href="#wait"><span>wait</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>等待指定时间</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} [delay=2000] - 等待时间（毫秒）</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Promise&lt;void&gt;} Promise，在指定时间后 resolve</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'等待结束'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="resizeobserver" tabindex="-1"><a class="header-anchor" href="#resizeobserver"><span>resizeObserver</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>监听一个或多个元素的尺寸变化</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{HTMLElement|HTMLElement[]|NodeList} elements - 需要监听的单个元素或元素数组</li>
<li>{Function} callback - 尺寸变化时调用的回调函数，接收 ResizeObserverEntry 数组作为参数</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{Function} 停止监听的函数，可选择性地停止部分元素的监听</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token comment">// 监听元素</span></span>
<span class="line"><span class="token keyword">const</span> stopObserving <span class="token operator">=</span> <span class="token function">resizeObserver</span><span class="token punctuation">(</span>divEls<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'元素大小变化1'</span><span class="token punctuation">,</span> entries<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 停止监听</span></span>
<span class="line"><span class="token function">stopObserving</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="websocketutil" tabindex="-1"><a class="header-anchor" href="#websocketutil"><span>WebSocketUtil</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>WebSocketUtil 类用于封装 WebSocket 连接逻辑，包括自动重连、心跳机制等功能。</p>
</li>
<li>
<p>添加版本：2.0.0</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{string} url - WebSocket 服务器地址</li>
<li>{Object} options - 配置选项</li>
<li>{boolean} [options.isReconnect=true] - 是否自动重连</li>
<li>{number} [options.reconnectInterval=3000] - 重连间隔时间（毫秒）</li>
<li>{number} [options.maxReconnectAttempts=5] - 最大重连次数,-1表示无限重连</li>
<li>{boolean} [options.isHeartbeat=false] - 是否启用心跳机制</li>
<li>{number} [options.heartbeatInterval=30000] - 心跳间隔时间（毫秒）</li>
<li>{string} [options.pingMessage=&quot;{ type: 'ping' }&quot;] - 心跳消息</li>
</ul>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"WebSocketDemo1"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">wsUrl</span><span class="token operator">:</span> <span class="token string">"ws://localhost:5003"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">websocket</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//方法</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">onConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 设置消息处理函数</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span><span class="token function">setMessageHandler</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>onMessage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"onMessage -->"</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">onSend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token operator">?.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token operator">?.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">getSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>websocket<span class="token operator">?.</span>socket<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>websocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocketUtil</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>wsUrl<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">isHeartbeat</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


