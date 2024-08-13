import React, { useEffect } from "react";
import Services from "./Services";
import Actualites from "./Actualites";
import ContactezNous from "./ContactezNous";
import AvantFooter from "./AvantFooter";
import Slider from "./Slider";
import { ToastContainer } from "react-toastify";
import { useLocation } from "react-router-dom";

const Acceuil: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contacteznous") {
      const contactSection = document.getElementById("contacteznous");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  

  return (
    <div id="accueil-top">
      <div className="container d-flex justify-content-center align-content-center flex-column">
        <ToastContainer position="top-right" />
        <Slider />
        <Services />
        <Actualites />
        <ContactezNous />
      </div>
      <AvantFooter />
    </div>
  );
};

export default Acceuil;
