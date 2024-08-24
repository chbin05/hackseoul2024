import { atom, RecoilState } from 'recoil';
import { MapLocation } from '../../interfaces/map';

export const userLocationAtom: RecoilState<MapLocation> = atom({
  key:'userLocationAtom',
  default: null
})

export const userPageIdAtom: RecoilState<MapLocation> = atom({
  key:'userPageIdAtom',
  default: null
})

export const userIdAtom: RecoilState<MapLocation> = atom({
  key:'userIdAtom',
  default: null
})