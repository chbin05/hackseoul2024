import { atom, RecoilState } from 'recoil';
import { MapLocation } from '../../interfaces/map';

export const userLocationAtom: RecoilState<MapLocation> = atom({
  key:'userLocationAtom',
  default: null
})

export const userPageIdAtom: RecoilState<number> = atom({
  key:'userPageIdAtom',
  default: null
})

export const userIdAtom: RecoilState<number> = atom({
  key:'userIdAtom',
  default: null
})