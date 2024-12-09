import { useState } from "react";
import { CiCirclePlus, CiCircleMinus  } from "react-icons/ci";

const Footer = () => {

  const [count, setCount] = useState(0)

  const minusCount = ()=>{
    if (count >  0) {
      setCount(count - 1)
    }
  }

  const plus =() => {
setCount(count + 1)
  }
  
  const bookNow = (e) => {
// save form dat]\]\
  }

  return (
    
    <form>
    <div className="row footerDiv">
     
      <div className="col-3">
        <label for="services">Book Directly</label>
        <select name="services" id="services">
          <option value="">Exclusive Offers</option>
          <option value="single">Single Room</option>
          <option value="double">Double Room</option>
          <option value="deluxe">Deluxe Room</option>
          <option value="suite">Suite</option>
          <option value="penthouse">Penthouse</option>
        </select>
      </div>
      <div className="col-3">
        <label for="checkin">Check In</label>
        <input type="date" id="date" name="checkin" />
      </div>
      <div className="col-6 duration">
        <p>Number Of Nights</p>
        <button className="minus" onClick={minusCount}> <CiCircleMinus /></button>
        <span className="durationSpan">{count}</span>
        <button className="plus" onClick={plus}> <CiCirclePlus /> </button>
        
        <input className="submitBtn" type="submit" onClick={bookNow} value= "Book Now" />
      </div>
   
    </div>
    </form>

  )
}

export default Footer;