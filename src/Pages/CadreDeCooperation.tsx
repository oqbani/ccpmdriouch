import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const CadreDeCooperation: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);
  return (
    <div className="container my-5 presentation" dir={direction}>
      <div className="lignes w-100 mb-5">
        <div className="ligne"></div>
        <h5 className=" fs-5 text-decoration-underline">
          {t("cadre-c.title")}
        </h5>
        <div className="ligne"></div>
      </div>
      <div
        className="cooperations fw-semibold d-flex justify-content-center align-items-center flex-column"
        style={{ maxWidth: "65rem" }}
      >
        <div className="cooperation">
          <p>{t("cadre-c.p-1")}</p>

          <p>{t("cadre-c.p-2")}</p>
        </div>

        <div className="cooperation-strategie">
          <div className="d-flex gap-2 justify-content-center align-items-center flex-wrap">
            <p>
              <span></span>
              {t("cadre-c.p-3")}
            </p>
            <p>
              <span></span>

              {t("cadre-c.p-4")}
            </p>
          </div>
        </div>
        <div className="cooperation">
          <p>{t("cadre-c.p-5")}</p>
          <p>{t("cadre-c.p-6")}</p>
          <ol>
            <li>{t("cadre-c.p-7")}</li>
            <li>{t("cadre-c.p-8")}</li>
            <li>{t("cadre-c.p-9")}</li>
          </ol>
          <p>{t("cadre-c.p-10")}</p>
          <p>{t("cadre-c.p-11")}</p>
        </div>
      </div>
    </div>
  );
};

export default CadreDeCooperation;
