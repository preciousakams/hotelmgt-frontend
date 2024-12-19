
// import {useState, useEffect } from 'react';
import Nav from "../components/nav";
// import Footer from "../components/footer";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin  } from "react-icons/ti"
import CarouselDiv from '../components/carousel';


const Home = () => {
  // const [roomOptions, setRoomOptions] = useState([]);

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     try {
  //       const response = await fetch("https://hotelmgt-backend.onrender.com/rooms/available"); // Replace with your backend's room API
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch rooms");
  //       }
  //       const data = await response.json();
  //       setRoomOptions(data); // Assuming `data` is an array of room objects
  //     } catch (error) {
  //       console.error("Error fetching rooms:", error);
  //     }
  //   };

  //   fetchRooms();
  // }, []);

  // const handleBooking = async (bookingData) => {
  //   try {
  //     const response = await fetch("https://hotelmgt-backend.onrender.com/bookings", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(bookingData),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Booking failed. Please try again.");
  //     }
  
  //     const data = await response.json();
  //     alert("Booking successful!");
  //     console.log("Booking response:", data);
  //   } catch (error) {
  //     alert("Error booking room: " + error.message);
  //   }
  // };


  return (
    <div className="App">
      <Nav />
      <div className="row mainCon">
        <div className="col-1 sideFooter"> 
            <p className="mail"> support@wonderhotels.com</p>
            <div className="socials">
            <TiSocialLinkedin />
            <TiSocialFacebook />
            <TiSocialInstagram />
            </div>
        </div>
        <div className="mainDiv col-11">
        <div className="writeup">
        <h5>
          Discover tranquility, wrapped in five-star grandeur
          </h5>
          <p>
          Let nature soothe your soul
          </p>
        </div>
        
        </div>
   
        <div className="row">
          <div className="col-1 sideFooter"></div>
          <div className="col-11">
            {/* <Footer roomOptions={roomOptions} onBookNow={handleBooking} /> */}
            <CarouselDiv />
          </div>
        </div>
        </div>
      
    </div>
  )
}

export default Home;