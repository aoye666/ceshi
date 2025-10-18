import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
// VitePress 配置文件 - 使用 TypeScript 模块语法 (.mts)
export default defineConfig({
  // 网站基本信息配置
  title: "aoyeblog",                    // 网站标题，显示在浏览器标签页和导航栏
  description: "A aoye's blog",         // 网站描述，用于 SEO 和元数据
  
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // 导航栏配置
    nav: [
      { text: 'Home', link: '/' },                    // 首页导航项
      { text: 'Examples', link: '/markdown-examples' } // 示例页面导航项
    ],

    // 侧边栏配置
    sidebar: [
      {
        text: 'Examples',                            // 侧边栏分组标题
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },     // Markdown 示例页面
          { text: 'Runtime API Examples', link: '/api-examples' }        // 运行时 API 示例页面
        ]
      }
    ],

    // 社交媒体链接配置
    socialLinks: [
      {
        icon: 'github',                              // 图标类型 (github, twitter, youtube 等)
        link: 'https://github.com/vuejs/vitepress'   // 链接地址
      }
    ]
  }
})
