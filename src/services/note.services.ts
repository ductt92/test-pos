import { E_NOTE } from '@/contants/types/orders.types';
import HttpRequest from '@/utils/Http-request';

export const createNote = async (params: {
  orderId: string;
  note: string;
  noteType: E_NOTE;
}) => {
  return await HttpRequest.post(`note`, { ...params });
};

export const createFilter = async ({
  name,
  filterString,
  type,
}: {
  name: string;
  filterString: string;
  type: string;
}) => {
  return await HttpRequest.post(`filter`, { name, filterString, type });
};
export const updateFilter = async ({
  id,
  filterString,
  name,
  type,
}: {
  id: string;
  type: string;
  filterString: string;
  name: string;
}) => {
  return await HttpRequest.patch(`filter/${id}`, { name, filterString, type });
};

export const deleteFilter = async (id: string) => {
  return await HttpRequest.delete(`filter/${id}`);
};
