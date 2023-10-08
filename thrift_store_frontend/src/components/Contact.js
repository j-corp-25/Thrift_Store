import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  //form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //form error states
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const update = (field) => {
    let setState;
    let setErrorState;

    switch (field) {
      case "email":
        setState = setEmail;
        setErrorState = setEmailError;
        break;
      case "name":
        setState = setName;
        setErrorState = setNameError;
        break;
      case "message":
        setState = setMessage;
        setErrorState = setMessageError;
        break;
      default:
        throw Error("Unknown field in Email Form");
    }

    return (e) => {
      setErrorState(null);
      setState(e.currentTarget.value);
    };
  };

  const SERVICE_ID = "default_service";
  const TEMPLATE_ID = "template_c62k8ib";
  const USER_ID = process.env.REACT_APP_EMAILJS_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    let errors = false;

    if (!name) {
      setNameError("Name cannot be blank");
      errors = true;
    } else {
      setNameError(null);
    }

    if (!email) {
      setEmailError("Email is required");
      errors = true;
    } else {
      let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegEx.test(email) && !email.includes(".")) {
        setEmailError("Email format is incorrect");
        errors = true;
      } else {
        setEmailError(null);
      }
    }

    if (!message) {
      setMessageError("Message cannot be empty");
    } else if (message.length < 10) {
      setMessageError("Message is too short");
      errors = true;
    } else {
      setMessageError(null);
    }

    if (!errors) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };
  return (
    <>
      <div className="section section-title-contact">Contact Us</div>
      <section className="contact-section">
        <div className="contact-left">
          <h2>Get in touch!</h2>
          <form onSubmit={sendEmail} className="contact-form">
            {nameError && <div className="error">{nameError}</div>}
            <input type="text" name="from_name" value={name} onChange={update("name")} placeholder="Name" />
            {emailError && <div className="error">{emailError}</div>}
            <input type="text" name="reply_to" value={email} onChange={ update ("email")} placeholder="Email" />
            {messageError && <div className="error">{messageError}</div>}
            <textarea type="text" name="message" value={message} onChange={update ("message")} placeholder="Message" />
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
