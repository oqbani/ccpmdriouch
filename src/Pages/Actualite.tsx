import React, { useEffect, useState } from "react";
import img from "/Image 32.jpeg";
import { Link } from "react-router-dom";
import Actualites from "../Actualite.ts";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { apiImagesUrl, apiUrl } from "../Helpers/Api.tsx";
import slugify from "slugify";
import { format } from "date-fns";

const Actualite: React.FC = () => {
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

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 9;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const offset = currentPage * postsPerPage;
  const currentPosts = actualite.slice(offset, offset + postsPerPage);

  return (
    <div
      dir={direction}
      className="container d-flex justify-content-center align-items-center flex-column actualite-details-container my-5 page-actualite w-100"
    >
      <div
        className="page-actualite-top d-flex justify-content-center align-items-center"
        style={
          direction === "rtl"
            ? { width: "85%", height: "30rem", textAlign: "justify" }
            : { width: "85%", height: "30rem" }
        }
      >
        <div
          className="img-box w-75"
          style={{ minWidth: "100%", height: "30rem" }}
        >
          <img src={img} style={{ width: "100%", height: "30rem" }} alt="" />
        </div>
        <h1 style={{ fontSize: "3rem" }}>{t("actualite-news.title-1")}</h1>
      </div>

      <h1 className="my-4 fw-bold">{t("actualite-news.title-2")}</h1>
      <div
        className="news-container d-flex justify-content-center align-items-center flex-wrap gap-3"
        data-aos="fade-left"
      >
        {currentPosts
          .slice(0, currentPosts.length)
          .reverse()
          .map((act: any) => (
            <div key={act.id} className="news-content mb-3">
              <div className="img-news d-flex justify-content-center align-items-center">
                <img
                  className="text-center"
                  src={`${apiImagesUrl}/${act.imageName}`}
                  alt=""
                />
              </div>
              <div className="news-content-text p-2">
                <Link to={`/Actualite/${slugify(act.title, "-")}`}>
                  <h6 className=" fw-bold">
                    {direction === "ltr" ? act.title : act.titreArabe}
                  </h6>
                </Link>
                <h6 className="date">{format(act.createdAt, "yyyy-MM-dd")}</h6>
                <Link
                  to={`/Actualite/${slugify(act.title, "-")}`}
                  className=" text-decoration-none"
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
                        : {
                            position: "absolute",
                            right: "1rem",
                            bottom: "1rem",
                          }
                    }
                  >
                    {t("Slider.Afficher-plus")}
                  </span>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(Actualites.length / postsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={6}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default Actualite;
