import React from "react";
import "./MainContent.css";
import first_landingImage from "../assets/Boots_And_SHOES.webp";
import location_image from "../assets/Male_Flannels.webp";
import social_media from "../assets/Shoes_on_Shelf.webp";
import Social from "./Social";
import { useTranslation } from "react-i18next";

const MainContent = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="section main-section">
      <div className="section section-title">{t('mainContent.aboutTitle')}</div>

      <div className="main-sub-section">
        <div className="section section-first">
          <div className="text-block-container">
            <h2 className="first-title">{t('mainContent.visionTitle')}</h2>
            <p className="first-summary">
              {t('mainContent.visionDescription')}
            </p>
          </div>
          <div className="image-container">
          <figure className="image-subcontainer">
              <img src={first_landingImage} loading="lazy"></img>
            </figure>
          </div>
        </div>
        <div className="section section-second">
          <div className="text-block-container">
            <h2 className="first-title">{t('mainContent.locationTitle')}</h2>
            <p className="first-summary">
              {t('mainContent.locationDescription')}
            </p>
          </div>
          <div className="image-container">
            <figure className="image-subcontainer">
              <img src={location_image} loading="lazy"></img>
            </figure>
          </div>
        </div>

        <div className="section section-third">
          <div className="text-block-container">
            <h2 className="first-title">{t('mainContent.socialMediaTitle')}</h2>
            <p className="first-summary">
              {t('mainContent.socialMediaDescription')}
            </p>
          </div>
          <div className="image-container">
          <figure className="image-subcontainer">
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
