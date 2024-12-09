import { useEffect, useState } from "react";
import Booking from "../components/booking";

const RoomDetails =({match}) => {

  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/rooms/${match.params.id}`)
    .then((res) => res.json())
    .then((data) => setRoom(data))
  }, [match.params.id])
  if(!room) return <p>Loading...</p>

return (
  <div>
    <h1> {room.name} </h1>
    <img src={room.image} alt={room.name} />
    <p>{room.description}</p>
    <p>Price: ${room.price}/night</p>
    <Booking roomId = {room.id} />
  </div>
)
}

export default RoomDetails