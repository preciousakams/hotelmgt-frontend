import React, { useState, useEffect } from 'react';

const BookingForm = ({ room }) => {
  const [customerName, setCustomerName] = useState('');
  const [email, setEmail] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Function to calculate total price dynamically
  useEffect(() => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkOutDate > checkInDate) {
        const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
        setTotalPrice(nights * room.price);
      } else {
        setTotalPrice(0);
      }
    }
  }, [checkIn, checkOut, room.price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      roomId: room._id,
      customerName,
      email,
      checkIn,
      checkOut,
      totalPrice,
    };

    try {
      const response = await fetch('http://localhost:5000/bookings', {
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
    <div className='bookingForm container'>
      <h3> <strong>Selected Room:</strong> {room.name}</h3>
      <h3> <strong>Room Type:</strong> {room.type}</h3>
      
      {success && <p style={{ color: 'green' }}>Booking successful!</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='bookingFormDiv'>
  
      <form onSubmit={handleSubmit}>
        
        <div>
          <label><strong>Customer's Name: </strong></label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            required
          />
        </div>
        
        {/* Email */}
        <div>
          <label><strong> Customer's Email: </strong></label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* Check-In */}
        <div>
          <label><strong>Check-In Date: </strong></label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
        </div>
        
        {/* Check-Out */}
        <div>
          <label><strong>Check-Out Date: </strong></label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />
        </div>
        
        {/* Total Price */}
        <div>
          <p><strong>Total Price: ${totalPrice}</strong></p>
        </div>
        
        {/* Submit Button */}
        <button type="submit" disabled={!totalPrice} className='bookNowBtn'>
          Confirm Booking
        </button>
      </form>
      </div>
    </div>
  );
};

export default BookingForm;
