import { useState, useEffect } from "react";
// import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Footer = ({ roomOptions, onBookNow }) => {
  const [roomId, setRoomId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    if (!roomId || !checkIn || !checkOut) return;

    const room = roomOptions.find((r) => r._id === roomId);
    if (!room) return;

    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);

    return nights > 0 ? nights * room.price : 0;
  };
  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
  }, [roomId, checkIn, checkOut]);


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!roomId || !customerName || !email || !checkIn || !checkOut || totalPrice <= 0) {
      alert("Please fill out all fields correctly before booking.");
      return;
    }

    const bookingData = {
      roomId,
      customerName,
      email,
      checkIn,
      checkOut,
      totalPrice,
    };

    console.log("Booking data:", bookingData);

    // Optional: Call parent callback to handle booking API
    if (onBookNow) {
      onBookNow(bookingData);
    } else {
      alert("Booking functionality is not connected yet!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="footerForm">
      <div className="row footerFormDiv">
        {/* Room Selector */}
        <div className="col">
          <label htmlFor="room">Room Type</label>
          <br/>
          <select
            id="room"
            value={roomId}
            onChange={(e) => {
              setRoomId(e.target.value);
              calculateTotalPrice();
            }}
            required
          >
            <option value="">Select a Room</option>
            {roomOptions.map((room) => (
              <option key={room._id} value={room._id}>
                {room.name} {room.type}: (${room.price}/night)
              </option>
            ))}
          </select>
        </div>

        {/* Customer Name */}
        <div className="col">
          <label htmlFor="customerName">Name</label> <br />
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="col">
          <label htmlFor="email">Email</label> <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="row">
        {/* Check-In Date */}
        <div className="col">
          <label htmlFor="checkIn">Check-In</label> <br/>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => {
              setCheckIn(e.target.value);
              calculateTotalPrice();
            }}
            required
          />
        </div>

        {/* Check-Out Date */}
        <div className="col">
          <label htmlFor="checkOut">Check-Out</label> <br />
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => {
              setCheckOut(e.target.value);
              calculateTotalPrice();
            }}
            required
          />
        </div>

        {/* Total Price */}
        <div className="col">
          <label>Total Price:</label> <br />
          <p>${totalPrice > 0 ? totalPrice : "0.00"}</p>
        </div>

        {/* Submit Button */}
        <div className="col">
          <button className="submitBtn" type="submit">
            Book Now
          </button>
        </div>
        </div>
      </div>
    </form>
  );
};

export default Footer;
