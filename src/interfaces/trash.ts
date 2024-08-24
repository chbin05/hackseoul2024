import { MapLocation } from './map';

export const enum TrashType {
  ALL = 'ALL',
  RECYCLE = 'RECYCLE',
  PLASTIC = 'PLASTIC',
  PAPER = 'PAPER',
  PLASTIC_BAG = 'PLASTIC_BAG',
  CAN = 'CAN',
  GLASS = 'GLASS',
  STYROFOAM = 'STYROFOAM',
  ETC = 'ETC'
}

export interface Trash {
  location: MapLocation
  type: TrashType
}

export interface TrashInfo {
  list: Trash[]
}