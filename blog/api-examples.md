---
outline: deep  <!-- 自动生成深度大纲，显示多级标题 -->
---

# Runtime API Examples

<!-- 此页面展示 VitePress 运行时 API 的使用方法 -->
This page demonstrates usage of some of the runtime APIs provided by VitePress.

<!-- useData() API 是主要的运行时 API，可以访问站点、主题和页面数据 -->
The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'  <!-- 导入 useData API -->

// 解构获取各种数据
const { theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>  <!-- 显示主题配置数据 -->

### Page Data
<pre>{{ page }}</pre>    <!-- 显示页面数据 -->

### Page Frontmatter
<pre>{{ frontmatter }}</pre>  <!-- 显示页面前置元数据 -->
```

<!-- 实际的 Vue 组件代码，会在页面中执行 -->
<script setup>
import { useData } from 'vitepress'

// 使用 useData() 获取运行时数据
const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<!-- 显示当前主题配置的详细信息 -->
<pre>{{ theme }}</pre>

### Page Data
<!-- 显示当前页面数据的详细信息 -->
<pre>{{ page }}</pre>

### Page Frontmatter
<!-- 显示当前页面前置元数据的详细信息 -->
<pre>{{ frontmatter }}</pre>

## More

<!-- 查看完整文档了解更多运行时 API -->
Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
