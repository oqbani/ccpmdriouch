import React, { useEffect, useState } from "react";
import logo from "../assets/A-PRIM.png";
import Img1 from "../assets/AFD.png"
import Img2 from "../assets/Logo Expertise France - Fond transparent.png"
import Img3 from "../assets/Groupe 1730.png"
import Img4 from "../assets/Logo CRO.png"
import Img5 from "../assets/Rectangle 124.png"
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";


const AvantFooter: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  return (
    <div className="avant-footer mt-5 py-5" dir={direction}>
      <div
        className="avant-footer-top d-flex justify-content-center align-items-center gap-5"
      >
        <h1 className="text-center fw-bolder" style={{fontSize: "22pt"}}>
        {t('avant-footer.head')}
        </h1>
        <img src={logo} alt="" />
      </div>
      <div className="avant-footer-bottom d-flex gap-5 mt-5">
        <div className="avant-footer-card d-flex flex-column">
          <h5>{t('avant-footer.partenariat')}</h5>
          <img src={Img1} alt="" />
        </div>
        <div className="avant-footer-card d-flex flex-column">
          <h5>{t('avant-footer.miseonoeuvre')}</h5>
          <img src={Img2} alt="" />
        </div>
        <div className="avant-footer-card d-flex flex-column">
          <h5>{t('avant-footer.partenariat')}</h5>
          <div className="avant-footer-card-imgs d-flex gap-1 mb-2">
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
            <img src={Img5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvantFooter;
