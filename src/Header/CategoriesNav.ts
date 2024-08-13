interface Categorie {
  id: number;
  title: string;
  soustitle: string;
  souscategories: sousCategorie[];
}

interface sousCategorie {
  id: number;
  title: string;
  soustitle: string;
}

const Categories: Categorie[] = [
  {
    id: 1,
    title: "COMMUNE DE FIGUIG",
    soustitle: "commune-de-figuig",
    souscategories: [
      { id: 1, title: "Présentation", soustitle: "presentation" },
      { id: 2, title: "Monographie", soustitle: "monographie" },
      { id: 3, title: "Potentialités", soustitle: "potentialites" },
    ],
  },
  {
    id: 2,
    title: "CELLULE D'ACCUEIL",
    soustitle: "cellule-d'accueil",
    souscategories: [
      { id: 4, title: "Cadre de coopération", soustitle: "cadredecooperation" },
      { id: 5, title: "Mission stratégique", soustitle: "#missionstrategique" },
      { id: 6, title: "Objectifs", soustitle: "#objectifs" },
      { id: 7, title: "Offre de service", soustitle: "#offredeservice" },
    ],
  },
  {
    id: 3,
    title: "CADRE JURIDIQUE",
    soustitle: "cadre-juridique",
    souscategories: [
      { id: 8, title: "Préambule", soustitle: "preambule" },
      { id: 9, title: "SNIA", soustitle: "snia" },
      { id: 10, title: "SNMRE", soustitle: "snmre" },
      {
        id: 11,
        title: "Articles de la Constitution",
        soustitle: "articles-de-la-constitution",
      },
      { id: 12, title: "Discours Royaux", soustitle: "discours-royaux" },
    ],
  },
  {
    id: 4,
    title: "ACTUALITE",
    soustitle: "actualite",
    souscategories: [
      { id: 13, title: "News", soustitle: "news" },
      { id: 14, title: "Médiathèque", soustitle: "mediatheque" },
    ],
  },
];

export default Categories;
