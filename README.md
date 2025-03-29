# Hall Booking API

This is a Node.js API for managing room bookings. It allows you to create rooms, book rooms, retrieve room and booking information, and reset data.

## Features

* **Room Management:**
    * Create new rooms with details like name, seats, amenities, price, and location.
    * Retrieve a list of all rooms.
    * Retrieve a list of booked rooms with booking details.
    * Reset room data to default values.
* **Booking Management:**
    * Book rooms for specific customers.
    * Retrieve booking details for all customers.
    * Retrieve booking details for a specific customer.
    * Retrieve all booking information.
    * Reset booking data to default values.
* **Dynamic Room Status:**
    * Rooms automatically update their status to "Booked" or "Available" based on booking dates.
* **CORS Enabled:**
    * API supports Cross-Origin Resource Sharing.
* **JSON Parsing:**
    * API parses incoming JSON requests.

## Technologies

* Node.js
* Express.js
* cors
* nodemon (for development)

## API Endpoints

### Rooms

* **`POST /api/rooms/create`:** Create a new room.
    * Request body: JSON object with room details.
* **`GET /api/rooms`:** Get all rooms.
* **`GET /api/rooms/booked`:** Get booked rooms with booking details.
* **`POST /api/rooms/reset`:** Reset room data.

### Bookings

* **`POST /api/bookings/create/:id`:** Book a room (replace `:id` with the room ID).
    * Request body: JSON object with booking details.
* **`GET /api/bookings/customers`:** Get booking details for all customers.
* **`GET /api/bookings/customers/:customerName`:** Get booking details for a specific customer.
* **`GET /api/bookings`:** Get all bookings.
* **`POST /api/bookings/reset`:** Reset booking data.

### Example Request (Create Room)

```json
{
  "roomName": "New Meeting Room",
  "seatsAvailable": 6,
  "amenities": ["TV", "Whiteboard"],
  "pricePerHour": 1200,
  "location": "Building D, Floor 2"
}
