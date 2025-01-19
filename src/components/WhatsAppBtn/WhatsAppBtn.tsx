import  { useState } from "react";
import "./WhatsAppBtn.css";
import whatsApp from "../../assets/whatsapp.svg";
import { useLanguage } from "../../LanguageContext";
import englishFlag from "../../assets/uk_4628638.svg";
import arabicFlag from "../../assets/circle_12366324.svg";
import en from "../../locales/en";
import ar from "../../locales/ar";

const WhatsAppBtn = () => {
  const { language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown visibility
  const translations = language === "en" ? en : ar;

  const handleLanguageChange = (lang: "en" | "ar") => {
    setLanguage(lang);
    setDropdownOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="whatsapp-container">
      <div className="language-circle">
        <div className="custom-dropdown">
          <div
            className="selected"
            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
          >
            <img
              src={language === "en" ? englishFlag : arabicFlag}
              alt={language === "en" ? "English" : "Arabic"}
              className="dropdown-icon"
            />
          </div>
          {dropdownOpen && (
            <div className="dropdown-options">
              <div
                className="option"
                onClick={() => handleLanguageChange("en")}
              >
                <img src={englishFlag} alt="English" className="dropdown-icon" />
                {translations.English}
              </div>
              <div
                className="option"
                onClick={() => handleLanguageChange("ar")}
              >
                <img src={arabicFlag} alt="Arabic" className="dropdown-icon" />
                {translations.Arabic}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="whatsapp-btn">
        <a
          href="https://wa.me/971585665592"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsApp} alt="WhatsApp" className="whatsapp-icon" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppBtn;
