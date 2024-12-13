import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Booking from "../components/booking";
import Nav from "../components/nav";

const RoomDetails =() => {
  const {id} = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetch(`https://hotelmgt-backend.onrender.com/rooms/${id}`)
    .then((res) => res.json())
    .then((data) => setRoom(data))
  }, [id])
  if(!room) return <>
  <Nav />
  <p>Loading Room Details...</p>
  </>;

return (
  <>
  <Nav />
  
  <div className="card detailsDiv">
          <img src={room.image} alt={room.name}className="card-img-top col-8" />
         
          <div className="card-body row">
            
            <h5 className="card-title col"><strong> Name:</strong> {room.name}</h5>
            <p className="card-text col"> <strong>Price:</strong> ${room.price}/night</p>
            <p className="card-text col"><strong> Room Type: </strong>{room.type} </p>
            <p className="card-text col-12">{room.description} </p>
            <Booking roomId = {room._id} />
          </div>
        </div>
  </>
)
}

export default RoomDetails