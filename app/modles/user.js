import pkg from 'sequelize';
const { Sequelize, Model } = pkg;
// import { sequelize } from '../../core/db.js';

class User extends Model {}
console.log(global.config);

// User.init({
//   //唯一 primaryKey 不能为空，设计 id编号，自动增长
//   //推荐数字 不要用字符串，随机字符串 GUID　速度慢
//   //并发　1000　注册
//   // 接口保护，权限　token
//   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
//   nickname: Sequelize.STRING,
//   email: Sequelize.STRING,
//   password: Sequelize.STRING,
//   openid: {
//     type: Sequelize.STRING(64),
//     unique: true,
//   },
// });
