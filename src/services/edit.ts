import { Trash } from '../interfaces/trash';
import { createTrashInfo } from '../apis/edit';

export default function useEditService() {
  const addTrashInfo = async (trashInfo: Trash) => {
    await createTrashInfo(trashInfo)
  }

  return {
    addTrashInfo,
  };
}
