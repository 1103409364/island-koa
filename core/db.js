import Sequelize from 'sequelize';

const { dbName, host, port, user, password } = global.config.database;

const sequelize = new Sequelize(dbName, user, password, {
  dialect: 'mysql', //数据库类型 需要安装驱动 mysql2
  host,
  logging: true,
  timezone: '+08:00',
  define: {},
});

sequelize.sync();

export { sequelize };
