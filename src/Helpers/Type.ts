export interface Article {
  id: number;
  title: string;
  content: string;
  titreArabe: string;
  ContenuArabe: string;
  imageName: string;
  createdAt: Date;
}

export interface Discours {
  id: number;
  title: string;
  content: string;
  titreArabe: string;
  ContenuArabe: string;
  imageName: string;
  createdAt: Date;
}

export interface MediaType {
  id: number;
  name: string;
  mediaType: string;
  files: {fileName: string, id: number, media: string}[];
}
export interface Coordonnee {
  id: number;
  numero: string;
  email: string;
  localisation: string;
  facebook: string;
  instagram: string;
  twitter: string;
}
