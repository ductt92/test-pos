/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryParams2 } from '@/contants/common.constants';
import HttpRequest from '@/utils/Http-request';

interface IItems {
  page: number;
  pageSize: number;
  search?: string;
}
export interface ITypeItemsServices {
  id: string;
  vpsId: string;
  nicheId: string;
  img: string;
  title: string;
  importLink: string[];
  importPrice: string[];
  ebayPrice: number;
  ebayQuantity: number;
  ebayLink: string;
  ebayId: string;
  note: string;
  updatePriceWM: number;
  timeUpdatePriceWM: string;
  stockWM: string;
  priceOffer: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
  teamId: string;
}
export const getListItemFilter = async (params: QueryParams2) => {
  const data = await HttpRequest.post('/item/FilterItem', {
    ...params,
  });
  return data;
};

export const getListItem = async ({ page, pageSize, search }: IItems) => {
  return (await HttpRequest.get('item', {
    params: { search, page, pageSize },
  })) as any;
};

export const createItemsServices = async (
  data: Partial<ITypeItemsServices>
) => {
  return await HttpRequest.post('item', { ...data });
};

export const editItemsServices = async ({
  data,
  id,
}: {
  data: Partial<ITypeItemsServices>;
  id: string;
}) => {
  return await HttpRequest.put(`item/${id}`, { ...data });
};

export const deleteItemsServices = async (id: string) => {
  return await HttpRequest.delete(`item/${id}`);
};

export const exportCSVItems = async (id: string) => {
  return HttpRequest.post(`item/${id}/export-csv`, { responseType: 'blob' });
};
