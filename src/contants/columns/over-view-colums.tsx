import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';
import moment from 'moment';

import { FORMAT_DATE_DD_MM_YYYY, STATUS } from '../common.constants';
import { IItemType } from '../types/items.types';
import { E_NOTE, I_NOTE } from '../types/orders.types';
const DEFAULT_CONTAINER = 'h-[32px] min-w-[100px]';
const CUSTOMER_CLASS = 'cursor-pointer truncate text-center p-2 m-0';
const renderContent = (content: string) => {
  return <div className={CUSTOMER_CLASS}>{content}</div>;
};
const renderInfoNote = (items: Array<I_NOTE>) => {
  return (
    <div className='w-[300px] '>
      {items?.map((v) => (
        <div key={v.id}>
          <p className='m-0 p-0'>
            {`${moment(v.createdAt).format('DD/MM')}: ${v.note}`}
          </p>
          <div className='h-[1px] w-full bg-red-50' />
        </div>
      ))}
    </div>
  );
};

export const OVERVIEW_COLUMNS = [
  {
    title: 'Hạn ship',
    dataIndex: 'dateShip',
    key: 'dateShip',
    align: 'center',
    with: 180,
  },
  {
    title: 'e-Order ID',
    dataIndex: 'orderId',
    key: 'orderId',
    align: 'center',
    with: 180,
  },
  {
    title: 'Trạng Thái',
    dataIndex: 'orderStatus',
    key: 'orderStatus',
    align: 'center',
    with: 180,
    render: (items: string) => (
      <span>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment  */}
        {/* @ts-ignore */}
        {STATUS[items]}
      </span>
    ),
  },
  {
    title: 'Co',
    dataIndex: 'co',
    key: 'co',
    align: 'center',
    with: 180,
  },

  {
    align: 'center',
    with: 180,
    title: 'Nhân viên note',
    dataIndex: 'notes',
    key: 'leaderNote',
    // eslint-disable-next-line unused-imports/no-unused-vars
    render: (items: Array<I_NOTE>) => {
      const staffNote = items.filter((x) => x?.noteType === E_NOTE.STAFF);

      return (
        <div
          className={clsx(
            DEFAULT_CONTAINER,
            'flex flex-row items-center justify-center gap-4'
          )}
        >
          <span className='m-w-[100px] truncate '>
            {staffNote.length > 0 && staffNote[staffNote.length - 1].note}
          </span>
          {staffNote.length > 0 && (
            <Tooltip title={renderInfoNote(staffNote)}>
              <InfoCircleOutlined />
            </Tooltip>
          )}
        </div>
      );
    },
  },

  {
    title: 'Quản lý note',
    dataIndex: 'notes',
    key: 'notes',
    align: 'center',
    with: 180,
    editable: true,
    render: (items: Array<I_NOTE>) => {
      const managerNote = items.filter((x) => x?.noteType === E_NOTE.MANAGER);
      return (
        <div
          className={clsx(
            DEFAULT_CONTAINER,
            'flex flex-row items-center justify-center gap-4'
          )}
        >
          {managerNote?.length > 0 && managerNote[managerNote.length - 1].note}
          {managerNote?.length > 0 && (
            <Tooltip title={renderInfoNote(managerNote)} placement='left'>
              <InfoCircleOutlined />
            </Tooltip>
          )}
        </div>
      );
    },
  },
];

export const ITEMS_OVERVIEW_COLUMNS: ColumnsType<IItemType> = [
  {
    title: 'Nghách',
    dataIndex: 'nicheName',
    key: 'nicheId',
    align: 'center',
    width: 200,
    render: (label: string) => (
      <div>
        <Tooltip placement='bottom' title={label}>
          <p className={clsx(CUSTOMER_CLASS)}>{label}</p>
        </Tooltip>
      </div>
    ),
  },

  {
    title: 'Date',
    dataIndex: 'timeUpdatepriceWM',
    align: 'center',
    key: 'timeUpdatepriceWM',
    width: 100,
    render: (timeUpdatepriceWM: string[]) => (
      <div>
        <Tooltip
          placement='bottom'
          title={moment(timeUpdatepriceWM).format(FORMAT_DATE_DD_MM_YYYY)}
        >
          <p className={clsx(CUSTOMER_CLASS)}>
            {moment(timeUpdatepriceWM).format(FORMAT_DATE_DD_MM_YYYY)}
          </p>
        </Tooltip>
      </div>
    ),
  },
  {
    title: 'Ảnh',
    dataIndex: 'img',
    key: 'img',
    align: 'center',
    width: 100,
    render: (img: string) => (
      <div className={clsx(DEFAULT_CONTAINER, 'flex flex-row justify-center')}>
        <div className='h-[48px] w-[48px]'>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img} alt='[img]' className='h-full w-full' />
        </div>
      </div>
    ),
  },

  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    align: 'center',
    render: (title: string) => (
      <div>
        <Tooltip placement='bottom' title={title}>
          <p className={clsx('cursor-pointer truncate px-2', 'text-left')}>
            {title}
          </p>
        </Tooltip>
      </div>
    ),
  },

  {
    title: 'Link nhập hàng',
    dataIndex: 'importLink',
    key: 'importLink',
    align: 'center',
    render: (importLink: string[]) => (
      <div>
        {importLink &&
          importLink.length > 0 &&
          importLink.map((v, k) => (
            <Tooltip placement='bottom' title={renderContent(v)} key={k}>
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
    title: 'Giá web',
    dataIndex: 'importPrice',
    align: 'center',
    key: 'importPrice',
    width: 50,
    render: (importPrice: string[]) => (
      <div>
        {importPrice && (
          <Tooltip placement='bottom' title=''>
            {importPrice?.map((v, k) => (
              <p
                className={clsx(CUSTOMER_CLASS)}
                key={k}
                // onClick={() => copyToClipBoard(v)}
              >
                {`${v}`}
              </p>
            ))}
          </Tooltip>
        )}
      </div>
    ),
  },

  {
    title: 'Giá list eBay',
    dataIndex: 'ebayPrice',
    align: 'center',
    key: 'ebayPrice',
    width: 60,
    render: (ebayPrice: string[]) => (
      <Tooltip placement='bottom' title={ebayPrice}>
        <p
          className={clsx(CUSTOMER_CLASS)}
          // onClick={() => copyToClipBoard(ebayPrice)}
        >{`${ebayPrice}`}</p>
      </Tooltip>
    ),
  },

  {
    title: 'Quantity eBay',
    dataIndex: 'ebayQuantity',
    align: 'center',
    key: 'ebayQuantity',
    width: 80,
    render: (ebayQuantity: string) => (
      <div>
        <Tooltip placement='bottom' title={ebayQuantity}>
          <p className={CUSTOMER_CLASS}>{`${ebayQuantity}`}</p>
        </Tooltip>
      </div>
    ),
  },
  {
    title: 'eBay Link',
    dataIndex: 'ebayLink',
    align: 'center',
    key: 'ebayLink',
    width: 300,
    render: (ebayLink: string) => (
      <Tooltip placement='bottom' title={renderContent(ebayLink)}>
        <p className={CUSTOMER_CLASS}> {ebayLink}</p>
      </Tooltip>
    ),
  },
];
