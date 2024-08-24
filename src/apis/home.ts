import { Bounds } from '../interfaces/map';
import ajaxModules from '../modules/ajax';
import { apiDomain } from '../consts/api';
import { stringify } from 'query-string';
import { TrashType } from '../interfaces/trash';

export const getAllTrashDataMap = async (bounds: Bounds) => {
  try {
    const queries = stringify(bounds)
    const result = await ajaxModules.get(`${apiDomain}/api/v1/trashes?${queries}`, {})

    return result?.data
  } catch {
    return [
      {
        type: TrashType.BOTTLE,
        location: {
          lat: 37.5157657,
          lng: 127.0990839
        }
      },
      {
        type: TrashType.BOTTLE,
        location: {
          lat: 37.5157657,
          lng: 127.0990839
        }
      }
    ]
  }
};
