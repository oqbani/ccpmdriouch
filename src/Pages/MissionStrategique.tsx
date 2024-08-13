import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const MissionStrategique: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);
  return (
    <div className="my-5 d-flex justify-content-center align-items-center flex-column">
      <div className="lignes w-75 mb-5">
        <div className="ligne w-25"></div>
        <h6 className=" text-decoration-underline w-100 d-flex justify-content-center" style={{fontSize: "1.2rem"}}>
          {t("cellule.title")}
        </h6>
        <div className="ligne w-25"></div>
      </div>
      <div className="Mission container p-3" dir={direction}>
        <div className="lignes">
          <div className="ligne"></div>
          <h6 className=" w-50 d-flex justify-content-center">
            {t("cellule.st-1")}
          </h6>
          <div className="ligne"></div>
        </div>
        <div className="Strategie">
          <p>{t("cellule.p-1")}</p>
        </div>
        <h5 className="fw-medium text-center mb-5">{t("cellule.p-1-2")}</h5>
        <div className="Strategies">
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
    </div>
  );
};

export default MissionStrategique;
