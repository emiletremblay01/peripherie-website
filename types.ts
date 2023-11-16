export type StoreItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  images: Image[];
};

export type EditionItem = {
  id: number;
  nom: string;
  dateDeSortie: string;
  description: string;
  imageUrl: string;
  isEditionActuelle: boolean;
};

export type Image = {
  id: number;
  url: string;
};
