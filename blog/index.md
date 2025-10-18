---
# https://vitepress.dev/reference/default-theme-home-page
# 首页布局配置 - 使用 VitePress 默认主题的首页布局
layout: home  # 使用首页布局模板

# 英雄区域配置 - 页面顶部的醒目展示区域
hero:
  name: "aoyeblog"                    # 网站名称，显示为大标题
  text: "A aoye's blog"               # 网站副标题
  tagline: 测试站  # 标语/口号
  actions:                            # 操作按钮区域
    - theme: brand                 # 品牌主题按钮 (主要按钮)
      text: 开始阅读         # 按钮文本
      link: /markdown-examples        # 按钮链接
    - theme: alt                      # 替代主题按钮 (次要按钮)
      text: 这是api调用              # 按钮文本
      link: /api-examples             # 按钮链接

# 特性展示区域 - 展示网站的主要功能或特点
features:
  - title: Feature A                  # 特性标题
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit  # 特性详细描述
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

