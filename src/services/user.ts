import { useSetRecoilState } from 'recoil';
import { userLocationAtom } from '../recoil/atoms/userAtom';
import { MapLocation } from '../interfaces/map';

export default function useUserService() {
  const setUserLocation = useSetRecoilState(userLocationAtom)
  const setCurrentUserLocation = (location: MapLocation) => {
    setUserLocation(location)
  };

  return {
    setCurrentUserLocation,
  };
}
