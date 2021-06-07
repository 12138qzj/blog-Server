import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },

  theme: {
    "@primary-color": "#1890ff", //主题色
    "@link-color": "#1890ff", // 链接色
    "@success-color": "#52c41a", // 成功色
    "@warning-color": "#faad14", // 警告色
    "@error-color": "#f5222d", // 错误色
    "@font-size-base": "14px", // 主字号
    "@heading-color": "rgba(0, 0, 0, 0.85)",// 标题色
    "@text-color": "rgba(0, 0, 0, 0.65)", // 主文本色
    "@text-color-secondary": "rgba(0, 0, 0, 0.45)", // 次文本色
    "@disabled-color": "rgba(0, 0, 0, 0.25)", // 失效色
    "@border-radius-base": "2px", // 组件/浮层圆角
    "@border-color-base": "#d9d9d9", // 边框色
    "@box-shadow-base": "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)", // 浮层阴影
  },
  
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/login', component: '@/pages/login/index' },
  //   { path: '/home', component: '@/pages/home/index' },
  //   { path: '/myhome', component: '@/pages/myHome/index' },
  //   { path: '/detail/:id', component: '@/pages/detail/index' },
  //   { path: '/edit/:id', component: '@/pages/edit/index' },
  // ],
  routes: [
    { path: '/login', component: 'public' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/home', component: '@/pages/home/index' },
        { path: '/myhome', component: '@/pages/myHome/index' },
        { path: '/detail/:id', component: '@/pages/detail/index' },
        { path: '/edit/:id', component: '@/pages/edit/index' },
        { path: '/*', component: '@/pages/404/index' },
      ],
    }, 
  ],
  fastRefresh: {},
  proxy:{
    '/blogServer': {
      target: 'http://127.0.0.1:7001/',
      // target: 'http://localhost:8068/',
      changeOrigin: true,
    },
  },
});
