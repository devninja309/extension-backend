import express from "express";
import {
  getUsers,
  Register,
  Update,
  Delete,
  getAttribute,
  createAttribute,
  getSelector,
  getSelect,
  sDelete,
  postDomain,
  getDomain,
  deleteDomain,
} from "../controllers/Users.js";


const router = express.Router();

router.get("/users", getUsers);
router.put("/update", Update);
router.delete("/delete", Delete);

//extension call
router.get("/extension", getAttribute);
router.post("/extension", createAttribute);

////
router.get("/selector", getSelector);

// selector call
router.post("/select", Register);
router.get("/select", getSelect);
router.delete("/select", sDelete);

// domain
router.post("/domain", postDomain)
router.get("/domain", getDomain);
router.delete("/domain", deleteDomain);

export default router;
