# Markdown Extension Examples

<!-- 此页面展示 VitePress 内置的 Markdown 扩展功能 -->
This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

<!-- 语法高亮功能，基于 Shiki 提供代码高亮，支持行高亮等特性 -->
VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input** <!-- 输入示例 -->

````md
```js{4}  <!-- {4} 表示高亮第4行 -->
export default {
  data () {
    return {
      msg: 'Highlighted!'  <!-- 这一行会被高亮显示 -->
    }
  }
}
```
````

**Output** <!-- 输出效果 -->

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'  // 这一行会被高亮显示
    }
  }
}
```

## Custom Containers

<!-- 自定义容器 - 提供多种样式的提示框 -->
**Input** <!-- 输入示例 -->

```md
::: info      <!-- 信息提示框 -->
This is an info box.
:::

::: tip       <!-- 提示框 -->
This is a tip.
:::

::: warning   <!-- 警告框 -->
This is a warning.
:::

::: danger    <!-- 危险警告框 -->
This is a dangerous warning.
:::

::: details   <!-- 可折叠详情框 -->
This is a details block.
:::
```

**Output** <!-- 输出效果 -->

::: info
<!-- 信息提示框 - 用于展示一般信息 -->
This is an info box.
:::

::: tip
<!-- 提示框 - 用于展示有用的提示 -->
This is a tip.
:::

::: warning
<!-- 警告框 - 用于展示需要注意的内容 -->
This is a warning.
:::

::: danger
<!-- 危险警告框 - 用于展示重要警告 -->
This is a dangerous warning.
:::

::: details
<!-- 可折叠详情框 - 点击可展开/收起内容 -->
This is a details block.
:::

## More

<!-- 查看完整文档了解更多 Markdown 扩展功能 -->
Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
