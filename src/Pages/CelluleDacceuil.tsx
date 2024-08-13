import Aos from "aos";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const CelluleDacceuil: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const elementId = location.hash.substring(1);
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    Aos.init({ duration: 1000 });
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);

  

  return (
    <div className="Mission-container my-5" dir={direction}>
      <div className="lignes my-4" data-aos="fade-bottom">
        <div className="ligne"></div>
        <h4 className=" text-decoration-underline">{t("cellule.big-title")}</h4>
        <div className="ligne"></div>
      </div>
      <div className="Missions mb-4">
        <div
          className="Mission my-4 container "
          id="missionstrategique"
          data-aos="fade-bottom"
        >
          <div className="lignes mb-3" data-aos="fade-left">
            <div className="ligne"></div>
            <h6>{t("cellule.st-1")}</h6>
            <div className="ligne"></div>
          </div>
          <div className="Strategie" data-aos="fade-right">
            <p>{t("cellule.p-1")}</p>
          </div>
          <h5 className="my-4 fw-medium">{t("cellule.p-1-2")}</h5>
          <div className="Strategies mt-3" data-aos="fade-left">
            <div className=" d-flex gap-5 justify-content-center align-items-center flex-wrap">
              <p>
                <span>1</span>
                {t("cellule.p-MRE-1")}
              </p>
              <p>
                <span>2</span>
                {t("cellule.p-MRE-2")}
              </p>
              <p>
                <span>3</span>
                {t("cellule.p-MRE-3")}
              </p>
              <p>
                <span>4</span>
                {t("cellule.p-MRE-4")}
              </p>
            </div>
          </div>
        </div>
        <div
          className=" my-5 d-flex justify-content-center align-items-center"
          style={{ background: "#e4e4e4ea" }}
        >
          <div
            className="Mission objectifs py-5"
            style={{ maxWidth: "80%" }}
            dir={direction}
          >
            <div className="lignes mb-3">
              <div className="ligne"></div>
              <h6>{t("cellule.st-2")}</h6>
              <div className="ligne"></div>
            </div>
            <div className="Objectifs">
              <h5 className="mb-4 fw-medium">{t("cellule.p-2")}</h5>
              <div className=" d-flex gap-5 justify-content-center align-items-center flex-wrap">
                <p>
                  <span>1</span>
                  {t("cellule.p-obj-1")}
                </p>
                <p>
                  <span>2</span>
                  {t("cellule.p-obj-2")}
                </p>
                <p>
                  <span>3</span>
                  {t("cellule.p-obj-3")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Mission my-4 container" id="offredeservice">
          <div className="lignes mb-3" data-aos="fade-right">
            <div className="ligne"></div>
            <h6>{t("cellule.st-3")}</h6>
            <div className="ligne"></div>
          </div>
          <h5 className="mb-4 fw-medium">{t("cellule.st-p")}</h5>
          <div className="Offre" data-aos="fade-right">
            <ul data-aos="fade-left">
              <li>◆ {t("cellule.p-3-1")}</li>
              <li>◆ {t("cellule.p-3-2")}</li>
              <li>◆ {t("cellule.p-3-3")}</li>
              <li>
                ◆ {t("cellule.p-3-4")}
                <ul>
                  <li>
                    <span>◆</span> {t("cellule.p-3-5")}{" "}
                  </li>
                  <li>
                    <span>◆</span> {t("cellule.p-3-6")}
                  </li>
                  <li>
                    <span>◆</span> {t("cellule.p-3-7")}
                  </li>
                  <li>
                    <span>◆</span> {t("cellule.p-3-8")}
                  </li>
                </ul>
              </li>
              <li>
                ◆ {t("cellule.p-3-9")}
                <ul>
                  <li>
                    <span>◆</span> {t("cellule.p-3-10")}
                  </li>
                  <li>
                    <span>◆</span> {t("cellule.p-3-11")}
                  </li>
                  <li>
                    <span>◆</span> {t("cellule.p-3-12")}
                  </li>
                  <li>
                    <span>◆</span> {t("cellule.p-3-13")}
                  </li>
                  <li>
                    <span>◆</span> {t("cellule.p-3-14")}
                  </li>
                </ul>
              </li>
              <li></li>
              <li>◆ {t("cellule.p-3-15")}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelluleDacceuil;
