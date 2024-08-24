import { Bounds } from '../interfaces/map';
import ajaxModules from '../modules/ajax';
import { apiDomain } from '../consts/api';
import { stringify } from 'query-string';

export const getAllTrashDataMap = async (bounds: Bounds) => {
  try {
    const queries = stringify(bounds)
    const result = await ajaxModules.get(`${apiDomain}/api/v1/trashes?${queries}`, {})

    return result?.data
  } catch {
    return null
  }
};
