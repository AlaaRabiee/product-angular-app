
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/product-angular-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/product-angular-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 515, hash: '56c17520c9b3d6d5b618a4dff5d9171b66fc69ddc18fa2ac4530dfba58fbed54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1028, hash: 'dd0dbd1bc810218aab295e2fa099cab73b10dc90bd8f2e61d2eb1694a650bb31', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4943, hash: '2cffe0522492d05e054a2555f52e0fbc9bce4db64b2c10130900e9a9019ca318', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
