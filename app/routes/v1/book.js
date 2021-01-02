// const Router = require("koa-router");
import Router from 'koa-router';
const router = new Router();

router.get('/v1/book/latest', (ctx, next) => {
  console.log(ctx.request);
  ctx.body = { book: 'book' + new Date() };
});

// module.exports = router;
export { router };
