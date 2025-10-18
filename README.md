# VitePress 项目说明文档

## 项目概述

这是一个基于 VitePress 的静态博客网站项目，使用 VitePress 2.0.0-alpha.12 版本构建。

## 项目结构

```
vite/
├── package.json              # 项目依赖和脚本配置
├── blog/                     # 博客内容目录
│   ├── index.md             # 首页
│   ├── markdown-examples.md # Markdown 扩展功能示例
│   ├── api-examples.md      # 运行时 API 示例
│   └── .vitepress/          # VitePress 配置目录
│       └── config.mts       # 主配置文件
└── README.md                # 项目说明文档
```

## 文件说明

### 1. package.json
- **作用**: 定义项目依赖和 npm 脚本
- **配置方法**:
  - `devDependencies`: 开发依赖，包含 VitePress
  - `scripts`: 项目运行脚本
    - `docs:dev`: 启动开发服务器
    - `docs:build`: 构建生产版本
    - `docs:preview`: 预览构建结果

### 2. blog/.vitepress/config.mts
- **作用**: VitePress 主配置文件
- **配置方法**:
  - `title`: 网站标题
  - `description`: 网站描述
  - `themeConfig.nav`: 导航栏配置
  - `themeConfig.sidebar`: 侧边栏配置
  - `themeConfig.socialLinks`: 社交媒体链接

### 3. blog/index.md
- **作用**: 网站首页
- **配置方法**:
  - `layout: home`: 使用首页布局
  - `hero`: 英雄区域配置（大标题区域）
  - `features`: 特性展示区域

### 4. blog/markdown-examples.md
- **作用**: 展示 VitePress 的 Markdown 扩展功能
- **包含功能**:
  - 语法高亮（支持行高亮）
  - 自定义容器（info、tip、warning、danger、details）

### 5. blog/api-examples.md
- **作用**: 展示 VitePress 运行时 API 的使用
- **主要 API**: `useData()` - 获取站点、主题和页面数据

## 运行项目

### 开发模式
```bash
npm run docs:dev
```

### 构建生产版本
```bash
npm run docs:build
```

### 预览构建结果
```bash
npm run docs:preview
```

## 自定义配置

### 添加新页面
1. 在 `blog/` 目录下创建新的 `.md` 文件
2. 在 `config.mts` 的 `nav` 和 `sidebar` 中添加对应链接

### 修改主题
在 `config.mts` 的 `themeConfig` 中配置：
- 修改导航栏
- 调整侧边栏结构
- 添加社交媒体链接

### 使用自定义组件
在 `.vitepress/theme/` 目录下创建自定义 Vue 组件

## 注意事项

1. 配置文件使用 `.mts` 扩展名，表示 TypeScript 模块
2. Markdown 文件支持 Vue 组件和运行时 API
3. 所有页面都支持 Frontmatter 配置
4. 项目基于 Vite，支持热重载和快速构建

## 相关链接

- [VitePress 官方文档](https://vitepress.dev/)
- [VitePress GitHub](https://github.com/vuejs/vitepress)