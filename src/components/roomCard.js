
const RoomCard = ({room}) => {
  return (
    <>
        <div className="col-4 list-group-item card" style={{width: "18rem"}}>
          <img src={room.image} alt={room.name}className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{room.name}</h5>
            <p className="card-text"> ${room.price}/night</p>
            <p className="card-text"> {room.type}</p>
            <p className="card-text"> {room.description}</p>
            <a href="./booking" className="btn btn-primary">Book Now</a>
          </div>
        </div>
        
      </>
  )
}

export default RoomCard;