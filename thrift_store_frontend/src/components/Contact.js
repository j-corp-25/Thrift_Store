import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")

  const [messageError,serNameError] = useState
  const [emailError,setEmailError] = useState("")
  const [nameError,setNameError] = useState("")

  const SERVICE_ID = "default_service";
  const TEMPLATE_ID = "template_c62k8ib";
  const USER_ID = process.env.REACT_APP_EMAILJS_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    let errors = false;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <div className="section section-title-contact">Contact Us</div>
      <section className="contact-section">
        <div className="contact-left">
          <h2>Get in touch!</h2>
          <form onSubmit={sendEmail} className="contact-form">
            <input type="text" name="from_name" placeholder="name" />
            <input type="email" name="reply_to" placeholder="Email*" />
            <textarea type="text" name="message" placeholder="message" />
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
