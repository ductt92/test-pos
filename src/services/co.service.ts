/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpRequest from '@/utils/Http-request';
export interface ICO {
  id: string;
  name: string;
  market: string;
  rate: number;
  createdAt: string | Date;
  updatedAt: string | Date;
}

// type ParamsType = {
//   page: string;
//   search?: string;
//   pageSize: string;
// };
type ResponseType = {
  data: Array<ICO>;
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
  };
};

export const getAllCO = async ({
  page,
  search,
  pageSize,
}: {
  page: number;
  search?: string;
  pageSize: number;
}) => {
  const newPage = page.toString();
  const newPageSize = pageSize.toString();
  const CO = await HttpRequest.get('co', {
    params: { page: newPage, search, pageSize: newPageSize },
  });
  return CO as ResponseType;
};

export const getCoById = async (id: string) => {
  return (await HttpRequest.get(`co/${id}`)) as any;
};

export const createCo = async (data: Partial<ICO>) => {
  return await HttpRequest.post('co', { ...data });
};

export const updateCo = async ({
  data,
  id,
}: {
  data: Partial<ICO>;
  id: string;
}) => {
  return await HttpRequest.patch(`co/${id}`, { ...data });
};
