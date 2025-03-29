const Bookings = [
  {
    customerName: "Jhon",
    bookingDate: "20/02/2025",
    startTime: "12:00",
    endTime: "14:00",
    bookingID: "1",
    roomId: "2",
    bookedOn: "18/06/2024",
  },
  {
    customerName: "Tomek",
    bookingDate: "01/04/2025", // Future date for testing dynamic status
    startTime: "09:00",
    endTime: "11:00",
    bookingID: "2",
    roomId: "1",
    bookedOn: "27/03/2025",
  },
  {
    customerName: "Andrej",
    bookingDate: "10/01/2025",
    startTime: "14:00",
    endTime: "16:00",
    bookingID: "3",
    roomId: "1",
    bookedOn: "08/06/2024",
  },
  {
    customerName: "Marek",
    bookingDate: "15/04/2025", // Future date for testing
    startTime: "10:00",
    endTime: "12:00",
    bookingID: "4",
    roomId: "3",
    bookedOn: "25/03/2025",
  },
];

// Helper function to reset booking data (for testing)
const resetBookings = () => {
  Bookings = [
    {
      customerName: "Jhon",
      bookingDate: "20/02/2025",
      startTime: "12:00",
      endTime: "14:00",
      bookingID: "1",
      roomId: "2",
      bookedOn: "18/06/2024",
    },
    {
      customerName: "Tomek",
      bookingDate: "01/04/2025", // Future date for testing dynamic status
      startTime: "09:00",
      endTime: "11:00",
      bookingID: "2",
      roomId: "1",
      bookedOn: "27/03/2025",
    },
    {
      customerName: "Andrej",
      bookingDate: "10/01/2025",
      startTime: "14:00",
      endTime: "16:00",
      bookingID: "3",
      roomId: "1",
      bookedOn: "08/06/2024",
    },
    {
      customerName: "Marek",
      bookingDate: "15/04/2025", // Future date for testing
      startTime: "10:00",
      endTime: "12:00",
      bookingID: "4",
      roomId: "3",
      bookedOn: "25/03/2025",
    },
  ];
};

export { Bookings, resetBookings };
