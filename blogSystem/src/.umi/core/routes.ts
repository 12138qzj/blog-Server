// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/shaoyi/Desktop/毕业设计/Design/blog-server/blogSystem/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "exact": true
  },
  {
    "path": "/home",
    "component": require('@/pages/home/index').default,
    "exact": true
  },
  {
    "path": "/myhome",
    "component": require('@/pages/myHome/index').default,
    "exact": true
  },
  {
    "path": "/detail/:id",
    "component": require('@/pages/detail/index').default,
    "exact": true
  },
  {
    "path": "/edit/:id",
    "component": require('@/pages/edit/index').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
