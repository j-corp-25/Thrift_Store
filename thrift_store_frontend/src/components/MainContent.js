import React from "react";
import "./MainContent.css";
import first_landingImage from "../assets/Landing_Image.jpg";
import location_image from "../assets/location.jpg";
import social_media from "../assets/social_media.jpg";
import Social from "./Social";

const MainContent = () => {
  return (
    <section className="section main-section">
      <div className="section section-title">About Elizabeths Shop</div>

      <div className="main-sub-section">
        <div className="section section-first">
          <div className="text-block-container">
            <h2 className="first-title"> Our Vision</h2>
            <p className="first-summary">
              At Elizabeth's Thrift Store, we envision being the first choice
              for quality secondhand finds. Our curated selections reflect not
              just affordability but also our deep commitment to sustainability
              and community bonding.
            </p>
          </div>
          <div className="image-container">
            <figure>
              <img src={first_landingImage} loading="lazy"></img>
            </figure>
          </div>
        </div>
        <div className="section section-second">
          <div className="text-block-container">
            <h2 className="first-title"> Our Location</h2>
            <p className="first-summary">
              Nestled in the vibrant heart of WoodHaven, Elizabeth's Thrift
              Store is both a treasure trove and a testament to the community's
              diverse spirit. Easily accessible by public transport, our doors
              open to a world of sustainable shopping experiences.
            </p>
          </div>
          <div className="image-container">
            <figure>
              <img src={location_image} loading="lazy"></img>
            </figure>
          </div>
        </div>

        <div className="section section-third">
          <div className="text-block-container">
            <h2 className="first-title"> Our Social Media</h2>
            <p className="first-summary">
              Stay connected with us on social media for the latest on our
              unique collections, exclusive sales, and events. Beyond shopping,
              we also share insights into thrifting and sustainable living,
              celebrating our community's shared values.
            </p>
          </div>
          <div className="image-container">
            <figure>
              <img src={social_media} loading="lazy"></img>
            </figure>
          </div>
        </div>
      </div>
      <Social />
    </section>
  );
};

export default MainContent;
