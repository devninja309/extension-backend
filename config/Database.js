import { Sequelize } from "sequelize";

const db = new Sequelize("sale_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
