import React, { useState } from 'react';

const BookingForm = ({ room }) => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const calculateTotalPrice = () => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
    setTotalPrice(nights * room.price);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    calculateTotalPrice();

    const bookingData = {
      roomId: room.id,
      customerName,
      email,
      checkIn,
      checkOut,
      totalPrice,
    };

    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) throw new Error('Failed to create booking');

      setSuccess(true);
      setCustomerName('');
      setEmail('');
      setCheckIn('');
      setCheckOut('');
      setTotalPrice(0);
    } catch (err) {
      setError('Could not complete booking. Try again later.');
    }
  };

  return (
    <div>
      <h2>Book {room.name}</h2>
      {success && <p style={{ color: 'green' }}>Booking successful!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Check-In:</label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Check-Out:</label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        <div>
          <p>Total Price: ${totalPrice}</p>
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
