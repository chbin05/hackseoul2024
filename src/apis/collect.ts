import ajaxModules from '../modules/ajax';
import { apiDomain } from '../consts/api';

export const getUserPageId = async (userId) => {
  const result = await ajaxModules.post(`${apiDomain}/api/v1/user-collect-start?userId=${userId}`, {})
  return result?.data?.collectId
}

export const endCollect = async (userId, collectId) => {
  await ajaxModules.post(`${apiDomain}/api/v1/user-collect-end`, {
    userId,
    collectId
  })
}