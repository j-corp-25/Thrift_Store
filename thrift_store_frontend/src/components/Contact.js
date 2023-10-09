import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import '../i18n';

const Contact = () => {
  const { t, i18n } = useTranslation();
  //email sent states
  const [emailSent, setEmailSent] = useState(false);
  const [emailErrorSending, setEmailErrorSending] = useState(false);

  //form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //form error states
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  // hours state
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
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
      setTimeout(() => setNameError(false), 1500);
    } else {
      setNameError(null);
    }

    if (!email) {
      setEmailError("Email is required");
      errors = true;
      setTimeout(() => setEmailError(false), 1500);
    } else {
      let emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegEx.test(email) && !email.includes(".")) {
        setEmailError("Email format is incorrect");
        errors = true;
        setTimeout(() => setEmailError(false), 1500);
      } else {
        setEmailError(null);
      }
    }

    if (!message) {
      setMessageError("Message cannot be empty");
      errors = true;
      setTimeout(() => setMessageError(false), 1500);
    } else if (message.length < 10) {
      setMessageError("Message is too short");
      errors = true;
      setTimeout(() => setMessageError(false), 1500);
    } else {
      setMessageError(null);
    }
    if (!errors) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text);

          setName("");
          setEmail("");
          setMessage("");

          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 1500);
        },
        (error) => {
          console.log(error.text);
          setEmailErrorSending(true);
          setTimeout(() => setEmailErrorSending(false), 1500);
        }
      );
    }
  };
  return (
    <>
 <div className="section section-title">{t('mainContent.contact.title')}</div>
      <section className="contact-section">
        <div className="contact-left">
          <h2>{t('mainContent.contact.emailUs')}</h2>
          <form onSubmit={sendEmail} className="contact-form">
            {nameError && <div className="error">{nameError}</div>}
            <input
              type="text"
              name="from_name"
              value={name}
              onChange={update("name")}
              placeholder={t('mainContent.contact.namePlaceholder')}
            />
            {emailError && <div className="error">{emailError}</div>}
            <input
              type="text"
              name="reply_to"
              value={email}
              onChange={update("email")}
              placeholder={t('mainContent.contact.emailPlaceholder')}
            />
            {messageError && <div className="error">{messageError}</div>}
            <textarea
              type="text"
              name="message"
              value={message}
              onChange={update("message")}
              placeholder={t('mainContent.contact.messagePlaceholder')}
            />
            <button type="submit">{t('mainContent.contact.sendButton')}</button>
            {emailSent && (
              <div className="success">Email sent successfully!</div>
            )}
            {emailErrorSending && (
              <div className="error">
                There was an error sending the email. Please try again later.
              </div>
            )}
          </form>
        </div>

        <div className="contact-right">
        <h2>{t('mainContent.contact.sendMessageTitle')}</h2>
          <p>{t('mainContent.contact.sendMessageDescription')}</p>
          <a
            href="https://wa.me/13478983238?text=Hello%2C%20I%20have%20a%20question%20about%20Elizabeth%20Store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="whatsapp-btn">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              {t('mainContent.contact.whatsappButton')}
            </button>
          </a>
          <h3>Elizabeth Store</h3>
          <p>76-16 Jamaica Ave, Queens, NY 11421</p>
          <div className="hours-dropdown">
            <h3>Hours</h3>
            <div className="dropdown">
              <div
                className="dropdown-selected"
                onClick={() => setIsOpen(!isOpen)}
              >
                Open today 10:00 am - 09:00 pm
                <span className="arrow">{isOpen ? "▲" : "▼"}</span>
              </div>
              {isOpen && (
                <div className="dropdown-options">
                  <div>Mon 10:00 am - 09:00 pm</div>
                  <div>Tue 10:00 am - 09:00 pm</div>
                  <div>Wed 10:00 am - 09:00 pm</div>
                  <div>Thu 10:00 am - 09:00 pm</div>
                  <div>Fri 10:00 am - 09:00 pm</div>
                  <div>Sat 10:00 am - 09:00 pm</div>
                  <div>Sun 10:00 am - 09:00 pm</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
