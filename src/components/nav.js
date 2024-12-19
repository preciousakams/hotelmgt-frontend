
const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <a className="navbar-brand" href="/">
    <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1734532930/myportfolio/wonderHotels/hotel-logo_t1qnac.jpg" alt='Wonder Hotels' />
    </a>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"> 
          <a className="nav-link" href="./rooms">Rooms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="./#">About</a>
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