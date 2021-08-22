require('dotenv').config({ path: './config.env' });

const { Sequelize, DataTypes, Model } = require('sequelize');


const sequelize = new Sequelize({
  host: process.env.HOST,
  dialect: 'postgres',
  database: process.env.DATABASE,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
});

console.log(`HOST ${process.env.HOST} `);


(async () => {
  await sequelize.authenticate()
    .then(console.log('Connection has been established successfully.'))
    .catch((e: Error) => console.log(`Unable to connect to the database: ${e}`))
})()


class User extends Model {
}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
