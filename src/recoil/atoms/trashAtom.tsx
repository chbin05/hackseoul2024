import { atom, RecoilState } from 'recoil';
import { Trash } from '../../interfaces/trash';

interface TrashInfo {
  list: Trash[]
}

const initialTrashInfo: TrashInfo = {
  list: []
}

export const trashInfoAtom: RecoilState<TrashInfo> = atom({
  key: 'trashInfoAtom',
  default: initialTrashInfo,
})