/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';

const CUSTOMER_CLASS =
  'cursor-pointer truncate text-center w-full px-2 py-2 m-0';
// const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
// const DEFAULT_CONTAINER = 'h-[50px] min-w-[50px]';
// const DEFAULT_PRODUCT = '/images/default-product.jpg';

export const CO_COLUMNS: ColumnsType<any> = [
  {
    title: 'CO Id',
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    width: 250,
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Tên Co',
    dataIndex: 'name',
    key: 'name',
    width: 120,
    align: 'center',
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Thị trường',
    dataIndex: 'market',
    key: 'market',
    width: 80,
    align: 'center',
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
  {
    title: 'rate',
    dataIndex: 'rate',
    key: 'rate',
    align: 'center',
    width: 80,
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
  {
    title: 'Nhóm Co',
    dataIndex: 'subject',
    key: 'subjectText',
    align: 'center',
    width: 180,
    render: (label: string) => (
      <Tooltip placement='bottom' title={label}>
        <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
      </Tooltip>
    ),
  },
];
