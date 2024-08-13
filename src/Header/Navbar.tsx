import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Head from "./Head";
import Logo from "../assets/A-PRIM.png";
import { Link, useNavigate } from "react-router-dom";
import { BiHome, BiSearch } from "react-icons/bi";
import * as bootstrap from "bootstrap";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (categoryTitle: string) => {
    const offcanvasNavbar = document.getElementById("offcanvasNavbar");
    if (offcanvasNavbar) {
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasNavbar) || new bootstrap.Offcanvas(offcanvasNavbar);
      offcanvasInstance.hide();
    }
    setActiveCategory(categoryTitle);
    navigate(categoryTitle === "" ? "/" : `/${categoryTitle}`);
  };

  const handleSubcategoryClick = () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    dropdownToggles.forEach((toggle) => {
      const dropdownMenu = toggle.nextElementSibling;
      if (dropdownMenu && dropdownMenu.classList.contains("show")) {
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
        });
        toggle.dispatchEvent(clickEvent);
      }
    });
  };

  const [t, i18n] = useTranslation("global");
  const [direction, setDirection] = useState("ltr");

  useEffect(() => {
    setDirection(i18n.language === "ar" ? "rtl" : "ltr");
  }, [i18n.language]);

  const handleLanguageChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
  };

  const navbar = [
    {
      title: t("navbar.0.title"),
      soustitle: t("navbar.0.soustitle"),
      souscategories: [
        { title: t("navbar.0.souscategories.0.title"), soustitle: t("navbar.0.souscategories.0.soustitle") },
        { title: t("navbar.0.souscategories.1.title"), soustitle: t("navbar.0.souscategories.1.soustitle") },
        { title: t("navbar.0.souscategories.2.title"), soustitle: t("navbar.0.souscategories.2.soustitle") },
      ],
    },
    {
      title: t("navbar.1.title"),
      soustitle: t("navbar.1.soustitle"),
      souscategories: [
        { title: t("navbar.1.souscategories.0.title"), soustitle: t("navbar.1.souscategories.0.soustitle") },
        { title: t("navbar.1.souscategories.1.title"), soustitle: t("navbar.1.souscategories.1.soustitle") },
        { title: t("navbar.1.souscategories.2.title"), soustitle: t("navbar.1.souscategories.2.soustitle") },
        { title: t("navbar.1.souscategories.3.title"), soustitle: t("navbar.1.souscategories.3.soustitle") },
      ],
    },
    {
      title: t("navbar.2.title"),
      soustitle: t("navbar.2.soustitle"),
      souscategories: [
        { title: t("navbar.2.souscategories.0.title"), soustitle: t("navbar.2.souscategories.0.soustitle") },
        { title: t("navbar.2.souscategories.1.title"), soustitle: t("navbar.2.souscategories.1.soustitle") },
        { title: t("navbar.2.souscategories.2.title"), soustitle: t("navbar.2.souscategories.2.soustitle") },
        { title: t("navbar.2.souscategories.3.title"), soustitle: t("navbar.2.souscategories.3.soustitle") },
        { title: t("navbar.2.souscategories.4.title"), soustitle: t("navbar.2.souscategories.4.soustitle") },
      ],
    },
    {
      title: t("navbar.3.title"),
      soustitle: t("navbar.3.soustitle"),
      souscategories: [
        { title: t("navbar.3.souscategories.0.title"), soustitle: t("navbar.3.souscategories.0.soustitle") },
        { title: t("navbar.3.souscategories.1.title"), soustitle: t("navbar.3.souscategories.1.soustitle") },
      ],
    },
  ];

  return (
    <div className="header" dir={direction}>
      <Head />
      <div className="container nav-container">
        <nav className="navbar navbar-expand-lg p-0 bg-white mx-2">
          <button
            className="navbar-toggler shadow-none p-0 border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <div className="navbar-toggler-icon"></div>
          </button>
          <div className="offcanvas offcanvas-end" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header" dir={direction}>
              <button
                type="button"
                className="btn-close shadow-none border-0"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <div className="head-top-img w-75">
                  <img src={Logo} style={{position: "fixed", left: "1.5rem", maxWidth: "4rem", top: "1rem", maxHeight: "4rem"}} alt="Logo" />
                </div>
              </h5>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav gap-1 justify-content-center pe-2">
                <li className="nav-item p-0">
                  <Link
                    to="/"
                    className={`nav-link text-white ${activeCategory === "" ? "active" : ""}`}
                    onClick={() => {
                      handleCategoryClick("");
                      handleSubcategoryClick();
                    }}
                  >
                    <BiHome className="fs-3" />
                  </Link>
                </li>
                {navbar.map((item, index) => (
                  <li key={index} className="nav-item dropdown">
                    <Link
                      to={`/${item.soustitle}`}
                      className={`nav-link text-white ${activeCategory === item.title ? "active" : ""}`}
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={() => {
                        handleCategoryClick(item.soustitle);
                        handleSubcategoryClick();
                      }}
                    >
                      {item.title}
                    </Link>
                    <ul className="dropdown-menu">
                      {item.souscategories.map((sc, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            to={`${item.soustitle}/${sc.soustitle}`}
                            className="dropdown-item d-flex align-items-center gap-2"
                            onClick={() => handleCategoryClick(sc.title)}
                          >
                            <div className="carreau"></div>
                            {sc.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="nav-item dropdown">
                  <Link to="/#contacteznous" className="nav-link text-white text-decoration-none">
                    {t("contactez-nous")}
                  </Link>
                </li>
                <li className="nav-item p-0">
                  <a className="nav-link text-white active" aria-current="page" href="#">
                    <BiSearch className="text-white fs-3" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="nav-langues d-flex gap-1 justify-content-center align-items-center">
          <li className="nav-langue arabe" onClick={() => handleLanguageChange("ar")}>
            <button className="nav-link">AR</button>
          </li>
          <li className="nav-langue francais" onClick={() => handleLanguageChange("fr")}>
            <button className="nav-link">FR</button>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
