// const Koa = require("koa");
// const requireDirectory = require("require-directory");
// const InitManager = require("./core/init");

import Koa from 'koa';
import parser from 'koa-bodyparser';
import InitManager from './core/init.js';
import catchError from './middlewares/exception.js';

const app = new Koa();
app.use(catchError); //全局异常处理 中间件 AOP 面向切面编程
app.use(parser()); //参数处理

InitManager.initCore(app);
// app.use(registerRouter());
// app.use(async (ctx, next) => {
//   console.log(ctx.path);
//   ctx.body = { ctx };
// });

app.listen(3000, () => console.log('服务已运行在 3000 端口！'));
