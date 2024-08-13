import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/mdcre-new-logo-png-01.png";
import captureImg from "../assets/Groupe de masques 17.png";
import { useTranslation } from "react-i18next";

const Snia: React.FC = () => {

  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("global")

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr")
    window.scrollTo(0, 0);
  }, [i18n.language])

  const link = direction === 'ltr' ? (
    <a target="_blank" href="https://marocainsdumonde.gov.ma/wp-content/uploads/2018/02/Strate%CC%81gie-Nationale-dimmigration-et-dAsile-ilovepdf-compressed.pdf">
      <button>{t("snia.consulter")}</button>
    </a>
  ) : (
    <a target="_blank" href="https://marocainsdumonde.gov.ma/wp-content/uploads/2019/01/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D8%AA%D9%8A%D8%AC%D9%8A%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9-%D9%84%D9%84%D9%87%D8%AC%D8%B1%D8%A9-%D9%88%D8%A7%D9%84%D9%84%D8%AC%D9%88%D8%A1.pdf">
      <button>{t("snia.consulter")}</button>
    </a>
  )

  return (
    <div className="container snia-container d-flex justify-content-center flex-column align-items-center my-5">
      <div className="lignes w-100 mb-5">
        <div className="ligne w-25"></div>
        <h2 className=" text-center w-100">{t("snia.title")}</h2>
        <div className="ligne w-25"></div>
      </div>
      <div className="snia gap-3">
        <div className="snia-img">
          <img src={Img} alt="" />
        </div>
        <div className="snia-content">
          <img src={captureImg} alt="" />
          <h1>
            <Link to="" className="text-white">
              {t("snia.strategie-title")}
            </Link>
          </h1>
        </div>
        <div className="my-2 d-flex justify-content-center gap-3 align-items-center">
          {link}
        </div>
      </div>
    </div>
  );
};

export default Snia;
