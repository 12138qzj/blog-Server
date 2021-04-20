// @ts-nocheck
import { Plugin } from 'E:/bs_blog/blogSystem/node_modules/umi/node_modules/@umijs/runtime';

const plugin = new Plugin({
  validKeys: ['modifyClientRenderOpts','patchRoutes','rootContainer','render','onRouteChange','dva','getInitialState','initialStateConfig','request',],
});

export { plugin };
