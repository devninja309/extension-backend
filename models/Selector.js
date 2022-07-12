import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Selectors = db.define(
  "selectors",
  {
    selector: {
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

export default Selectors;
