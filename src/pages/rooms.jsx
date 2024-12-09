import {useState, useEffect} from 'react';
import RoomCard from '../components/roomCard';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/rooms')
    .then((res) => res.json())
    .then((data) => setRooms(data));
    console.log(rooms)
  }, []);

  // filter rooms by type, price and availabliity
  return (
    <div>
      <h1>Available Rooms</h1>
      <div className='room--grid'>
        {rooms.map((room) => (
          <RoomCard key={room.id} room= {room} />
        ))}
      </div>
    </div>

  )
}

export default Rooms;