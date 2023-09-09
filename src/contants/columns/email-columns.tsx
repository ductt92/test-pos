/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';
import moment from 'moment';

import { FORMAT_DATE_DD_MM_YYYY } from '../common.constants';
const CUSTOMER_CLASS =
  'cursor-pointer truncate text-center w-full px-2 py-2 m-0';
const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
// const DEFAULT_CONTAINER = 'h-[50px] min-w-[50px]';
// const DEFAULT_PRODUCT = '/images/default-product.jpg';

export const renderEmailColumns = (handleOpenViewer: (data: any) => void) => {
  const EMAIL_COLUMNS: ColumnsType<any> = [
    {
      title: 'VPS',
      dataIndex: ['vpsId', 'vpsIp'],
      key: 'VPS',
      align: 'center',
      width: 180,
      render: (label: string) => (
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
        </Tooltip>
      ),
    },
    {
      title: 'Nhân Sự',
      dataIndex: ['vpsId', 'userId', 'username'],
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
      title: 'dateTime',
      dataIndex: 'createdAt',
      key: 'dateTime',
      width: 80,
      align: 'center',
      render: (label: string) => (
        <Tooltip
          placement='bottom'
          title={moment(label || undefined).format(FORMAT_DATE_DD_MM_YYYY)}
        >
          <p className={clsx(CUSTOMER_CLASS)}>
            {moment(label || undefined).format(FORMAT_DATE_DD_MM_YYYY)}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'senToDetails',
      dataIndex: 'to',
      key: 'senToDetails',
      align: 'center',
      width: 180,
      render: (label: string) => (
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
        </Tooltip>
      ),
    },
    {
      title: 'subjectText',
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
    {
      title: 'bodyContents',
      dataIndex: 'contentHtml',
      key: 'bodyContents',
      align: 'center',
      width: 180,
      render: (contents: string, record: any) =>
        contents && (
          <div onClick={() => handleOpenViewer(record.contentHtml)}>
            <p className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}>
              View content
            </p>
          </div>
        ),
    },
    {
      title: 'labelText',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      width: 120,
      render: (label: string) => (
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label || 0}</p>
        </Tooltip>
      ),
    },
    {
      title: 'itemID',
      dataIndex: 'itemId',
      key: 'payoutId',
      align: 'center',
      width: 120,
      render: (label: string) => (
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
        </Tooltip>
      ),
    },
    {
      title: 'Tên buyer',
      dataIndex: 'buyer',
      key: 'buyer',
      align: 'center',
      width: 120,
      render: (label: string) => (
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
        </Tooltip>
      ),
    },
    {
      title: 'Note xử lý',
      dataIndex: 'note',
      fixed: 'right',
      key: 'note',
      align: 'center',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      editable: true,
      width: 180,
      render: (label: string) => (
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
        </Tooltip>
      ),
    },
  ];
  return EMAIL_COLUMNS;
};
