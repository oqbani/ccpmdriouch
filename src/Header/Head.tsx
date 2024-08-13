import React from "react";
import Logo from "../assets/A-PRIM.png";
import Logo2 from "/logodr.png";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const Head: React.FC = () => {
  const [t] = useTranslation("global");

  // const handleLinkClick = () => {
  //   const accueilTop = document.getElementById("accueil-top");
  //   if (accueilTop) {
  //     accueilTop.scrollIntoView({ behavior: "smooth" });
  //   }
  // }

  return (
    <div className="head mb-5">
      <div className="head-top mb-5">
        <Link to={"/"}>
          <div className="head-top-img">
            <img src={Logo} alt="prim" />
          </div>
        </Link>
        <Link to={"/commune-de-driouch"}>
          <div className="head-top-img logo-figuig">
            <img src={Logo2} alt="figuig" />
          </div>
        </Link>
      </div>
      <h2 className="text-center titre-header mb-3">{t("header.title")}</h2>
    </div>
  );
};

export default Head;
