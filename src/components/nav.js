import Booking from "./booking";

const Nav = () => {

  const booking = () => {
    // redirect to the booking form <
    <Booking />
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">Wonder Hotels</a>
    
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"> 
          <a className="nav-link" href="./rooms">Rooms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./suites">About Us</a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link" href="./contact">Contact</a>
        </li>
        <li className="nav-item">
          <button onClick={booking}>Book Now</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav;