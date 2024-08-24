import { MapLocation } from './map';

export const enum TrashType {
  BOTTLE = 'BOTTLE',
  PAPER = 'PAPER',
  PLASTIC = 'PLASTIC',
  ETC = 'ETC'
}

export interface Trash {
  location: MapLocation
  type: TrashType
}

export interface TrashInfo {
  list: Trash[]
}