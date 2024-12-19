
const Nav = () => {

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/">
    <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1734532930/myportfolio/wonderHotels/hotel-logo_t1qnac.jpg" alt='Wonder Hotels' />
    </a>
    
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"> 
          <a className="nav-link" href="./rooms">Rooms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./#">About Us</a>
        </li>
    
        <li className="nav-item">
          <a className="nav-link" href="./#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav;