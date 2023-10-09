import React, { useState } from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setActiveLanguage(language);
  };

  return (
    <div className="header-container">
      <div className="header-navigation">
        <button
          className={activeLanguage === "en" ? "active-language" : ""}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
        <button
          className={activeLanguage === "es" ? "active-language" : ""}
          onClick={() => handleLanguageChange("es")}
        >
          Español
        </button>

      </div>
        <div className="nav-links">
          {/* <a href="/home">{t("home")}</a> */}
          {/* <a href="/faq">{t("faq")}</a> */}
        </div>

      <div className="header-title">{t("shopTitle")}</div>
      <div className="header-message">{t("headerMessage")}</div>
      <div className="header-submessage">{t("headerSubMessage")}</div>
    </div>
  );
};

export default Header;
