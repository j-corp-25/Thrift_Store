import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="section section-title-contact">Contact Us</div>
      <section className="contact-section">
        <div className="contact-left">
          <h2>Get in touch!</h2>
          <form className="contact-form">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="Email*" />
            <textarea type="text" placeholder="message" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-right">
          <h2> Get in touch!</h2>
          <p>
            Loooking for something special? Have a question? Let us know, and
            we'll get back to you soon!
          </p>
          <button className="whatsapp-btn">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
            Message us on WhatsApp
          </button>
          <h3>Elizabeth Store</h3>
          <p>76-16 Jamaica Avenue</p>
          <div className="hours-dropdown">
            <h3>Hours</h3>
            <select>
              <option value="mon">Mon 09:00 am - 05:00 pm</option>
              <option value="tue">Tue 09:00 am - 05:00 pm</option>
              <option value="wed">Wed 09:00 am - 05:00 pm</option>
              <option value="thu">Thu 09:00 am - 05:00 pm</option>
              <option value="fri">Fri 09:00 am - 05:00 pm</option>
              <option value="sat">Sat Closed</option>
              <option value="sun">Sun Closed</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
