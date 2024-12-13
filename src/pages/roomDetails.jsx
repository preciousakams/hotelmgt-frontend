import { useEffect, useState } from "react";
import Booking from "../components/booking";

const RoomDetails =({match}) => {

  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(`https://hotelmgt-backend.onrender.com/rooms${match.params._id}`)
    .then((res) => res.json())
    .then((data) => setRoom(data))
  }, [match.params._id])
  if(!room) return <p>Loading...</p>

return (
  <div>
    <h1> {room.name} </h1>
    <img src={room.image} alt={room.name} />
    <p>{room.description}</p>
    <p>Price: ${room.price}/night</p>
    <Booking roomId = {room._id} />
  </div>
)
}

export default RoomDetails