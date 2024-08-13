import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Avotreservices: React.FC = () => {
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
        <div className="ligne"></div>
        <h2 className="w-100 d-flex justify-content-center align-items-center">
          {t("service.title")}
        </h2>
        <div className="ligne"></div>
      </div>
      <div className="preambule-content">
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("service.title-1")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("service.p-1")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4
              className=" p-3 text-center w-100 d-flex justify-content-center align-items-center"
              style={{ width: "30rem" }}
            >
              {t("service.title-2")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("service.p-2")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("service.title-3")}
            </h4>
            <div className="ligne"></div>
          </div>
          <p>{t("service.p-3-1")}</p>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("service.title-4")}
            </h4>
            <div className="ligne"></div>
          </div>
          <ul>
            <li className="service-principe">{t("service.p-4-1")}</li>
            <li className="service-principe">{t("service.p-4-2")}</li>
            <li className="service-principe">{t("service.p-4-3")}</li>
          </ul>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("service.title-5")}
            </h4>
            <div className="ligne"></div>
          </div>
          <ul>
            <li>{t("service.p-5-1")}</li>
            <li>{t("service.p-5-2")}</li>
            <li>{t("service.p-5-3")}</li>
          </ul>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("service.title-6")}
            </h4>
            <div className="ligne"></div>
          </div>
          <ul>
            <li>{t("service.p-6-1")}</li>
            <li>{t("service.p-6-2")}</li>
            <li>{t("service.p-6-3")}</li>
          </ul>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("service.title-7")}
            </h4>
            <div className="ligne"></div>
          </div>
          <ul>
            <li>{t("service.p-7-1")}</li>
            <li>{t("service.p-7-2")}</li>
            <li>{t("service.p-7-3")}</li>
            <li>{t("service.p-7-4")}</li>
          </ul>
        </div>
        <div className="service">
          <div className="lignes my-3">
            <div className="ligne"></div>
            <h4 className="w-50 d-flex justify-content-center align-items-center">
              {t("service.title-8")}
            </h4>
            <div className="ligne"></div>
          </div>
          <ul>
            <li>{t("service.p-8-1")}</li>
            <li>{t("service.p-8-2")}</li>
            <li>{t("service.p-8-3")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Avotreservices;
