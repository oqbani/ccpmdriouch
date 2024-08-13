import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { apiImagesUrl, apiUrl } from "../Helpers/Api";
import { Discours } from "../Helpers/Type";
import { format } from "date-fns";
import { htmlToText } from "html-to-text";

const DiscoursRoyaux: React.FC = () => {
  const [toggleMap, setToggleMap] = useState<{ [key: number]: boolean }>({});

  const handleClick = (id: number) => {
    setToggleMap((prevToggleMap) => ({
      ...prevToggleMap,
      [id]: !prevToggleMap[id],
    }));
  };
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);



  
  const [discours, setArticles] = useState<Discours[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/discours`);
      setArticles(response.data["hydra:member"]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="discours-container container my-5" dir={direction}>
      <div className="lignes my-5">
        <div className="ligne"></div>
        <h3 className="text-center text-decoration-underline w-75">
          {t('discours.3.title')}
        </h3>
        <div className="ligne"></div>
      </div>






      
      <div className="discours">
        {discours.map((discour, index) => (
          <div
            className={`discour ${toggleMap[discour.id] ? "open" : ""}`}
            onClick={() => handleClick(discour.id)}
            key={index}
          >
            <div className="discour-img-box">
              <img src={`${apiImagesUrl}/${discour.imageName}`} alt="" />
            </div>
            <div className="discour-content">
              <h3 className="text-decoration-underline">
                {direction ==="ltr" ? discour.title.toUpperCase() : discour.titreArabe}
              </h3>

              <div
                className={
                  toggleMap[discour.id]
                    ? "discour-details open"
                    : "discour-details"
                }
              >
                <h5 className="text-center">{format(discour.createdAt, "yyyy-MM-dd")}</h5>
                <p>{direction === "ltr"
                    ? htmlToText(discour.content)
                    : htmlToText(discour.ContenuArabe)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoursRoyaux;
