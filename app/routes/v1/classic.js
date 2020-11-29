// const Router = require("koa-router");
import Router from 'koa-router';
// import { ParameterException } from '../../../core/http-exception.js';
const router = new Router();

router.get('/v1/classic/latest', (ctx, next) => {
  ctx.body = { classic: 'test' };
});

router.post('/v1/:id/classic/latest', (ctx, next) => {
  const params = ctx.params;
  const query = ctx.request.query;
  const header = ctx.request.header;
  const body = ctx.request.body;
  if (!query.c) {
    const error = new global.errors.ParameterException('错误原因:缺少参数', 10001);
    throw error;
  }
  ctx.body = { params: params };
});

// module.exports = router;
export { router };
