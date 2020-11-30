// import { httpException } from '../core/http-exception.js';

const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // error 堆栈调用信息
    // error 简化 清晰明了的信息
    // HTTP Status Code 2xx 3xx 4xx 5xx
    // ctx.body.error = 'error 服务器异常';
    // message
    // errorCode 详细，开发者自己定义的 10001
    // requestUrl 当前请求的 url
    /* 已知错误 参数类型错误等，try catch 到的错误*/
    // 处理错误 明确
    /* 未知错误 潜在的需哦呜 无意识 不知道的错误，例如数据库密码错误 */
    // 全局 try catch
    if (error instanceof global.errors.HttpException) {
      ctx.body = {
        msg: error.msg,
        code: error.code,
        requestUrl: `${ctx.method} ${ctx.path}`,
      };
      ctx.status = error.status;
    }
  }
};

export default catchError;
