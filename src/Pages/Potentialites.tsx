import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Potentialites: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);
  return (
    <div className="container my-5 preambule" dir={direction}>
      <div className="lignes mb-5">
        <div className="ligne w-25"></div>
        <h2 className="w-100 d-flex justify-content-center align-items-center">
          {t("figuig-potentialites.title")}
        </h2>
        <div className="ligne w-25"></div>
      </div>
      <div className="preambule-content">
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-potentialites.title-1")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-potentialites.p-1")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4
              className="w-50 d-flex justify-content-center align-items-center"
              style={{ width: "30rem" }}
            >
              {t("figuig-potentialites.title-2")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-potentialites.p-2-1")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-potentialites.title-3")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-potentialites.p-3")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-potentialites.title-4")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-potentialites.p-4-1")}</p>
          <p>{t("figuig-potentialites.p-4-2")}</p>
        </div>
      </div>
    </div>
  );
};

export default Potentialites;
