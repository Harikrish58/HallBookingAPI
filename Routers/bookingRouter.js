import express from "express";
import {
  bookRoom,
  bookedCustomerDetails,
  getCustomersBookedData,
  getAllBookings,
  resetBookingData,
} from "../Controllers/bookingController.js";

const router = express.Router();

// Routes for booking management
router.post("/create/:id", bookRoom);
router.get("/customers", getCustomersBookedData);
router.get("/customers/:customerName", bookedCustomerDetails);
router.get("/", getAllBookings);
router.post("/reset", resetBookingData);

export default router;
