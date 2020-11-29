import compose from 'koa-compose';
import glob from 'glob';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const registerRouter = () => {
  let routers = [];
  glob
    .sync(resolve(__dirname, './', '**/*.js'))
    .filter((value) => value.indexOf('index.js') === -1)
    .map(async (routerPath) => {
      console.log(routerPath);
      const { router } = await import('file://' + routerPath);
      routers.push(router.routes());
      // routers.push(router.allowedMethods());
    });
  return compose(routers);
};

export default registerRouter;

// commonjs
// const compose = require("koa-compose");
// const glob = require("glob");
// const { resolve } = require("path");

// const registerRouter = () => {
//   let routers = [];
//   glob
//     .sync(resolve(__dirname, "./", "**/*.js"))
//     .filter((value) => value.indexOf("index.js") === -1)
//     .map((router) => {
//       routers.push(require(router).routes());
//       routers.push(require(router).allowedMethods());
//     });
//   return compose(routers);
// };
// module.exports = registerRouter;
