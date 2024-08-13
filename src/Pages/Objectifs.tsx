import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Objectifs: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);
  return (
    <div className=" my-5 d-flex flex-column justify-content-center align-items-center">
      <div className="lignes w-75 mb-5">
        <div className="ligne w-25"></div>
        <h6 className=" text-decoration-underline fs-5 w-100 d-flex justify-content-center" style={{fontSize: "1.2rem"}}>
          {t("cellule.title")}
        </h6>
        <div className="ligne w-25"></div>
      </div>
      <div className="Mission objectifs py-5 p-2" style={{maxWidth: "80%", background: "#e4e4e4ea"}} dir={direction}>
        <div className="lignes mb-3">
          <div className="ligne"></div>
          <h6>{t("cellule.st-2")}</h6>
          <div className="ligne"></div>
        </div>
        <div className="Objectifs">
          <h5 className="mb-4 text-center fw-medium">{t("cellule.p-2")}</h5>
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
  );
};

export default Objectifs;
