require('dotenv').config({ path: './config.env' });

const { Sequelize, DataTypes, Model } = require('sequelize');

const dbConfig = {
  host: process.env.DB_HOST,
  dialect: 'postgres',
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
};

console.log(dbConfig);

const sequelize = new Sequelize(dbConfig);

console.log(`HOST ${process.env.HOST} `);


(async () => {
  await sequelize.authenticate()
    .then(console.log('Connection has been established successfully.'))
    .catch((e: Error) => console.log(`Unable to connect to the database: ${e}`))
})()


const User = sequelize.define("user", {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    defaultValue: 'green'
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER
});

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();
