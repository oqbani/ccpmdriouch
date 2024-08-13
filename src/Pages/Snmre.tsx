import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/mdcre-new-logo-png-01.png";
import captureImg from "../assets/Groupe de masques 59.png";
import { useTranslation } from "react-i18next";
import pdf_AR from "../assets/الاستراتيجية الوطنية لمغاربة العالم.pdf";
const Snmre: React.FC = () => {
  const handleDownload = () => {
    const pdfUrl = pdf_AR;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "الاستراتيجية الوطنية لمغاربة العالم.pdf";
    link.click();
  };

  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);

  const link =
    direction === "ltr" ? (
      <a
        target="_blank"
        href="https://marocainsdumonde.gov.ma/wp-content/uploads/2018/02/Strate%CC%81gie-Nationale-en-faveur-des-Marocains-du-Monde-Fr.pdf"
      >
        <button>{t("snmre.consulter")}</button>
      </a>
    ) : (
      <a target="_blank" href="" onClick={handleDownload}>
        <button>{t("snmre.consulter")}</button>
      </a>
    );

  return (
    <div
      className="container snia-container d-flex justify-content-center flex-column align-items-center my-5"
      dir={direction}
    >
      <div className="lignes w-100 mb-5">
        <div className="ligne w-25"></div>
        <h2 className=" text-center w-100">{t("snmre.title")}</h2>
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
              {t("snmre.strategie-title")}
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

export default Snmre;
