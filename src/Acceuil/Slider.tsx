import "swiper/swiper-bundle.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { apiImagesUrl, apiUrl } from "../Helpers/Api";
import { htmlToText } from "html-to-text";
import slugify from "slugify";
import { format } from "date-fns/format";
import { Article } from "../Helpers/Type";
const Slider: React.FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  const [actualite, setActualite] = useState([])
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
  return (
    <div
      className="actu"
      style={{ marginLeft: "5%", width: "90%", zIndex: "1" }}
    >
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="mySwiper"
      >
        {actualite.map((act: Article) => (
          <SwiperSlide key={act.id}>
            <div className="actu-slider-container">
              <div className="actu-slider">
                <img src={`${apiImagesUrl}/${act.imageName}`} alt="" />
              </div>
              <div
                className="actu-slider"
                style={
                  direction === "rtl"
                    ? { textAlign: "end" }
                    : { textAlign: "justify" }
                }
              >
                <li>
                  <Link to={`/Actualite/${ slugify(act.title, '-') }`}>
                    <h5 className=" fw-bold" style={{ fontSize: "1.3rem" }}>
                      {direction === "ltr" ? act.title : act.titreArabe}
                    </h5>
                  </Link>
                </li>
                <h6 className="date">{format(act.createdAt, "yyyy-MM-dd")}</h6>
                <li className="actu-description mt-3">
                  <div
                    style={
                      direction === "rtl"
                        ? {
                            fontSize: ".9rem",
                            textAlign: "justify",
                            textAlignLast: "justify",
                            direction: "rtl",
                          }
                        : {
                            fontSize: ".9rem",
                            textAlign: "justify",
                          }
                    }
                  >
                    {direction === "ltr" ? htmlToText(act.content.slice(0, 700)) : htmlToText(act.ContenuArabe.slice(0, 700))}...
                  </div>

                  <Link to={`/Actualite/${slugify(act.title, '-')}`}>
                    <p className="paragraph bg-danger text-center text-white">
                      {t("Slider.Afficher-plus")}
                    </p>
                  </Link>
                </li>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="actu-carousel-slider-container d-flex gap-3">
        <Swiper
          onSwiper={(swiper: any) => setThumbsSwiper(swiper)}
          loop={true}
          spaceBetween={5}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper2"
        >
          {actualite.map((act: Article, index) => (
            <SwiperSlide>
              <div key={index} className="actu-carousel-container d-flex">
                <div className="actu-carousel">
                  <img src={`${apiImagesUrl}/${act.imageName}`} alt="" />
                </div>
                <div className="actu-carousel d-flex gap-0 flex-column">
                  <li>
                    <p className=" fw-bold">{direction === "ltr" ? act.title : act.titreArabe}</p>
                  </li>
                  <li>{format(act.createdAt, "yyyy-MM-dd")}</li>
                  <li>{direction === "ltr" ? act.content.slice(0, 400) : act.ContenuArabe.slice(0, 400)}... </li>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
