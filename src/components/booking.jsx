import { useState } from "react";

const Booking = ({roomId}) => {
  const [formData, setFormData] = useState({name: '', email: ''})

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log('Booking Submitted:', { ...formData, roomId })
  }

  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        onChange={handleChange}
      />
      <button type="submit">Book Now</button>
    </form>
  )
}

export default Booking;