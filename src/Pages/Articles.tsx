import React, { useEffect, useState } from "react";
import Imgstar from "../assets/Groupe 2064.png";
import img from "../assets/Groupe 2070.png";
import { useTranslation } from "react-i18next";
const Articles: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  const handleToggle = (articleId: number) => {
    setSelectedArticle((prevId) => (prevId === articleId ? null : articleId));
  };
  
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);


  const Articles = [
    {
      id: 16,
      img: img,
      title: t("articles.0.title"),
      date: t("articles.0.date"),
      desc: t("articles.0.desc"),
    },
    {
      id: 17,
      img: img,
      title: t("articles.1.title"),
      date: t("articles.1.date"),
      desc: t("articles.1.desc"),
    },
    {
      id: 18,
      img: img,
      title: t("articles.2.title"),
      date: t("articles.2.date"),
      desc: t("articles.2.desc"),
    },
    {
      id: 30,
      img: img,
      title: t("articles.3.title"),
      date: t("articles.3.date"),
      desc: t("articles.3.desc"),
    },
    {
      id: 163,
      img: img,
      title: t("articles.4.title"),
      date: t("articles.4.date"),
      desc: t("articles.4.desc"),
    },
    {
      id: 6,
      title: "ARTICLES DE LA CONSTITUTION"
    }
  ];

  return (
    <div className="container article-de-constitution my-5 text-center" dir={direction}>
      <div className="lignes my-5">
        <div className="ligne"></div>
        <h2>{t('articles.5.title')}</h2>
        <div className="ligne"></div>
      </div>
      <div className="Articles">
        {Articles.slice(0, 5).map((article, index) => (
          <div className="Article-container" key={index}>
            {selectedArticle !== article.id && (
              <div
                className={`Article ${
                  selectedArticle === article.id ? "rotated" : ""
                }`} // Add rotated class conditionally
                onClick={() => handleToggle(article.id)}
                style={{ marginBottom: "1rem" }}
              >
                <div className="Article-img-box">
                  <img src={article.img} alt="" />
                </div>
                <div className="Article-content">
                  <h2>{article.title}</h2>
                  <h2 className="d-flex flex-column">
                    <h2>{t('articles.5.article')}</h2>
                    <span className="fs-1 fw-bold">{article.id}</span>
                  </h2>
                </div>
              </div>
            )}
            {selectedArticle === article.id && (
              <div
                className="Article-content-container"
                onClick={() => handleToggle(article.id)}
              >
                <div className="Article-img-box">
                  <img src={Imgstar} alt="" />
                </div>
                <div className="Article-content">
                  <p className="text-dark">{article.desc}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
