import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const WeddingBookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    weddingDate: "",
    guests: "",
    venue: "",
    specialRequests: "",
  });

  const [bookings, setBookings] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBookings([...bookings, formData]);
    setFormData({
      name: "",
      email: "",
      weddingDate: "",
      guests: "",
      venue: "",
      specialRequests: "",
    });
  };

  return (
    
    <div id="login" className="container">
      <h2 id="form">Wedding Booking Form</h2>
      <form id="weed" className="form" onSubmit={handleSubmit}>
        <div id="orm-group" className="form-group">
          <label id="label" htmlFor="name">Name:</label>
          <input className="booked"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id="label" htmlFor="email">Email:</label>
          <input className="booked"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id="label" htmlFor="weddingDate">Wedding Date:</label>
          <input
          className="booked"
            type="date"
            id="weddingDate"
            name="weddingDate"
            value={formData.weddingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id="label" htmlFor="guests">Number of Guests:</label>
          <input className="booked"
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label id="label" htmlFor="venue">Preferred Venue:</label>
          <select className="booked"
            id="venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            required
          >
            <option value="">Select a venue</option>
            <option value="Beach">Beach</option>
            <option value="Garden">Garden</option>
            <option value="Banquet Hall">Banquet Hall</option>
            <option value="Resort">Resort</option>
          </select>
        </div>
        <div className="form-group">
          <label id="label" htmlFor="specialRequests">Special Requests:</label>
          <textarea className="booked"
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
          />
        </div>
        <button id="enter" className="submit-btn" type="submit">Submit</button>
      </form>

      <h2>Wedding Bookings</h2>
      {bookings.length > 0 ? (
        <table id="booking-table" className="booking-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Wedding Date</th>
              <th>Guests</th>
              <th>Venue</th>
              <th>Special Requests</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.weddingDate}</td>
                <td>{booking.guests}</td>
                <td>{booking.venue}</td>
                <td>{booking.specialRequests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings yet. Please fill the form to book a wedding.</p>
      )}
    </div>
  );
};

export default WeddingBookingForm;
