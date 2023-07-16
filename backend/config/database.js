import { Sequelize } from "sequelize";

const db = new Sequelize('user_list', 'root', 'password123', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;