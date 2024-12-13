import {useState, useEffect} from 'react';
import RoomCard from '../components/roomCard';
import Nav from '../components/nav';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('https://hotelmgt-backend.onrender.com/rooms')
    .then((res) => res.json())
    .then((data) => setRooms(data));
   
  }, []);

  // filter rooms by type, price and availabliity
  return (
    <div>
      <Nav />
      <h1>All Rooms</h1>
      <div className='row g-4 room--grid list-group list-group-horizontal'>
        {rooms.map((room) => (
          <RoomCard key={room._id} room= {room} />
        ))}

      </div>
    </div>

  )
}

export default Rooms;