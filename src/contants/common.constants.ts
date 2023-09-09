export interface QueryParams {
  page: number;
  search?: string;
  pageSize: number;
}
export const MANGER_NOTES = 'managerNote';
export interface QueryParams2 {
  page?: string;
  search?: string;
  pageSize?: string;
  startDate?: string | Date;
  endDate?: string | Date;
  selectFilter: Array<FILTER_PARAMS>;
}
export interface FILTER_PARAMS {
  label: 'string';
  opition: 'string';
  value: 'string';
}
export const QUERY_PARAMS: QueryParams = {
  page: 1,
  pageSize: 20,
  search: '',
};
export const FORMAT_DATE_DD_MM_YYYY = 'DD/MM/YY';
export const FORMAT_DATE_DD_MM_YYYY_HH_mm_ss = 'DD/MM HH:mm';

export const QUERY_PARAMS_2: QueryParams2 = {
  page: '1',
  pageSize: '20',
  search: '',
  selectFilter: [],
};

export enum TYPE_REPORT {
  TEAM = 'Team',
  USER = 'User',
  VPS = 'VPS',
}

export const CoStatus = [
  'Pre',
  'On the way',
  'Deli',
  'Cancel',
  'Return',
  'Placed',
];

export const STATUS = {
  NEW: 'Mới',
  DAGUI: 'Đã gửi',
  SHIPPED: 'Shipped',
  TRACKAO: 'Track ảo',
  DELI: 'Deli',
  DATT: 'Đã TT',
  CANCEL: 'Cancel',
  CASE: 'Case',
  REFUND: 'Refund',
  // RETURN: 'Return',
  NOSHIP: 'Process',
  DIE: 'Die',
};

export const filterItems = [
  { text: 'Joe', value: 'Joe' },
  { text: 'Jim', value: 'Jim' },
];

export const textFilter = [
  'orderCode',
  'vpsIp',
  'userName',
  'orderId',
  'ebayId',
  'buyerId',
  'mail',
  'buyerInfo',
  'title',
  'ebayLink',
  'nicheName',
  'orderStatus',
  'reasonCancel',
  'coName',
  'note',
  'coStatus',
  'coEmail',
  'coOrder',
  'coNote',
  'buyerNote',
  'accStatus',
  'paymentStatus',
];
export const dateFilter = [
  'createAt',
  'expiryDate',
  'emailUpdateAt',
  'orderUpdateAt',
  'paymentDate',
  'createdAt',
  'dateShip',
  'emailUpdateAt',
  'updatedAt',
  'paymentDate',
];
export const dateFilterItems = ['createdAt'];
export const numberFilterItems = [
  'importPrice',
  'ebayPrice',
  'ebayQuantity',
  'updatepricewm',
  'priceOffer',
];
export const txtFilterItems = [
  'vpsIp',
  'name',
  'img',
  'title',
  'ebayLink',
  'importLink',
  'timeUpdatepriceWM',
  'stockWM',
  'username',
  'ebayId',
  'note',
];
export const numberFilter = [
  'wmPrice',
  'priceEbay',
  'taxPrice',
  'costAds',
  'otherCost',
  'quantity',
  'coRate',
  'coPrice',
];
//don't  change

export enum MailTypeEnum {
  EBAY_SOLD = 'EBAY_SOLD',
  EBAY_REFUND = 'EBAY_REFUND',
  EBAY_RETURN = 'EBAY_RETURN',
  EBAY_PAYOUT = 'EBAY_PAYOUT',
  EBAY_MESSAGE = 'EBAY_MESSAGE',
  EBAY_OPENCASE = 'EBAY_OPENCASE',
  EBAY_SUSPENDED = 'EBAY_SUSPENDED',
  EBAY_DISPUTE = 'EBAY_DISPUTE',
}

export enum vpsStatus {
  DUNGBANCHODELI = 'Dừng bán chờ Deli', //Dừng bán chờ Deli
  DUNGBANCHOXACNHAN = 'Dừng bán chờ xác nhận', //Dừng bán chờ xác nhận
  OPEN1 = 'Mở bán 1 đơn', //Mở bán 1 đơn
  OPEN2 = 'Mở bán 2 đơn', //Mở bán 2 đơn
  OPEN3 = 'Mở bán 3 đơn', //Mở bán 3 đơn
  OPEN4 = 'Mở bán 4 đơn', //Mở bán 4 đơn
  OPENALL = 'Mở bán All', //Mở bán All
  ACCDIE = 'Acc die-Auto add track', //Acc die-Auto add track
  PROCESS = 'Process',
}
