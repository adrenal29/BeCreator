 import express from "express";
import {
  createGig,
  deleteGig,
  fetchGigs,
  getGig,
  getGigs
} from "../controllers/gig.controller.js";
import { verifyToken } from "../middleware/jwt.js";

 const router = express.Router();

router.post("/", verifyToken, createGig);
router.delete("/:id", verifyToken, deleteGig);
router.get("/single/:id", getGig);
router.get("/", getGigs);
router.get("/",fetchGigs);

 export default router;
