import React, { useEffect, useState } from "react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook, FaLocationDot } from "react-icons/fa6";
import imgFiguig from "/logodr.png";
// AOS
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { apiUrl } from "../Helpers/Api";
import { Coordonnee } from "../Helpers/Type";
import { IoIosMail } from "react-icons/io";
import { FiPhoneOutgoing } from "react-icons/fi";

const Footer: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // i18n
  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
    window.scrollTo(0, 0);
  }, [i18n.language]);

  const [coordonnees, setCoordonnees] = useState<Coordonnee[]>([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/coordonnees`);
      setCoordonnees(response.data["hydra:member"]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {coordonnees.slice(0, 1).map((coordonnee, index) => (
        <div
          className="footer d-flex text-white gap-5"
          dir={direction}
          key={index}
          style={{backgroundImage:""}}
        >
          <div className="d-flex justify-content-center align-items-center w-100 flex-column gap-3">
            <div className="img-footer mb-3">
              <img src={imgFiguig} alt="" />
            </div>
            <p style={{ fontSize: ".7rem" }}>{t("footer.part-1-p")}</p>
          </div>
          <div className="footer-border-top"></div>
          <div className="d-flex justify-content-center mt-2 w-100">
            <div>
              <h6
                style={
                  direction === "rtl"
                    ? {
                        fontWeight: "700",
                        fontSize: "1rem",
                        marginBottom: "1.5rem",
                      }
                    : { fontWeight: "700", fontSize: ".7rem" }
                }
              >
                {t("footer.part-2-h")}
              </h6>
              <li>
                <IoIosMail className="mb-2" style={{ fontSize: "1rem" }} />{" "}
                <a className=" ms-3 me-1 text-white text-decoration-none">
                  {coordonnee.email}
                </a>
              </li>
              <li>
                <FiPhoneOutgoing className="my-2" style={{ fontSize: "1rem" }} />{" "}
                <a className=" ms-3 me-1 text-white text-decoration-none">
                  {coordonnee.numero}
                </a>
              </li>
              <li className="">
                <FaLocationDot className="icon-footer" style={{ fontSize: "1rem" }} />{" "}
                <a className=" ms-3 text-white text-decoration-none" style={{fontSize: ".9rem", textAlign: "justify"}}>
                  {/* {coordonnee.localisation} */}
                  {t('footer.part-2-i')}
                </a>
              </li>
            </div>
          </div>
          <div className="footer-border-top"></div>
          <div className="d-flex w-100 justify-content-center align-items-center text-center flex-column gap-3">
            <h3
              className="mb-0"
              style={{ fontSize: "1.1rem", fontWeight: "700" }}
            >
              {t("footer.part-3-h")}
            </h3>
            <div className="d-flex justify-content-between gap-4 mb-5">
              <a target="_blank" href={coordonnee.facebook} style={{textDecoration: "none", color: "white"}}>
                <FaFacebook className="fs-4" />
              </a>

              <a target="_blank" href={coordonnee.instagram} style={{textDecoration: "none", color: "white"}}>
                <BsInstagram className="fs-4" />
              </a>

              <a target="_blank" href={coordonnee.twitter} style={{textDecoration: "none", color: "white"}}>
                <BsTwitter className="fs-4" />
              </a>
            </div>
            <a target="_blank" href="https://www.akwacommunication.ma/" className="text-white" style={{ fontSize: ".7rem" }}>{t("footer.part-3-p")}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
