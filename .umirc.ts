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
          'components/Button/index.md',
          'components/Icon/index.md',
          'components/Link/index.md',
        ],
      },
      {
        title: '布局组件',
        path: '/components/layoutComponents',
        children: ['components/Divider/index.md', 'components/Space/index.md'],
      },
      {
        title: '表单组件',
        path: '/components/formComponents',
        children: [
          'components/Radio/index.md',
          'components/Checkbox/index.md',
          'components/Switch/index.md',
        ],
      },
      {
        title: '数据组件',
        path: '/components/dataComponents',
        children: ['/components/Empty/index.md'],
      },
      {
        title: '反馈组件',
        path: '/components/feedbackComponents',
        children: [
          'components/Message/index.md',
          'components/Spin/index.md',
          'components/Result/index.md',
        ],
      },
      {
        title: '导航组件',
        path: '/components/navigateComponents',
        children: [],
      },
    ],
  },
});
