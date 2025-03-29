const Rooms = [
  {
    roomId: "1",
    roomName: "Small Conference Room",
    seatsAvailable: 2,
    amenities: ["TV", "AC", "Heater"],
    pricePerHour: 1000,
    status: "Available",
    location: "Building A, Floor 1",
  },
  {
    roomId: "2",
    roomName: "Medium Meeting Room",
    seatsAvailable: 4,
    amenities: ["TV", "AC", "Heater", "Phone"],
    pricePerHour: 950,
    status: "Booked",
    location: "Building A, Floor 2",
  },
  {
    roomId: "3",
    roomName: "Large Seminar Room",
    seatsAvailable: 10,
    amenities: ["TV", "AC", "Heater", "Projector"],
    pricePerHour: 1500,
    status: "Booked",
    location: "Building B, Floor 3",
  },
  {
    roomId: "4",
    roomName: "Executive Suite",
    seatsAvailable: 6,
    amenities: ["TV", "AC", "Heater", "Phone", "Coffee Machine"],
    pricePerHour: 2000,
    status: "Available",
    location: "Building C, Floor 5",
  },
  {
    roomId: "5",
    roomName: "Training Room",
    seatsAvailable: 8,
    amenities: ["TV", "Fan", "Heater", "Whiteboard"],
    pricePerHour: 800,
    status: "Available",
    location: "Building B, Floor 1",
  },
];

// Helper function to reset room data (for testing)
const resetRooms = () => {
  Rooms = [
    {
      roomId: "1",
      roomName: "Small Conference Room",
      seatsAvailable: 2,
      amenities: ["TV", "AC", "Heater"],
      pricePerHour: 1000,
      status: "Available",
      location: "Building A, Floor 1",
    },
    {
      roomId: "2",
      roomName: "Medium Meeting Room",
      seatsAvailable: 4,
      amenities: ["TV", "AC", "Heater", "Phone"],
      pricePerHour: 950,
      status: "Booked",
      location: "Building A, Floor 2",
    },
    {
      roomId: "3",
      roomName: "Large Seminar Room",
      seatsAvailable: 10,
      amenities: ["TV", "AC", "Heater", "Projector"],
      pricePerHour: 1500,
      status: "Booked",
      location: "Building B, Floor 3",
    },
    {
      roomId: "4",
      roomName: "Executive Suite",
      seatsAvailable: 6,
      amenities: ["TV", "AC", "Heater", "Phone", "Coffee Machine"],
      pricePerHour: 2000,
      status: "Available",
      location: "Building C, Floor 5",
    },
    {
      roomId: "5",
      roomName: "Training Room",
      seatsAvailable: 8,
      amenities: ["TV", "Fan", "Heater", "Whiteboard"],
      pricePerHour: 800,
      status: "Available",
      location: "Building B, Floor 1",
    },
  ];
};

export { Rooms, resetRooms };
