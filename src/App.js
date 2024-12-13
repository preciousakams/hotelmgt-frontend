import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./pages/home"
import Rooms from './pages/rooms';
import RoomDetails from './pages/roomDetails';
import Suites from './pages/suites';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/rooms' element={<Rooms/>} />
        <Route path='/rooms/:id' element={<RoomDetails/>} />
        {/* <Route path='/admin' Component={AdminDash} /> */}
        <Route path='/suites' element={<Suites /> } />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
