import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingForm from '../components/bookingForm';

const BookingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const room = location.state;

  if (!room) {
    navigate('/rooms');
    return <p>Redirecting to rooms...</p>;
  }

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm room={room} />
    </div>
  );
};

export default BookingPage;
