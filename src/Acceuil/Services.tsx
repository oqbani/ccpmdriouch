import React, { useEffect, useState } from "react";
import img from "/service-driouch.jpeg";
import { Link } from "react-router-dom";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

const Services: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);
  
  return (
    <div className="services my-4" style={{ marginLeft: "5%", width: "90%" }} dir={direction}>
      <div
        className="top-services d-flex align-items-center mb-4 gap-3"
        data-aos="fade-right"
      >
        <div className="avant-ligne"></div>
        <h1 className=" text-decoration-underline">
          <Link to={"/avotreservices"}>{t("services.title")}</Link>
        </h1>
        <div className="apres-ligne"></div>
      </div>
      <div className="services-content d-flex gap-5" data-aos="fade-left">
        <div className="img-service">
          <img src={img} alt="" />
        </div>
        <div className="services-content-text" data-aos="fade-right">
          <Link to="/avotreservices">
            <h4 className="">{t("services.soustitle")}</h4>
          </Link>
          <p data-aos="fade-right">
            {t("services.text")}
            <Link to={"/avotreservices"} className=" text-decoration-none">
              <span className="afficher-plus"> {t("services.btn")}</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
