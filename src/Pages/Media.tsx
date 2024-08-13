import React, { useEffect, useState } from "react";
import img from "/Image 3.jpeg";
import { useTranslation } from "react-i18next";
import { MediaType } from "../Helpers/Type";
import axios from "axios";
import { apiImagesMediaUrl, apiUrl } from "../Helpers/Api";

const Media: React.FC = () => {
  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");
  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);

  //   Media
  const [media, setMedia] = useState<MediaType[]>([]);


  const toggleVideo = (id: number) => {
    const videoElement = document.getElementById(
      `video-${id}`
    ) as HTMLVideoElement;
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  };

  // MEDIA VEDIOS
  const fetchDataVedios = async () => {
    try {
      const response = await axios.get(`${apiUrl}/media`);
      setMedia(response.data["hydra:member"]);
      console.log(media);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDataVedios();
  }, []);

  // TOGGLE
  const [showVideos, setShowVideos] = useState(true);
  const [showImages, setShowImages] = useState(false);

  const handleVideosClick = () => {
    setShowVideos(true);
    setShowImages(false);
  };

  const handleImagesClick = () => {
    setShowVideos(false);
    setShowImages(true);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center flex-column actualite-details-container my-5 page-actualite w-100"
      dir={direction}
    >
      <div
        className="page-actualite-top d-flex justify-content-center align-items-center"
        style={{ width: "85%", maxHeight: "30rem" }}
        dir={direction}
      >
        <div
          className="img-box w-75"
          style={{ minWidth: "100%", maxHeight: "30rem" }}
        >
          <img src={img} style={{ width: "100%", maxHeight: "30rem" }} alt="" />
        </div>
        <h1 style={{ fontSize: "3rem" }}>
          {t("actualite-mediatheque.title-1")}
        </h1>
      </div>
      <div className="media-btns d-flex gap-5 my-5">
        <button
          onClick={handleVideosClick}
          style={
            showVideos
              ? { background: "#1f2241", color: "#fff", padding: "1rem 2rem" }
              : { background: "#fff", color: "#1f2241", padding: "1rem 2rem" }
          }
        >
          {t("actualite-mediatheque.title-2")}
        </button>
        <button
          onClick={handleImagesClick}
          style={
            showImages
              ? { background: "#1f2241", color: "#fff", padding: "1rem 2rem" }
              : { background: "#fff", color: "#1f2241", padding: "1rem 2rem" }
          }
        >
          {t("actualite-mediatheque.title-3")}
        </button>
      </div>

      {showVideos && (
        <div className="videos d-flex flex-column justify-content-center align-items-center">
          <div className="news-container d-flex justify-content-center align-items-center flex-wrap gap-4">
            {media.slice().reverse().map(
              (media) =>
                media.mediaType !== "Image" &&
                media.files.map((md, index) => (
                  <div
                    key={index}
                    className="news-content media-content mb-3"
                  >
                    <div className="img-news d-flex justify-content-center align-items-center">
                      <video
                        className="text-center"
                        src={`${apiImagesMediaUrl}//Media/${md.fileName}`}
                        controls
                        key={index}
                        onClick={() => toggleVideo(index)}
                      />
                    </div>
                  </div>
                ))
            )}
          </div>
          
        </div>
      )}

      {showImages && (
        <div className="images d-flex flex-column justify-content-center align-items-center">
          <div className="news-container d-flex justify-content-center align-items-center flex-wrap gap-3">
            {media.slice().reverse().map(
              (md) =>
                md.mediaType === "Image" &&
                md.files.map((img, index) => (
                  <div key={index} className="news-content media-content mb-3">
                    <div className="img-news d-flex justify-content-center align-items-center">
                      <img
                        src={`${apiImagesMediaUrl}//Media/${img.fileName}`}
                        className="text-center"
                        style={{ height: "20rem" }}
                        key={index}
                        alt=""
                      />
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;

