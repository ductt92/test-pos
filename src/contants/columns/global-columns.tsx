/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';

import { TeamOverViewType, TReport } from '../types';
const CUSTOMER_CLASS =
  'cursor-pointer truncate text-center w-full px-2 py-2 m-0';
// const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
// const DEFAULT_CONTAINER = 'h-[50px] min-w-[50px]';
// const DEFAULT_PRODUCT = '/images/default-product.jpg';

export const GLOBAL_COLUMNS: ColumnsType<TeamOverViewType> = [
  {
    title: 'Team',
    dataIndex: 'teamName',
    key: 'teamName',
    align: 'center',
    width: 180,
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
  {
    title: 'User',
    dataIndex: 'userFullName',
    key: 'users',
    width: 120,
    align: 'center',
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
  {
    title: 'VPS',
    dataIndex: 'vpsIp',
    key: 'vpsIp',
    width: 150,
    align: 'center',
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
        </Tooltip>
      </Tooltip>
    ),
  },
  {
    title: 'Số đơn',
    dataIndex: 'totalOrder',
    key: 'totalOrder',
    align: 'center',
    width: 180,
    render: (label: number) => (
      <Tooltip placement='bottom' title={label || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>{label || 0}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Tổng doanh thu',
    dataIndex: 'totalAmount',
    key: 'totalAmount',
    align: 'center',
    width: 180,
    render: (label: number) => (
      <Tooltip placement='bottom' title={label || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>{label || 0}</p>
      </Tooltip>
    ),
  },

  {
    title: 'Doanh thu cứu',
    dataIndex: 'totalAmountCuu',
    key: 'totalAmountCuu',
    align: 'center',
    width: 120,
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label || 0}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Tỉ lệ cứu',
    dataIndex: 'tyLeCuu',
    key: 'tyLeCuu',
    align: 'center',
    width: 150,
    render: (label: number) => (
      <Tooltip placement='bottom' title={label || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>{label || 0}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Đơn đang xử lý',
    dataIndex: 'dangSuLy',
    key: 'note',
    align: 'center',
    width: 180,
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
];

export const REPORT_COLUMNS: ColumnsType<TReport> = [
  {
    title: 'Link nhập hàng',
    dataIndex: 'importLink',
    key: 'importLink',
    align: 'center',
    width: 180,
    render: (importLink: string[]) => (
      <div>
        {importLink &&
          importLink.length > 0 &&
          importLink.map((v, k) => (
            <Tooltip placement='bottom' title={v} key={k}>
              <p
                className={clsx(
                  CUSTOMER_CLASS,
                  'block max-h-12 overflow-hidden truncate  whitespace-nowrap px-2'
                )}
              >
                {v}
              </p>
            </Tooltip>
          ))}
      </div>
    ),
  },
  {
    title: 'Số đơn',
    dataIndex: 'tatolCount',
    key: 'tatolCount',
    align: 'center',
    width: 80,
    render: (tatolCount: number) => (
      <Tooltip placement='bottom' title={tatolCount || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>{tatolCount || 0}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Doanh thu',
    dataIndex: 'doanhSo',
    key: 'doanhSo',
    align: 'center',
    width: 80,
    render: (doanhSo: number) => (
      <Tooltip placement='bottom' title={doanhSo || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>{doanhSo || 0}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Doanh thu cứu',
    dataIndex: 'doanhSoCuu',
    key: 'doanhSoCuu',
    align: 'center',
    width: 80,
    render: (doanhSoCuu: number) => (
      <Tooltip placement='bottom' title={doanhSoCuu || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>{doanhSoCuu || 0}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Tỉ lệ cứu',
    dataIndex: 'tyLeCuu',
    key: 'tyLeCuu',
    align: 'center',
    width: 80,
    render: (tyLeCuu: string) => (
      <Tooltip placement='bottom' title={tyLeCuu || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>
          {parseFloat(tyLeCuu)?.toFixed(2) || 0}
        </p>
      </Tooltip>
    ),
  },
  {
    title: 'Đơn đang xử lý',
    dataIndex: 'dangSuLy',
    key: 'dangSuLy',
    align: 'center',
    width: 80,
    render: (dangSuLy: string) => (
      <Tooltip placement='bottom' title={dangSuLy || 0}>
        <div>{dangSuLy}</div>
      </Tooltip>
    ),
  },
  {
    title: 'VPS Clone',
    dataIndex: 'vpsClone',
    key: 'vpsClone',
    align: 'center',
    width: 80,
    render: (vpsClone: string) => (
      <Tooltip placement='bottom' title={vpsClone || 0}>
        <p className={clsx(CUSTOMER_CLASS)}>{vpsClone || 0}</p>
      </Tooltip>
    ),
  },
];
