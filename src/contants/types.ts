import { IItemType } from './types/items.types';
import { STATUS_ORDER } from './types/orders.types';

/* eslint-disable @typescript-eslint/no-explicit-any */
export type dataLogin = {
  password: string;
  username: string;
};
export type PaginationType = {
  pagination?: {
    currentPage: number;
    pageSize: number;
    totalCount: number;
    totalPage: number;
  };
};

export type TeamOverViewType = {
  teamsId: string;
  teamName: string;
  userId: string;
  userFullName: string;
  vpsIp: string;
  totalOrder: number;
  totalAmount: number;
  totalAmountCuu: number;
  tyLeCuu: number;
  dangSuLy: string;
};

export enum ROLE {
  MEMBER = 'MEMBER',
  ADMIN = 'ADMIN',
  LEADER = 'LEADER',
}
export type Order = {
  buyerId: string;
  buyerInfo: string;
  buyerNote: string;
  coEmail: string;
  coName: string;
  coNote: string;
  coOrder: string;
  coPrice: string;
  coRate: string;
  coStatus: string;
  createdAt: string;
  dateCreate: string;
  dateShip: string;
  emailUpdatedAt: string;
  id: string;
  items: any[];
  mail: string;
  note: string;
  orderCode: string;
  orderId: string;
  orderStatus: string;
  team: string;
  trackingId: string;
  updatedAt: string;
  userId: any[];
  userStatus: string;
  vpsId: any[];
};

export enum TYPE_FIELD {
  TEXT = 'text',
  IMAGE = 'image',
  LINK = 'link',
}
export interface IItemsStatus {
  nameColumns: string;
  isVisiable: boolean;
  title: string;
}
export interface FilterProps {
  [K: string]: {
    isVisiable: boolean;
    title: string;
  };
}

export interface OPITION {
  value: string;
  label: string;
}

export interface QueriesFilter {
  page: number;
  pageSize: number;
  type: string;
}
export const FilterType = {
  ORDER: 'order',
  VPS: 'vps',
  ITEM: 'item',
  CO: 'co',
  NICHE: 'niche',
  USER: 'user',
};

export type NICHE_PLANT = {
  id: string;
  name: string;
};
export type ORDERS_PLANT = {
  id: string;
  dateShip: null | string | Date;
  orderId: string;
  orderStatus: keyof STATUS_ORDER;
  notes: [null];
};
export interface PLANT_TYPE {
  id: string;
  fullName: string;
  vpsip: string;
  statusopen?: string;
  totalOrder: number;
  totalOrderProcessing: number;
  totalOrderDatt: number;
  totalOrderCancel: number;
  niche: Array<NICHE_PLANT>;
  orders: Array<ORDERS_PLANT>;
  items: Array<IItemType>;
}
export type ErorrType = {
  response: {
    data: {
      message: string;
    };
  };
};

export type TReport = {
  importLink: Array<string>;
  tatolCount: number;
  doanhSo: number;
  doanhSoCuu: number;
  oderNew: number;
  oderDaGui: number;
  orderTrackAo: number;
  orderShipped: number;
  vpsClone: number;
  tyLeCuu: number;
};
