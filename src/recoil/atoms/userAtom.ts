import { atom, RecoilState } from 'recoil';
import { MapLocation } from '../../interfaces/map';

export const userLocationAtom: RecoilState<MapLocation> = atom({
  key:'userLocationAtom',
  default: null
})