import { USER_TYPE } from '@/contants/types/users.types';
import HttpRequest from '@/utils/Http-request';

export const createUserServices = async (data: Partial<USER_TYPE>) => {
  return await HttpRequest.post('users', { ...data });
};
