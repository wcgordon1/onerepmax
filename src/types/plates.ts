export interface Plate {
  weight: number;
  diameter: number;
  color: string;
}

export const PLATES_LBS: Plate[] = [
  { weight: 45, diameter: 17.7, color: '#FF0000' },
  { weight: 35, diameter: 15.7, color: '#0000FF' },
  { weight: 25, diameter: 13.7, color: '#00FF00' },
  { weight: 10, diameter: 11.7, color: '#FFFFFF' },
  { weight: 5, diameter: 9.7, color: '#FFFF00' },
  { weight: 2.5, diameter: 7.7, color: '#FFA500' }
];

export const PLATES_KG: Plate[] = [
  { weight: 25, diameter: 45, color: '#FF0000' },
  { weight: 20, diameter: 40, color: '#0000FF' },
  { weight: 15, diameter: 35, color: '#00FF00' },
  { weight: 10, diameter: 30, color: '#FFFFFF' },
  { weight: 5, diameter: 25, color: '#FFFF00' },
  { weight: 2.5, diameter: 20, color: '#FFA500' },
  { weight: 1.25, diameter: 15, color: '#800080' }
];

export const BAR_WEIGHTS = {
  lbs: 45,
  kg: 20
}; 