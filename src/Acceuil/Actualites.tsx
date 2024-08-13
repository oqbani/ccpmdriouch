import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/mdcre-new-logo-png-01.png";
import captureImg from "../assets/Groupe de masques 17.png";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { apiImagesUrl, apiUrl } from "../Helpers/Api";
import { htmlToText } from "html-to-text";
import slugify from "slugify";
import { format } from "date-fns";

const Actualités: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  
  const [actualite, setActualite] = useState([]);
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

  // date

  format(new Date(2014, 1, 11), "yyyy-MM-dd");

  return (
    <div
      className="actualite"
      style={{ marginLeft: "5%", width: "90%" }}
      dir={direction}
    >
      <div
        className="top-services d-flex align-items-center mb-4 gap-3"
        data-aos="fade-right"
      >
        <div className="avant-ligne"></div>
        <h1 className="text-decoration-underline">{t("actualite.title")}</h1>
        <div className="apres-ligne"></div>
      </div>
      <div className="actualites-content d-flex">
        <div className="actualite-container" data-aos="fade-left">
          {actualite
            .slice(- 2).reverse()
            .map((act: any) => (
              <div key={act.id} className="actualite-content mb-3">
                <div className="img-actualite">
                  <img
                    className="text-center"
                    src={`${apiImagesUrl}/${act.imageName}`}
                    alt=""
                  />
                </div>
                <div className="actualite-content-text">
                  <ul>
                    <Link to={`/Actualite/${slugify(act.title, "-")}`}>
                      <h6 className=" fw-bold">
                        {direction === "ltr" ? act.title : act.titreArabe}
                      </h6>
                    </Link>
                    <h6 className="date">{format(act.createdAt, "yyyy-MM-dd")}</h6>
                    <p
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                        fontSize: "11pt",
                      }}
                    >
                      {direction === "ltr"
                        ? htmlToText(act.content.slice(0, 410))
                        : htmlToText(act.ContenuArabe.slice(0, 407))}...
                      <Link
                        to={`/Actualite/${slugify(act.title, "-")}`}
                        className=" text-decoration-none"
                      >
                        <span className="afficher-plus">
                         {" "}{t("services.btn")}
                        </span>
                      </Link>
                    </p>
                    <Link
                      to={`/Actualite/${slugify(act.title, "-")}`}
                      className=" text-decoration-none"
                    >
                      <span className="afficher-plus-btn">
                        {t("Slider.Afficher-plus")}
                      </span>
                    </Link>
                  </ul>
                </div>
              </div>
            ))}
          <span className="tous-actualites">
            <Link
              to={"/Actualite"}
              className=" text-white text-decoration-none"
            >
              {t('tous.tous')}
            </Link>
          </span>
        </div>
        <div className="actualite-right gap-3" data-aos="fade-right">
          <div className="actualite-right-img">
            <img src={Img} alt="" />
          </div>
          <div className="actualite-right-content">
            <img src={captureImg} alt="" />
            <h5>
              <Link
                to="/cadre-juridique/snia"
                className=" d-flex justify-content-center align-items-center text-white"
                style={{ fontWeight: "800" }}
              >
                {t("actualite.strategie-title")}
              </Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actualités;
