import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Monographie: React.FC = () => {
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
          {t("figuig-monographie.title")}
        </h2>
        <div className="ligne w-25"></div>
      </div>
      <div className="preambule-content">
        




        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className=" p-3 w-50 text-center d-flex justify-content-center align-items-center">
              {t("figuig-monographie.about-title")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.about-p")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-monographie.aboutpeople-title")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.aboutpeople-p")}</p>
        </div>




        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-monographie.title-1")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.p-1")}</p>
          <ul>
            <li>{t("figuig-monographie.li-1")}</li>
            <li>{t("figuig-monographie.li-2")}</li>
            <li>{t("figuig-monographie.li-3")}</li>
            <li>{t("figuig-monographie.li-4")}</li>
          </ul>
          <p>{t("figuig-monographie.p-last")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4
              className="w-50 d-flex justify-content-center align-items-center"
              style={{ width: "30rem" }}
            >
              {t("figuig-monographie.title-2")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.p-2")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-monographie.title-3")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.p-3")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-monographie.title-4")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.p-4")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-monographie.title-5")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.p-5-1")}</p>
          <p>{t("figuig-monographie.p-5-2")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("figuig-monographie.title-7")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("figuig-monographie.p-7-1")}</p>
          <p>{t("figuig-monographie.p-7-2")}</p>
        </div>
      </div>
    </div>
  );
};

export default Monographie;
