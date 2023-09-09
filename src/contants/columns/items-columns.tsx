import { CopyOutlined, LinkOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';
import moment from 'moment';
import Link from 'next/link';

import { CLICK_TO_COPY } from '@/utils/common-function';
import { copyToClipBoard } from '@/utils/helpers';

import { FORMAT_DATE_DD_MM_YYYY, vpsStatus } from '../common.constants';
import { IItemType } from '../types/items.types';
const CUSTOMER_CLASS = 'cursor-pointer truncate text-center p-2 m-0';
const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
const DEFAULT_CONTAINER = 'h-[50px] min-w-[50px]';
const DEFAULT_PRODUCT = '/images/default-product.jpg';

const renderContent = (content: string) => {
  return (
    <div>
      <div className={CUSTOMER_CLASS}>{content}</div>
      <div className={clsx(CUSTOMER_CLASS)}>
        <CopyOutlined
          className='mx-2'
          onClick={() => copyToClipBoard(content)}
        />
        <Link href={content} passHref>
          <a target='_blank' rel='noreferrer' className='text-[#fff]'>
            <LinkOutlined />
          </a>
        </Link>
      </div>
    </div>
  );
};

export const renderItemsColumns = (
  handleOpeEditModal?: (items: IItemType) => void
) => {
  const ITEMS_COLUMS: ColumnsType<IItemType> = [
    {
      title: 'VPS',
      dataIndex: ['vpsId', 'vpsIp'],
      key: 'vpsIp',
      width: 180,
      fixed: 'left',
      align: 'center',
      render: (label: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(label)}
          >
            {label}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Nghách',
      dataIndex: ['nicheId', 'name'],
      key: 'name',
      align: 'center',
      width: 200,
      render: (label: string) => (
        <div onClick={() => copyToClipBoard(label)}>
          <Tooltip placement='bottom' title={label}>
            <p className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}>{label}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Date',
      dataIndex: 'timeUpdatePriceWM',
      align: 'center',
      key: 'timeUpdatePriceWM',
      width: 100,
      render: (timeUpdatePriceWM: string, record: IItemType) => (
        <div onClick={() => handleOpeEditModal && handleOpeEditModal(record)}>
          <Tooltip
            placement='bottom'
            title={moment(timeUpdatePriceWM || undefined).format(
              FORMAT_DATE_DD_MM_YYYY
            )}
          >
            <p className={clsx(CUSTOMER_CLASS)}>
              {moment(timeUpdatePriceWM || undefined).format(
                FORMAT_DATE_DD_MM_YYYY
              )}
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
      width: 80,
      render: (img: string, record: IItemType) => (
        <div
          className={clsx(DEFAULT_CONTAINER, 'flex flex-row justify-center')}
          onClick={() => handleOpeEditModal && handleOpeEditModal(record)}
          // onClick={() => console.log(record)}
        >
          <div className='h-[48px] w-[48px]'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img || DEFAULT_PRODUCT}
              alt='[img]'
              className='h-full w-full'
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 300,
      align: 'center',
      render: (title: string, record: IItemType) => (
        <div onClick={() => handleOpeEditModal && handleOpeEditModal(record)}>
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

      render: (importPrice: string[], record: IItemType) => (
        <div onClick={() => handleOpeEditModal && handleOpeEditModal(record)}>
          {importPrice && (
            <Tooltip placement='bottom' title={CLICK_TO_COPY}>
              {importPrice?.map((v, k) => (
                <p
                  className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}
                  key={k}
                  onClick={() => copyToClipBoard(v)}
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
      render: (ebayPrice: string[]) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(ebayPrice)}
          >{`${ebayPrice}`}</p>
        </Tooltip>
      ),
    },
    {
      title: 'Quantity eBay',
      dataIndex: 'ebayQuantity',
      align: 'center',
      key: 'ebayQuantity',
      width: 50,
      render: (ebayQuantity: string, record: IItemType) => (
        <div onClick={() => handleOpeEditModal && handleOpeEditModal(record)}>
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
    {
      title: 'item Id ebay',
      dataIndex: 'ebayId',
      align: 'center',
      key: 'ebayId',
      width: 150,
      render: (ebayId: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(ebayId)}
          >
            {ebayId}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Note',
      dataIndex: 'note',
      align: 'center',
      key: 'note',
      render: (note: string, record: IItemType) => (
        <div
          onClick={() => handleOpeEditModal && handleOpeEditModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={note}>
            <p className={CUSTOMER_CLASS}>{note}</p>
          </Tooltip>
        </div>
      ),
    },
    // {
    //   title: 'Date',
    //   dataIndex: 'updatepricewm',
    //   align: 'center',
    //   key: 'updatepricewm',
    //   width: 80,
    //   render: (updatepricewm: string) => (
    //     <Tooltip placement='bottom' title={CLICK_TO_COPY}>
    //       <p
    //         className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}
    //         onClick={() =>
    //           copyToClipBoard(
    //             moment(updatepricewm).format(FORMAT_DATE_DD_MM_YYYY)
    //           )
    //         }
    //       >
    //         {updatepricewm}
    //       </p>
    //     </Tooltip>
    //   ),
    // },
    {
      title: 'Ngày tạo',
      dataIndex: 'createdAt',
      key: 'createdAt',
      width: 100,
      align: 'center',
      render: (createdAt: string, record: IItemType) => (
        <div
          className={DEFAULT_CONTAINER}
          onClick={() => handleOpeEditModal && handleOpeEditModal(record)}
        >
          <Tooltip
            placement='bottom'
            title={moment(createdAt).format(FORMAT_DATE_DD_MM_YYYY)}
          >
            <p className={CUSTOMER_CLASS}>
              {moment(createdAt).format(FORMAT_DATE_DD_MM_YYYY)}
            </p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Stock WM',
      dataIndex: 'stockWM',
      align: 'center',
      key: 'stockWM',
      render: (stockWM: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(stockWM)}
          >
            {stockWM}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Giá list đề xuất',
      dataIndex: 'priceOffer',
      align: 'center',
      key: 'priceOffer',
      width: 100,
      render: (priceOffer: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(CUSTOMER_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(priceOffer)}
          >
            {priceOffer}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Nhân sự',
      dataIndex: ['userId', 'username'],
      align: 'center',
      key: 'username',
      render: (username: string, record: IItemType) => (
        <div
          onClick={() => handleOpeEditModal && handleOpeEditModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={username}>
            <p className={CUSTOMER_CLASS}>{username}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Trạng thái acc',
      dataIndex: ['vpsId', 'status'],
      align: 'center',
      key: 'accStatus',
      render: (username: string, record: IItemType) => (
        <div
          onClick={() => handleOpeEditModal && handleOpeEditModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={username}>
            <p className={CUSTOMER_CLASS}>{username}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Trạng thái bán hàng',
      dataIndex: ['vpsId', 'statusOpen'],
      align: 'center',
      key: 'vpsStatus',
      render: (text: string, record: IItemType) => (
        <div
          onClick={() => handleOpeEditModal && handleOpeEditModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip
            placement='bottom'
            title={vpsStatus[text as 'DUNGBANCHODELI']}
          >
            {vpsStatus[text as 'DUNGBANCHODELI']}
          </Tooltip>
        </div>
      ),
    },
  ];

  return ITEMS_COLUMS;
};
