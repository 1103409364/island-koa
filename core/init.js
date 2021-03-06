// const registerRouter = require(`${process.cwd()}/app/routes`); // "../app/routes"
// import registerRouter from "../app/routes/index.js";
const { default: registerRouter } = await import(`file://${process.cwd()}/app/routes/index.js`);
import config from '../config/config.js';
// console.log(`file:\\\\${process.cwd()}\\app\\routes`);
// 路径变动问题：
// 使用路径 path config
// 使用绝对路径
import * as errors from './http-exception.js';

// 初始化管理器
class InitManager {
  static initCore(app) {
    InitManager.app = app;
    InitManager.initLoadRouters();
    InitManager.loadHttpException();
    InitManager.loadConfig();
  }
  static initLoadRouters() {
    // console.log(registerRouter());
    InitManager.app.use(registerRouter());
  }
  static loadHttpException() {
    global.errors = errors;
  }
  static loadConfig() {
    global.config = config;
    // console.log(global.config);
  }
}

// module.exports = InitManager;
export default InitManager;
