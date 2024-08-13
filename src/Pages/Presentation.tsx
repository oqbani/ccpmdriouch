import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const Presentation:React.FC = () => {
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
        <div className="ligne w-25"></div>
        <h2 className=' w-100 text-center'>{t("figuig-presentation.title")}</h2>
        <div className="ligne w-25"></div>
      </div>
      <div className="preambule-content">
        <p>{t("figuig-presentation.p-1")}</p>
        <p>{t("figuig-presentation.p-2")}</p>
        <p>{t("figuig-presentation.p-3")}</p>
        <p>{t("figuig-presentation.p-4")}</p>
        <p>{t("figuig-presentation.p-5")}</p>
      </div>
    </div>
  )
}

export default Presentation
