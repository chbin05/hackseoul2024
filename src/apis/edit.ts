import { Trash } from '../interfaces/trash';
import ajaxModules from '../modules/ajax';
import { apiDomain } from '../consts/api';

export const createTrashInfo = async (trashInfo: Trash) => {
  try {
    await ajaxModules.post(`${apiDomain}/api/v1/trashes`, {
      ...trashInfo
    })
  } catch {
    console.warn('등록 실패')
  }
}