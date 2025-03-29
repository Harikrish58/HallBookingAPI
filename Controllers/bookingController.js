import { Rooms } from "../Data/room.js";
import { Bookings, resetBookings } from "../Data/booking.js";

// Helper function to update room status dynamically
const updateRoomStatus = () => {
  const currentDate = new Date();
  Rooms.forEach((room) => {
    const hasActiveBooking = Bookings.some((booking) => {
      const bookingDate = new Date(
        booking.bookingDate.split("/").reverse().join("-")
      );
      return booking.roomId === room.roomId && bookingDate >= currentDate;
    });
    room.status = hasActiveBooking ? "Booked" : "Available";
  });
};

//Booking a Room
export const bookRoom = (req, res) => {
  const bookingID = req.params.id;
  const { customerName, bookingDate, startTime, endTime, bookedOn } = req.body;

  // Validate request body
  if (!customerName || !bookingDate || !startTime || !endTime || !bookedOn) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check if the room exists
  const room = Rooms.find((ele) => ele.roomId === bookingID);
  if (!room) {
    return res.status(404).json({ message: "Room not found", list: Rooms });
  }

  // Check for existing bookings on the same date
  const existingBookings = Bookings.filter(
    (booking) =>
      booking.roomId === bookingID && booking.bookingDate === bookingDate
  );

  if (existingBookings.length > 0) {
    return res
      .status(400)
      .json({ message: "Room already booked on this data" });
  }

  // Create new booking
  const newBooking = {
    customerName,
    bookingDate,
    startTime,
    endTime,
    bookingID: (Bookings.length + 1).toString(),
    roomId: bookingID,
    bookedOn,
  };
  Bookings.push(newBooking);
  updateRoomStatus();
  res.status(200).json({
    message: "Room booked succesfully",
    bookedRoom: newBooking,
    list: Bookings,
  });
};

//List all customers with booked Data
export const getCustomersBookedData = (req, res) => {
  updateRoomStatus();
  const customerData = Bookings.map((booking) => {
    const room = Rooms.find((room) => room.roomId === booking.roomId);
    return {
      customerName: booking.customerName,
      roomName: room.roomName,
      date: booking.bookingDate,
      startTime: booking.startTime,
      endTime: booking.endTime,
    };
  });
  res.status(200).json({ message: "Booked customer data", data: customerData });
};

//List how many times a customer has booked the room with details
export const bookedCustomerDetails = (req, res) => {
  const { customerName } = req.params;
  const customerBookings = Bookings.filter(
    (booking) => booking.customerName === customerName
  );

  if (customerBookings.length === 0) {
    return res.status(404).json({ message: "No customer bookings found" });
  }

  updateRoomStatus();
  const bookingdetails = customerBookings.map((booking) => {
    const room = Rooms.find((room) => room.roomId === booking.roomId);
    return {
      customerName: booking.customerName,
      roomName: room.roomName,
      date: booking.bookingDate,
      startTime: booking.startTime,
      endTime: booking.endTime,
      bookingID: booking.bookingID,
      bookingDate: booking.bookedOn,
      bookingStatus: room.status,
    };
  });
  res
    .status(200)
    .json({ message: "Booked Customer details", data: bookingDetails });
};

//Get All booking
export const getAllBookings = (req, res) => {
  res.status(200).json({ message: "Booking details", data: Bookings });
};

//Reset bookings (for testing)
export const resetBookingData = (req, res) => {
  resetBookings();
  updateRoomStatus();
  res
    .status(200)
    .json({ message: "Booking data reset successfully", data: Bookings });
};
