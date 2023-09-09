import { USER_TYPE } from '@/contants/types/users.types';
import HttpRequest from '@/utils/Http-request';

export const fetchUsers = async ({
  page,
  pageSize,
  search,
}: {
  page: number;
  pageSize: number;
  search?: string;
}) => {
  return await HttpRequest.get('users', { params: { page, pageSize, search } });
};

export const updateUser = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<USER_TYPE> & { teams: string[] };
}) => {
  return await HttpRequest.put(`users/${id}`, { ...data });
};
