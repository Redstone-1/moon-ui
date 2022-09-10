import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'moon-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  alias: {
    src: '/src',
  },
  menus: {
    // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
    '/components': [
      {
        title: '基础组件',
        path: '/components/baseComponents',
        children: [
          // 菜单子项（可选）
          'components/Button/index.md',
        ],
      },
      {
        title: '布局组件',
        path: '/components/layoutComponents',
        children: [
          // 菜单子项（可选）
          'components/Divider/index.md',
          'components/Space/index.md',
        ],
      },
      {
        title: '表单组件',
        path: '/components/formComponents',
        children: [
          // 菜单子项（可选）
          'components/Radio/index.md',
          'components/Checkbox/index.md',
        ],
      },
      {
        title: '数据组件',
        path: '/components/dataComponents',
        children: [
          // 菜单子项（可选）
        ],
      },
      {
        title: '反馈组件',
        path: '/components/feedbackComponents',
        children: [
          // 菜单子项（可选）
        ],
      },
    ],
  },
});
