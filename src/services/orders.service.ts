/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable unused-imports/no-unused-vars */

import {
  ORDER_REQUEST_TYPE,
  ORDERS_LIST_TYPE,
  StatusCount,
} from '@/contants/types/orders.types';
import HttpRequest from '@/utils/Http-request';

export interface OrdersResponse {
  data?: ORDERS_LIST_TYPE[];
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
  };
}
export interface OrderParams {
  page?: string;
  search?: string;
  pageSize?: string;
  startDate?: string | Date;
  endDate?: string | Date;
  dateShip?: string | Date;
  vpsId?: string;
  userId?: string;
  teamIds?: string;
}
export const fetchOrders = async (params: OrderParams) => {
  const data = await HttpRequest.get('/order', {
    params: {
      ...params,
    },
  });

  return data as OrdersResponse;
};

export const fetchFilter = async (params: any) => {
  const data = await HttpRequest.get('/filter', {
    params: {
      ...params,
    },
  });
  return data as any;
};
export const createOrder = async (data: Partial<ORDER_REQUEST_TYPE>) => {
  return await HttpRequest.post('order', data);
};

export const getOrderById = async (id: string) => {
  return await HttpRequest.get(`order/${id}`);
};

export const updateOrder = async ({
  id,
  data,
}: {
  id: string;
  data: Partial<ORDER_REQUEST_TYPE>;
}) => {
  return await HttpRequest.patch(`order/${id}`, data);
};

export const deleteOrder = async (id: string) => {
  return await HttpRequest.delete(`order/${id}`);
};

export const statusOrderFilter = async () => {
  return (await HttpRequest.get('order/status-count')) as Array<StatusCount>;
};

export const getItemsServicesById = async (id: string) => {
  return (await HttpRequest.get(`item/${id}`)) as any;
};

export const getVpsById = async (id: string) => {
  return (await HttpRequest.get(`vps/${id}`)) as any;
};

export const noteStaff = async ({ id, note }: { id: string; note: string }) => {
  const noteResponse = await HttpRequest.patch(`order/${id}/note`, {
    note,
  });
  return noteResponse;
};
