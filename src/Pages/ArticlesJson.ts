import img from "../assets/Groupe 2070.png";

interface Article {
  id: number;
  img: string;
  title: string;
  date: string;
  desc: string;
}

const Articlesjson: Article[] = [
  {
    id: 16,
    img: img,
    title: "CONSTITUTION MAROCAINE",
    date: "18/02/2022",
    desc: "‘’ Le Royaume du Maroc œuvre à la protection des droits et des intérêts légitimes des citoyennes et des citoyens marocains résidant à l'étranger, dans le respect du droit international et des lois en vigueur dans les pays d'accueil. Il s'attache au maintien et au développement de leurs liens humains, notamment culturels, avec le Royaume et à la préservation de leur identité nationale. Il veille au renforcement de leur contribution au développement de leur patrie, le Maroc, et au resserrement des liens d'amitié et de coopération avec les gouvernements et les sociétés des pays où ils résident ou dont ils sont aussi citoyens.’’",
  },
  {
    id: 17,
    img: img,
    title: "CONSTITUTION MAROCAINE",
    date: "18/02/2022",
    desc: "‘’ Les   Marocains   résidant   à  l'étranger  jouissent des    droits   de   pleine   citoyenneté,   y   compris le  droit  d'être  électeurs  et  éligibles.  Ils  peuvent se    porter   candidats   aux   élections   au   niveau des   listes   et   des   circonscriptions    électorales locales,    régionales    et    nationales.    La   loi   fixe les          critères         spécifiques        d'éligibilité et   d'incompatibilité.   Elle   détermine   de    même les   conditions    et   les   modalités    de   l'exercice effectif    du   droit    de   vote   et   de   candidature à  partir  des  pays  de  résidence.’’",
  },
  {
    id: 18,
    img: img,
    title: "CONSTITUTION MAROCAINE",
    date: "18/02/2022",
    desc: "‘’ Les     pouvoirs     publics    œuvrent    à    assurer une   participation   aussi   étendue  que  possible des         Marocains       résidant        à        l'étranger, aux    institutions    consultatives    et    de    bonne gouvernance     créées      par      la       Constitution ou   par   la   loi’’",
  },
  {
    id: 30,
    img: img,
    title: "CONSTITUTION MAROCAINE",
    date: "18/02/2022",
    desc: "‘’ Sont  électeurs  et  éligibles,  tous les citoyennes et  les citoyens  majeurs  jouissant  de leurs droits civils  et politiques. La loi prévoit des dispositions de   nature   à  favoriser  l'égal  accès  des  femmes et  des  hommes  aux  fonctions  électives. Le vote est   un   droit   personnel   et   un   devoir  national. Les étrangers jouissent des libertés fondamentales reconnues  aux  citoyennes et citoyens marocains, conformément à la loi. Ceux d'entre eux qui résident au Maroc peuvent participer aux élections locales en  vertu  de la loi,  de l'application de conventions internationales ou de pratiques de réciprocité. Les conditions d'extradition et d'octroi du droit d'asile sont  définies  par  la  loi’’",
  },
  {
    id: 163,
    img: img,
    title: "CONSTITUTION MAROCAINE",
    date: "18/02/2022",
    desc: "Le Conseil de la communauté marocaine à l'étranger est  chargé  notamment  d'émettre  des  avis  sur  les orientations  des  politiques   publiques  permettant d'assurer    aux    Marocains    résidant    à    l'étranger  le   maintien    de   liens   étroits   avec   leur   identité marocaine,  les mesures  ayant  pour but de garantir leurs  droits  et  préserver  leurs  intérêts,  ainsi  qu'à contribuer   au  développement  humain  et  durable de  leur  pays  d'origine  et  à  son  progrès.",
  }
];

export default Articlesjson;
