import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Preambule: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);
  return (
    <div className="container my-5 preambule" dir={direction}>
      <div className="lignes my-5">
        <div className="ligne"></div>
        <h2>{t("preambule.title")}</h2>
        <div className="ligne"></div>
      </div>
      <div className="preambule-content">
        <p>{t("preambule.p-1")}</p>
        <p>{t("preambule.p-2")}</p>
        <p>{t("preambule.p-3")}</p>
        <p>{t("preambule.p-4")}</p>
        <ul>
        <li>{t("preambule.li-1")}</li>
        <li>{t("preambule.li-2")}</li>
        <li>{t("preambule.li-3")}</li>
        </ul>
        <p>{t("preambule.p-5")}</p>
        <p>{t("preambule.p-6")}</p>
        <p>{t("preambule.p-7")}</p>
        <p>{t("preambule.p-8")}</p>
        <p>{t("preambule.p-9")}</p>
        <p>{t("preambule.p-10")}</p>
        <p>{t("preambule.p-11")}</p>
        <p>{t("preambule.p-12")}</p>
      </div>
    </div>
  );
};

export default Preambule;
