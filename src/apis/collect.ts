import ajaxModules from '../modules/ajax';
import { apiDomain } from '../consts/api';

export const getUserPageId = async (userId) => {
  try {
    const result = await ajaxModules.post(`${apiDomain}/api/v1/user-collect-start?userId=${userId}`, {})
    return result?.data?.collectId
  } catch {
    console.warn('error..')
  }
}

export const endCollect = async (userId, collectId) => {
  try {
    await ajaxModules.post(`${apiDomain}/api/v1/user-collect-end`, {
      userId,
      collectId
    })
  } catch {
    console.warn('error..')
  }
}

export const getCollectResult = async (collectId) => {
  try {
    const result = await ajaxModules.get(`${apiDomain}/api/v1/trash-summary?collectId=${collectId}`, {})
    return result?.data
  } catch {
    console.warn('error..')
  }
}