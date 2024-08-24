import { Trash } from '../interfaces/trash';
import ajaxModules from '../modules/ajax';
import { apiDomain } from '../consts/api';

export const createTrashInfo = async (trashInfos: Trash[]) => {
  try {
    await ajaxModules.post(`${apiDomain}/api/v1/trashes`, trashInfos)
  } catch {
    console.warn('등록 실패')
  }
}