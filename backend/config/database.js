import { Sequelize } from "sequelize";
import 'dotenv/config.js'

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.HOST,
    dialect: 'mysql'
});

export default db;