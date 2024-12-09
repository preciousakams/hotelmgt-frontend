
const RoomCard = ({room}) => {
  return (

    <div className="roomCard">
        <img src={room.image} alt={room.name} />
        <h3> {room.name} </h3>
        <p>${room.price}/night</p>
        <button>Book Now</button>
    </div>
  )
}

export default RoomCard;