// const Router = require("koa-router");
import Joi from 'joi';
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

  // if (!query.c) {
  //   const error = new global.errors.ParameterException('错误原因:缺少参数', 10001);
  //   throw error;
  // }
  // ctx.body = { params: params };
  const schema = Joi.object({
    username: Joi.string().alphanum().min(3).max(10).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  });
  // .with('username', 'birth_1year')
  // .xor('password', 'access_token')
  // .with('password', 'repeat_password');

  const { error, value } = schema.validate(body);
  if (error) {
    const { details } = error;
    const err = new global.errors.ParameterException(details[0].message, 10001);
    throw err;
  }

  ctx.body = {
    username: value.username,
  };
  // -> { value: { username: 'abc', birth_year: 1994 } }
  // -> { value: {}, error: '"username" is required' }
  // Also -
});

// module.exports = router;
export { router };
