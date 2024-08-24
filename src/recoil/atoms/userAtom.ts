import { atom, RecoilState } from 'recoil';
import { MapLocation } from '../../interfaces/map';

export const userLocationAtom: RecoilState<MapLocation> = atom({
  key:'userLocationAtom',
  default: { lat: 37.56014114732037, lng: 126.98241122396543 }
})