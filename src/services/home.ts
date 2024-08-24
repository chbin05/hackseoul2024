import { Bounds } from '../interfaces/map';
import { getAllTrashDataMap } from '../apis/home';
import { useSetRecoilState } from 'recoil';
import { trashInfoAtom } from '../recoil/atoms/trashAtom';

export default function useHomeService() {
  const setTrashInfos = useSetRecoilState(trashInfoAtom)

  const fetchAllTrashDataInMap = async (bounds: Bounds) => {
    const list = await getAllTrashDataMap(bounds)
    if (!!list) {
      setTrashInfos({ list })
    }
  };

  return {
    fetchAllTrashDataInMap,
  };
}
