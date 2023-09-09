import { USER_TYPE } from './users.types';
import { VPS_LIST_TYPE } from './vps.types';

export type ORDERS_LIST_TYPE = {
  id: string;
  vpsId: VPS_LIST_TYPE;
  userId: USER_TYPE;
  orderCode: string;
  teamId: string;
  dateCreate: Date;
  dateShip: Date;
  buyerId: string;
  buyerInfo: string;
  mail: string;
  orderId: string;
  trackingId: string;
  orderStatus: string;
  buyerNote: string;
  userStatus: string;
  reasonCancel: string;
  coName: string;
  coRate: string;
  coStatus: string;
  coEmail: string;
  coOrder: string;
  coNote: string;
  coPrice: string;
  emailUpdatedAt: null;
  note: string;
  createdAt: Date;
  updatedAt: Date;
  items: OrderItem[];
  staffNote: Array<{
    noteType: string;
  }>;
  paymentStatus?: string;
  paymentDate?: string | Date;
};

export type ORDER_REQUEST_TYPE = {
  vpsId: {
    statusOpen?: string;
  };
  userId: string;
  team: string;
  dateCreate: Date | string;
  dateShip: Date | string;
  buyerId: string;
  buyerInfo: string;
  mail: string;
  orderId: string;
  trackingId: string;
  orderStatus: STATUS_ORDER;
  buyerNote: string;
  reasonCancel: string;
  coName: string;
  coRate: number;
  coStatus: string;
  coEmail: string;
  coOrder: string;
  coNote: string;
  coPrice: number;
  userStatus: string;
  note: string;
  items: OrderItem[];
  staffNote: Array<I_NOTE>;
};

export type StatusCount = {
  count: string;
  order_status: string;
};

export enum STATUS_ORDER {
  RETURN,
  DAGUI,
  SHIPPED,
  DELI,
  CANCEL,
  NEW,
  NOSHIP,
  TRACKAO,
  DATT,
  CASE,
  REFUND,
  DIE,
}

export type OrderItem = {
  itemId: {
    id: string;
    ebayId: string;
    importLink: string[];
    importPrice: string[];
    nicheId: {
      name: string;
    };
  };
  nicheId: string;
  title: string;
  quantity: number;
  linkItem: string;
  priceWn: number;
  priceEbay: number;
  costAds: number;
  otherCost: number;
  taxPrice: number;
  coStatus?: string;
  coRate?: number;
  coEmail?: string;
  coOrder?: string;
  coNote?: string;
  coPrice?: string;
  coId: {
    name: string;
    id: string;
  };
};

export interface I_NOTE {
  id: string;
  userId: string;
  fullName: string;
  orderId: string;
  note: string;
  noteType: E_NOTE;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export enum E_NOTE {
  MANAGER = 'MANAGER',
  STAFF = 'STAFF',
}
