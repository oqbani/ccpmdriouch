import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const OffredeService: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);
  return (
    <div className="my-5 d-flex flex-column justify-content-center align-items-center">
      <div className="lignes w-75 mb-4">
        <div className="ligne w-25"></div>
        <h6 className=" text-decoration-underline fs-5 w-100 d-flex justify-content-center" style={{fontSize: "1.2rem"}}>
          {t("cellule.title")}
        </h6>
        <div className="ligne w-25"></div>
      </div>
      <div className="Mission container p-3" dir={direction}>
        <div className="lignes mb-3">
          <div className="ligne"></div>
          <h6 className=" w-50 d-flex justify-content-center">
            {t("cellule.st-3")}
          </h6>
          <div className="ligne"></div>
        </div>
        <h5 className="mb-1 text-center fw-medium">{t("cellule.st-p")}</h5>
        <div className="Offre">
          <ul>
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
  );
};

export default OffredeService;
