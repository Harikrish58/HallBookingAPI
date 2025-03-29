import express from "express";
import {
  createRoom,
  getBookedRooms,
  getAllRooms,
  resetRoomData,
} from "../Controllers/roomController.js";

const router = express.Router();

// Routes for room management
router.post("/create", createRoom);
router.get("/", getAllRooms);
router.get("/booked", getBookedRooms);
router.post("/reset", resetRoomData);

export default router;
