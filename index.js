import express from "express";
import cors from "cors";
import roomRouter from "./Routers/roomRouter.js";
import bookingRouter from "./Routers/bookingRouter.js";

const app = express();
const PORT = 4000;

// Middleware setup
app.use(cors());
app.use(express.json());

// Mount routers
app.use("/api/rooms", roomRouter);
app.use("/api/bookings", bookingRouter);

// Root route for testing
app.get("/", (req, res) => {
  res.status(200).send("Api is running sucessfully");
});

// Start server with a check for critical dependencies
app.listen(PORT, () => {
  console.log(`App is running on tha port: ${PORT}`);
});
