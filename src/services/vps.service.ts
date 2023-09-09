import { VPS_LIST_TYPE } from '@/contants/types/vps.types';
import HttpRequest from '@/utils/Http-request';

export const fetchVPS = async ({
  page,
  search,
  pageSize,
}: {
  page: number;
  search?: string;
  pageSize: number;
}) => {
  return await HttpRequest.get('vps', { params: { page, pageSize, search } });
};
export type VPS_CREATE_FILTER = {
  name: string;
  filterString: string;
  type: string;
};

export type VPS_CREATE_FILTER_RES = VPS_CREATE_FILTER & { id: string };
export const createVPS = async ({ data }: { data: VPS_LIST_TYPE }) => {
  return await HttpRequest.post('vps', data);
};

export const editVPS = async ({
  data,
  id,
}: {
  data: VPS_LIST_TYPE;
  id?: string;
}) => {
  return await HttpRequest.patch(`vps/${id}`, data);
};

export const deleteVPS = async (id?: string) => {
  return await HttpRequest.delete(`vps/${id}`);
};
export const creatFilter = async (data: VPS_CREATE_FILTER) => {
  return await HttpRequest.post('filter', data);
};

export const fetchFilter = async ({
  page,
  type,
  pageSize,
}: {
  page: number;
  type?: string;
  pageSize: number;
}) => {
  return await HttpRequest.get('filter', { params: { page, pageSize, type } });
};

export const updateFilter = async ({
  id,
  data,
}: {
  id: string;
  data: VPS_CREATE_FILTER;
}) => {
  return await HttpRequest.patch(`filter/${id}`, data);
};
