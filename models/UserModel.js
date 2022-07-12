import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "users",
  {
    selector: {
      type: DataTypes.STRING
    },
    unique: {
      type: DataTypes.STRING
    },
    english: {
      type: DataTypes.STRING
    },
    french: {
      type: DataTypes.STRING
    },
    spanish: {
      type: DataTypes.STRING
    },
    createdAt: {
      field: "createdAt",
      type: Sequelize.DATE
    },
    updatedAt: {
      field: "updatedAt",
      type: Sequelize.DATE
    }
  },
  {
    freezeTableName: true,
    timestamps: true
  }
);

(async () => {
  await db.sync();
})();

export default Users;
