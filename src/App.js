import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/home"
import Rooms from './pages/rooms';
import RoomDetails from './pages/roomDetails';
import Contact from './pages/contact';
import Booking from './pages/booking';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/rooms' element={<Rooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>} />
        {/* <Route path='/admin' Component={AdminDash} /> */}
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
