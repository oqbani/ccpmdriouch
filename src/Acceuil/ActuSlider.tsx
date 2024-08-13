import "swiper/swiper-bundle.css";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Autoplay, FreeMode, Thumbs } from "swiper/modules";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ActuSlider: React.FC = () => {

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

  const actualite = [
    {
      id: t('actu-slider.1.id'),
      img: t('actu-slider.1.img'),
      title: t('actu-slider.1.title'),
      slug: t('actu-slider.1.slug'),
      date: t('actu-slider.1.date'),
      desc: t('actu-slider.1.desc')
    },
    {
      id: t('actu-slider.2.id'),
      img: t('actu-slider.2.img'),
      title: t('actu-slider.2.title'),
      slug: t('actu-slider.2.slug'),
      date: t('actu-slider.2.date'),
      desc: t('actu-slider.2.desc')
    },
    {
      id: t('actu-slider.3.id'),
      img: t('actu-slider.3.img'),
      title: t('actu-slider.3.title'),
      slug: t('actu-slider.3.slug'),
      date: t('actu-slider.3.date'),
      desc: t('actu-slider.3.desc')
    }
  ]

  return (
    <div className="actu" style={{ marginLeft: "5%", width: "90%", zIndex: "1" }} dir={direction}>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay, FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {actualite.map((act) => (
          <SwiperSlide key={act.id}>
            <div className="actu-slider-container">
              <div className="actu-slider">
                <img src={act.img} alt="" />
              </div>
              <div className="actu-slider">
                <li>
                  <Link to={`/Actualite/${act.slug}`}>
                    <h5 className=" fw-bold" style={{ fontSize: "1.3rem" }}>
                      {act.title}
                    </h5>
                  </Link>
                </li>
                <li className="fw-semibold">{act.date}</li>
                <li className="actu-description mt-3">
                  <div style={{ fontSize: ".9rem" }}>
                    {act.desc.slice(0, 700)}...
                  </div>

                  <Link to={`/Actualite/${act.slug}`}>
                    <p className="paragraph bg-danger text-center text-white">
                      {t('Slider.Afficher-plus')}
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
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Thumbs]}
          className="mySwiper"
        >
          {actualite.map((act, index) => (
            <SwiperSlide>
              <div key={index} className="actu-carousel-container d-flex">
                <div className="actu-carousel">
                  <img src={act.img} alt="" />
                </div>
                <div className="actu-carousel d-flex gap-0 flex-column">
                  <li>
                    <p className=" fw-bold">{act.title}</p>
                  </li>
                  <li>{act.date}</li>
                  <li>{act.desc.slice(0, 100)}... </li>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ActuSlider;
