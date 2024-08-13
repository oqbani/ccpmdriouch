import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { apiImagesUrl, apiUrl } from "../Helpers/Api";
import slugify from "slugify";
import { htmlToText } from "html-to-text";
import { Article } from "../Helpers/Type";
import { format } from "date-fns";
// import { format } from "date-fns";

const ActualiteDetails: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  const [actualite, setActualite] = useState<Article[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/posts`);
      setActualite(response.data["hydra:member"]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { title } = useParams<{ title?: string }>();

  if (!title) {
    return <div>Error: Title not provided</div>;
  }

  const slug = slugify(title, "-");

  if (!slug) {
    return <div>Error: Article slug not provided</div>;
  }

  const actu = actualite.find((p) => slugify(p.title, "-") === slug);

  if (!actu) {
    return <div>Error: Actualite not found</div>;
  }
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <div
      className="container h-100 actualite-details-container mb-5 d-flex justify-content-center flex-column align-items-center"
      dir={direction}
    >
      <div
        key={actu.id}
        className="d-flex gap-3 justify-content-center align-items-center flex-column text-center my-5 actualite-details-content mb-3"
      >
        <div className="img-actualite">
          <img
            className="text-center"
            src={`${apiImagesUrl}/${actu.imageName}`}
            alt=""
          />
        </div>
        <div className="actualite-details-content-text">
          <ul>
            <Link to="/Actualite">
              <h1 className=" fs-3 fw-bold">
                {direction === "ltr" ? actu.title : actu.titreArabe}
              </h1>
            </Link>
            {/* <h6 className="date">{format(actu.createdAt, "yyyy-MM-dd")}</h6> */}
            <p
              style={{
                textAlign: "justify",
                textJustify: "inter-word",
                fontSize: "11pt",
              }}
            >
              {direction === "ltr"
                ? htmlToText(actu.content)
                : htmlToText(actu.ContenuArabe)}
            </p>
          </ul>
        </div>
      </div>
      <h1 className="my-4 fw-bold">{t("actualite-news.title-2")}</h1>
      <div
        className="news-container d-flex justify-content-center align-items-center flex-wrap gap-3"
        data-aos="fade-left"
      >
        {actualite.slice(0, actualite.length).map((act, index) => (
          <div key={index} className="news-content mb-3">
            <div className="img-news d-flex justify-content-center align-items-center">
              <img
                className="text-center"
                src={`${apiImagesUrl}/${act.imageName}`}
                alt=""
              />
            </div>
            <div className="news-content-text p-2">
              <Link to={`/Actualite/${act.title}`} onClick={handleClick}>
                <h6 className=" fw-bold">
                  {direction === "ltr" ? act.title : act.titreArabe}
                </h6>
              </Link>
              <h6 className="date">{format(act.createdAt, "yyyy-MM-dd")}</h6>
              <Link
                to={`/Actualite/${act.title}`}
                className=" text-decoration-none" onClick={handleClick}
              >
                <span
                  className="lire-plus-btn"
                  style={
                    direction === "rtl"
                      ? {
                          position: "absolute",
                          left: "1rem",
                          width: "7rem",
                          bottom: "1rem",
                        }
                      : { position: "absolute", right: "1rem", bottom: "1rem" }
                  }
                >
                  {t("Slider.Afficher-plus")}
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActualiteDetails;
