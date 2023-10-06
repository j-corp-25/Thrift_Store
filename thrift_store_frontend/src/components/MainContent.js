import React from "react";
import "./MainContent.css";
import first_landingImage from "../assets/Landing_Image.jpg";
import location_image from "../assets/location.jpg";
import social_media from "../assets/social_media.jpg";

const MainContent = () => {
  return (
    <section className="section main-section">
      <div className="section section-title">About Elizabeths Shop</div>
      <div className="main-sub-section">
        <div className="section section-first">
          <div className="text-block-container">
            <h2 className="first-title"> Our Vision</h2>
            <p className="first-summary">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              obcaecati impedit nisi esse minima? Distinctio itaque ut possimus
              quia sed minima quod adipisci, quos blanditiis repellat,
              accusantium, expedita tempora animi?
            </p>
          </div>
          <div className="image-container">
            <figure>
              <img src={first_landingImage}></img>
            </figure>
          </div>
        </div>
        <div className="section section-second">
          <div className="text-block-container">
            <h2 className="first-title"> Our Location</h2>
            <p className="first-summary">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              obcaecati impedit nisi esse minima? Distinctio itaque ut possimus
              quia sed minima quod adipisci, quos blanditiis repellat,
              accusantium, expedita tempora animi?
            </p>
          </div>
          <div className="image-container">
            <figure>
              <img src={location_image}></img>
            </figure>
          </div>
        </div>

        <div className="section section-third">
          <div className="text-block-container">
            <h2 className="first-title"> Our Social Media</h2>
            <p className="first-summary">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              obcaecati impedit nisi esse minima? Distinctio itaque ut possimus
              quia sed minima quod adipisci, quos blanditiis repellat,
              accusantium, expedita tempora animi?
            </p>
          </div>
          <div className="image-container">
            <figure>
              <img src={social_media}></img>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
