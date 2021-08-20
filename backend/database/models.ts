
const dbConfig = require('dotenv').config({path: './config.env'});

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: process.env.HOST,
  dialect: 'postgres',
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});


(async () => {
  await sequelize.authenticate()
    .then(console.log('Connection has been established successfully.'))
    .catch((e: Error) => console.log(`Unable to connect to the database: ${e}`))
})()

