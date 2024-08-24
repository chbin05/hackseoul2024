import { atom, RecoilState } from 'recoil';
import { TrashInfo } from '../../interfaces/trash';


const initialTrashInfo: TrashInfo = {
  list: []
}

export const trashInfoAtom: RecoilState<TrashInfo> = atom({
  key: 'trashInfoAtom',
  default: initialTrashInfo,
})