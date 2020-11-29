// const Router = require("koa-router");
import Router from 'koa-router';
const router = new Router();

router.get('/v1/book/latest', (ctx, next) => {
  ctx.body = { book: 'book' + new Date() };
});

// module.exports = router;
export { router };
