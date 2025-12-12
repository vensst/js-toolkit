<template><div><h1 id="date" tabindex="-1"><a class="header-anchor" href="#date"><span>Date</span></a></h1>
<h2 id="formatdate" tabindex="-1"><a class="header-anchor" href="#formatdate"><span>formatDate</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>格式化日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 时间戳或日期对象，支持字符串、10位或13位时间戳</li>
<li>{string} [valueFormat=YYYY-MM-DD HH:mm:ss] - 格式字符串，支持：
<ul>
<li>YYYY: 四位年份</li>
<li>MM: 两位月份 (01-12)</li>
<li>M: 月份 (1-12)</li>
<li>DD: 两位日期 (01-31)</li>
<li>D: 日期 (1-31)</li>
<li>HH: 两位24小时制小时 (00-23)</li>
<li>H: 24小时制小时 (0-23)</li>
<li>hh: 两位12小时制小时 (01-12)</li>
<li>h: 12小时制小时 (1-12)</li>
<li>mm: 两位分钟 (00-59)</li>
<li>m: 分钟 (0-59)</li>
<li>ss: 两位秒 (00-59)</li>
<li>s: 秒 (0-59)</li>
<li>WW: 星期 (星期日-星期六)</li>
</ul>
</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 格式化后的日期字符串</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'YYYY/MM/DD h:mm:ss WW'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'WW'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">formatDate</span><span class="token punctuation">(</span><span class="token string">'2020-9-9'</span><span class="token punctuation">,</span> <span class="token string">'YYYY/MM/DD'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getdaterange" tabindex="-1"><a class="header-anchor" href="#getdaterange"><span>getDateRange</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据指定日期获取指定范围的日期集合</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳</li>
<li>{number} [len=2] - 范围长度（天数）</li>
<li>{number} [dir=-1] - 方向：-1 取基准日期之前的 [len] 天，0 取基准日期前后各 [len] 天，1 取基准日期之后的 [len] 天</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] - 日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string[]} 日期集合，按时间顺序排列</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getDateRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDateRange</span><span class="token punctuation">(</span><span class="token string">'2023-1-1'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'YYYY/MM/DD'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDateRange</span><span class="token punctuation">(</span><span class="token string">'2023-1-1'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getdaysinmonth" tabindex="-1"><a class="header-anchor" href="#getdaysinmonth"><span>getDaysInMonth</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取指定日期所在月份的总天数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 指定月份的总天数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getDaysInMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDaysInMonth</span><span class="token punctuation">(</span><span class="token string">'2023-6'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getdaysinyear" tabindex="-1"><a class="header-anchor" href="#getdaysinyear"><span>getDaysInYear</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取指定年份的总天数</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|number|string)} [year=new Date()] - 年份，可以是：
<ul>
<li>Date对象：将使用该日期对象的年份</li>
<li>数字：直接作为年份使用</li>
<li>字符串：将被解析为年份</li>
</ul>
</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{number} 指定年份的总天数</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getDaysInYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDaysInYear</span><span class="token punctuation">(</span><span class="token number">2020</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getmonthsrange" tabindex="-1"><a class="header-anchor" href="#getmonthsrange"><span>getMonthsRange</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据指定日期获取指定范围的日期集合</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳</li>
<li>{number} [length=2] - 要获取的月份数量</li>
<li>{number} [dir=-1] - 方向：-1 获取之前的月份(默认)，0 获取前后月份，1 获取之后的月份</li>
<li>{string} [valueFormat='YYYY-MM'] - 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string[]} 月份集合，按时间顺序排列</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getMonthsRange</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getMonthsRange</span><span class="token punctuation">(</span><span class="token string">'2023-1-1'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'YYYY/MM'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getMonthsRange</span><span class="token punctuation">(</span><span class="token string">'2023-1'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getstartmonthofquarter" tabindex="-1"><a class="header-anchor" href="#getstartmonthofquarter"><span>getStartMonthOfQuarter</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取指定日期所在季度的开始月份,季度划分：1-3月为Q1，4-6月为Q2，7-9月为Q3，10-12月为Q4</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{string} [valueFormat='YYYY-MM'] - 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 季度开始月份</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getStartMonthOfQuarter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartMonthOfQuarter</span><span class="token punctuation">(</span><span class="token string">'2022-2'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getdayofyear" tabindex="-1"><a class="header-anchor" href="#getdayofyear"><span>getDayOfYear</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取指定日期是当年中的第几天</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>日期在年中的天数索引</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getDayOfYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDayOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-2-1'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// 32</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getweekofyear" tabindex="-1"><a class="header-anchor" href="#getweekofyear"><span>getWeekOfYear</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取指定日期在年中的周数（自然周）</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>日期在年中的周数（1-53）</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getWeekOfYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getWeekOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-2-1'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getstartofweek" tabindex="-1"><a class="header-anchor" href="#getstartofweek"><span>getStartOfWeek</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获取本周、上周、下周的开始日期（周一为一周开始）</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上周 0:本周(默认)  1:下周</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 周开始日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getStartOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfWeek</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfWeek</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfWeek</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getendofweek" tabindex="-1"><a class="header-anchor" href="#getendofweek"><span>getEndOfWeek</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获得本周、上周、下周的结束日期（周日为一周结束）</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上周 0:本周(默认)  1:下周</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 周结束日期（周日）</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getEndOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfWeek</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfWeek</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfWeek</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getstartofmonth" tabindex="-1"><a class="header-anchor" href="#getstartofmonth"><span>getStartOfMonth</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获得本月、上月、下月开始日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上月 0:本月(默认)  1:下月</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 月开始日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getStartOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getendofmonth" tabindex="-1"><a class="header-anchor" href="#getendofmonth"><span>getEndOfMonth</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获得本月、上月、下月结束日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上月 0:本月(默认)  1:下月</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getEndOfMonth</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfMonth</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getstartofquarter" tabindex="-1"><a class="header-anchor" href="#getstartofquarter"><span>getStartOfQuarter</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获取本季度、上季度、下季度的开始日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上季度 0:本季度(默认)  1:下季度</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 季度开始日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getStartOfQuarter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfQuarter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfQuarter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfQuarter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getendofquarter" tabindex="-1"><a class="header-anchor" href="#getendofquarter"><span>getEndOfQuarter</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获取本季度、上季度、下季度的结束日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上季度 0:本季度(默认)  1:下季度</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 季度结束日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getEndOfQuarter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfQuarter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfQuarter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfQuarter</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getstartofyear" tabindex="-1"><a class="header-anchor" href="#getstartofyear"><span>getStartOfYear</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获取本年、上年、下年的开始日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上年 0:本年(默认)  1:下年</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 年开始日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getStartOfYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getStartOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getendofyear" tabindex="-1"><a class="header-anchor" href="#getendofyear"><span>getEndOfYear</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据日期获取本年、上年、下年的结束日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 日期对象、日期字符串或时间戳</li>
<li>{number} [type=0] 类型 -1:上年 0:本年(默认)  1:下年</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 年结束日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getEndOfYear</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getEndOfYear</span><span class="token punctuation">(</span><span class="token string">'2022-01-01'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getdateoffset" tabindex="-1"><a class="header-anchor" href="#getdateoffset"><span>getDateOffset</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取指定日期的前几天日期，通过从指定日期中减去指定天数来计算目标日期</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [date=new Date()] - 基准日期，可以是日期对象、日期字符串或时间戳</li>
<li>{number} [len=1] - 要减去的天数，正数表示过去的日期，负数表示未来的日期</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] - 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 日期</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getDateOffset</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDateOffset</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDateOffset</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDateOffset</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token string">"YYYY年MM月DD日HH时mm分ss秒"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="getdatesbetween" tabindex="-1"><a class="header-anchor" href="#getdatesbetween"><span>getDatesBetween</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>获取两个日期之间的所有日期（包含起始和结束日期，返回的日期数组按时间顺序排列，从早到晚</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|string|number)} [startDate=new Date()] - 开始日期，可以是日期对象、日期字符串或时间戳</li>
<li>{(Date|string|number)} [endDate=new Date()] - 结束日期，可以是日期对象、日期字符串或时间戳</li>
<li>{string} [valueFormat=&quot;YYYY-MM-DD&quot;] - 返回的日期格式</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string[]} 日期数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getDatesBetween</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getDatesBetween</span><span class="token punctuation">(</span><span class="token string">'2022-1-1'</span><span class="token punctuation">,</span> <span class="token string">'2022-1-5'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timeago" tabindex="-1"><a class="header-anchor" href="#timeago"><span>timeAgo</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>以前时间距离当前时间的时间差</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{(Date|number)} date - 时间对象或时间戳</li>
<li>{Object} [opt] - 选项配置
<ul>
<li>{string} [opt.year='年前'] - 天的单位</li>
<li>{string} [opt.month='月前'] - 小时的单位</li>
<li>{string} [opt.week='周前'] - 分钟的单位</li>
<li>{string} [opt.day='天前'] - 小时的单位</li>
<li>{string} [opt.hour='小时前'] - 天的单位</li>
<li>{string} [opt.minute='分钟前'] - 秒的单位</li>
<li>{string} [opt.second='秒前'] - 秒的单位</li>
<li>{string} [opt.just='刚刚'] - 刚刚</li>
</ul>
</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} 时间差</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">timeAgo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">timeAgo</span><span class="token punctuation">(</span><span class="token string">'2024-12-20 15:22:20'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gettimeslotbystep" tabindex="-1"><a class="header-anchor" href="#gettimeslotbystep"><span>getTimeSlotByStep</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>根据步长获取时间间隔</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} [step=30] - 间隔 单位：分钟</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string[]} 时间间隔数组</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">getTimeSlotByStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token function">getTimeSlotByStep</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stohms" tabindex="-1"><a class="header-anchor" href="#stohms"><span>sToHms</span></a></h2>
<ul>
<li>
<p>说明：</p>
<p>秒转时分秒格式</p>
</li>
<li>
<p>参数：</p>
<ul>
<li>{number} [s=0] - 秒数</li>
<li>{Array&lt;string&gt;} [valueFormat=[&quot;时&quot;, &quot;分&quot;, &quot;秒&quot;]] - 格式，可以自定义例如：[&quot;h&quot;, &quot;m&quot;, &quot;s&quot;]</li>
</ul>
</li>
<li>
<p>返回值：</p>
<p>{string} x时x分x秒</p>
</li>
<li>
<p>示例：</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre v-pre><code class="language-javascript"><span class="line"><span class="token function">sToHms</span><span class="token punctuation">(</span><span class="token number">7200</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


