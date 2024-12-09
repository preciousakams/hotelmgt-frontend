

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
  <div className="container-fluid">
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="##">Wonder Hotels</a>
    
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"> 
          <a className="nav-link" href="##">Rooms</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="##">Suites</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="##">Resturant</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="##">Offers</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="##">Contact</a>
        </li>
        <li className="nav-item">
          <button>Book Now</button>
        </li>
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search" />
        <button className="btn btn-primary" type="button">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}

export default Nav;