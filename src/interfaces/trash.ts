import { Location } from './map';

export const enum TrashType {
  BOTTLE = 'BOTTLE',
  PAPER = 'PAPER',
  PLASTIC = 'PLASTIC',
  ETC = 'ETC'
}

export interface Trash {
  location: Location
  type: TrashType
}