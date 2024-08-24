import { Trash } from '../interfaces/trash';
import { createTrashInfo } from '../apis/edit';

export default function useEditService() {
  const addTrashInfo = async (trashInfos: Trash[]) => {
    await createTrashInfo(trashInfos)
  }

  return {
    addTrashInfo,
  };
}
