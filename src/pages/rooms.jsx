import {useState, useEffect} from 'react';
import RoomCard from '../components/roomCard';
import Nav from '../components/nav';
import SearchBar from '../components/searchBar';

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/rooms/available')
    .then((res) => res.json())
    .then((data) => {
      setRooms(data);
      setFilteredRooms(data);
    });
   
  }, []);

  // filter rooms by type, price and availabliity
  const handleSearch = (query) => {
    const filtered = rooms.filter((room) => room.type.toLowerCase().includes(query.toLowerCase()) || room.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredRooms(filtered)
  };

  return (
    <div>
      <Nav />
      <h1>Explore Our Rooms</h1>
      <SearchBar onSearch={handleSearch} />
      <div className='row g-4 room--grid list-group list-group-horizontal'>
        {filteredRooms.map((room) => (
          <RoomCard key={room._id} room= {room} />
        ))}

      </div>
    </div>

  )
}

export default Rooms;