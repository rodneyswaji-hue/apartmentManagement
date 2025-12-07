

export type Receipt = {
  id?: number;
  houseId: number;
  date: string; // YYYY-MM-DD
  amount: number;
};

export type User = {
  id?: number;
  username: string;
  pinHash: string;
};

export type Meta = {
  id?: number;
  lastRolloverMonth: string | null; // 'YYYY-MM'
};
export  interface Apartment {
  id?: number;
  name: string;
  location: string;
  numHouses: number;
}

export interface House {
  id?: number;
  apartmentId: number;
  number: string;
  tenantName: string | null;
  rent: number;
  debt: number;
  
}
export interface Apartment {
  id?: number
  name: string
  location: string
  
}

export interface House {
  id?: number
  apartmentId: number
  number: string
  tenantName: string | null
  rent: number
  debt: number
}


