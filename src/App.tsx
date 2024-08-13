import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./Acceuil/Acceuil";
import Footer from "./Acceuil/Footer";
import Services from "./Acceuil/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import { BeatLoader } from "react-spinners";
import logoPRIM from "../src/assets/A-PRIM.png";
import Avotreservices from "./Pages/Avotreservices";
import Preambule from "./Pages/Preambule";
import ArticlesContainer from "./Pages/Articles";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// PAGES
import CelluleDacceuil from "./Pages/CelluleDacceuil";
import CadreDeCooperation from "./Pages/CadreDeCooperation";
import Snia from "./Pages/Snia";
import Snmre from "./Pages/Snmre";
import DiscoursRoyaux from "../src/Pages/DiscoursRoyaux";
import ActualiteDetails from "./Acceuil/ActualiteDetails";
import Actualite from "./Pages/Actualite";
import MissionStrategique from "./Pages/MissionStrategique";
import Objectifs from "./Pages/Objectifs";
import OffredeService from "./Pages/OffredeService";
import Presentation from "./Pages/Presentation";
import Monographie from "./Pages/Monographie";
import Potentialites from "./Pages/Potentialites";
import { FaArrowUp } from "react-icons/fa6";
import Navbar from "./Header/Navbar";
import Media from "./Pages/Media";

function App() {
  const [loading, setLoading] = useState(true);
  const [showScrollButton, setShowScrollButton] = useState(false);

  setTimeout(() => {
    setLoading(false);
  }, 3000);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="">
      <Router>
        {loading ? (
          <div className="loader d-flex gap-3 justify-content-center flex-column align-items-center">
            <img src={logoPRIM} alt="" />
            <BeatLoader color="#da0232" className="mt-3" />
          </div>
        ) : (
          <>
            <Navbar />

            <Routes>
              {/* ACCUEIL */}
              <Route path="/" element={<Acceuil />} />
              <Route path="/services" element={<Services />} />
              <Route path="/avotreservices" element={<Avotreservices />} />

              {/* COMMUNE DE DRIOUCH */}
              <Route
                path="/:categorie/presentation"
                element={<Presentation />}
              />
              <Route
                path="/commune-de-driouch"
                element={<Presentation />}
              />
              <Route path="/:categorie/monographie" element={<Monographie />} />
              <Route
                path="/:categorie/potentialites"
                element={<Potentialites />}
              />

              {/* CELLULE COMMUNALE */}
              <Route path="/cellule-daccueil" element={<CelluleDacceuil />} />
              <Route
                path="/:categorie/cadredecooperation"
                element={<CadreDeCooperation />}
              />
              <Route
                path="/:categorie/#missionstrategique"
                element={<CelluleDacceuil />}
              />
              <Route
                path="/:categorie/#objectifs"
                element={<CelluleDacceuil />}
              />
              <Route
                path="/:categorie/#offredeservice"
                element={<CelluleDacceuil />}
              />

              {/*  */}
              <Route
                path="/:categorie/missionstrategique"
                element={<MissionStrategique />}
              />
              <Route path="/:categorie/objectifs" element={<Objectifs />} />
              <Route
                path="/:categorie/offredeservice"
                element={<OffredeService />}
              />

              {/* CADRE JURIDIQUE */}
              <Route path="/cadre-juridique" element={<Preambule />} />
              <Route path="/:categorie/preambule" element={<Preambule />} />
              <Route
                path="/:categorie/articles-de-la-constitution"
                element={<ArticlesContainer />}
              />
              <Route path="/:categorie/snia" element={<Snia />} />
              <Route path="/:categorie/snmre" element={<Snmre />} />
              <Route
                path="/:categorie/discours-royaux"
                element={<DiscoursRoyaux />}
              />

              {/* ACTUALITE */}
              <Route path="/actualite" element={<Actualite />} />
              <Route path="/:categorie/news" element={<Actualite />} />
              <Route
                path="/actualite/:title"
                element={<ActualiteDetails />}
              />
              <Route path="/actualite/mediatheque" element={<Media />} />

              {/* CONTACTEZ NOUS */}
              <Route path="//#contacteznous" element={<Acceuil />} />
            </Routes>

            {showScrollButton && (
              <button className="scroll-to-top-button" onClick={scrollToTop}>
                <FaArrowUp className="arrow-btn" />
              </button>
            )}
            <Footer />
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
