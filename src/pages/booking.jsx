import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingForm from '../components/bookingForm';
import Nav from '../components/nav';

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
      <Nav />
     
      <BookingForm room={room} />
    </div>
  );
};

export default BookingPage;
