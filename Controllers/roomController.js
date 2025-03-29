import { Bookings } from "../Data/booking.js";
import { resetRooms, Rooms } from "../Data/room.js";
Bookings;

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

//Creating a Room
export const createRoom = (req, res) => {
  const { roomName, seatsAvailable, amenities, pricePerHour, location } =
    req.body;

  // Validate all fields and numeric values
  if (
    !roomName ||
    !seatsAvailable ||
    !amenities ||
    !pricePerHour ||
    !location
  ) {
    return res.status(400).json({ message: "All fiels are required" });
  }

  const newRoom = {
    roomId: (Rooms.length + 1).toString(),
    roomName,
    seatsAvailable,
    amenities,
    pricePerHour,
    status: "Available",
    location,
  };

  Rooms.push(newRoom);

  res.status(200).json({ message: "Room created succesfully", data: newRoom });
};

//List all Rooms with Booked Data

export const getBookedRooms = (req, res) => {
  updateRoomStatus();
  const currentDate = new Date();
  const bookedRooms = Rooms.map((room) => {
    const bookingsForRoom = Bookings.filter((booking) => {
      const bookingDate = new Date(
        booking.bookingDate.split("/").reverse().join("-")
      );
      return booking.roomId === room.roomId && bookingDate >= currentDate;
    });
    return {
      roomName: room.roomName,
      bookedStatus: room.status,
      bookings: bookingsForRoom.map((booking) => ({
        customerName: booking.customerName,
        date: booking.bookingDate,
        startTime: booking.startTime,
        endTime: booking.endTime,
      })),
    };
  }).filter((room) => room.bookedStatus === "Booked");

  res.status(200).json({ message: "Booked Rooms", data: bookedRooms });
};

//Get all rooms
export const getAllRooms = (req, res) => {
  updateRoomStatus();
  res.status(200).json({ message: "Room info", data: Rooms });
};

//Reset room
export const resetRoomData = (req, res) => {
  resetRooms();
  updateRoomStatus();
  res.status(200).json({ message: "Room data reset succesfully", data: Rooms });
};
