import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Domains = db.define(
  "domains",
  {
    domain: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

(async () => {
  await db.sync();
})();

export default Domains;
