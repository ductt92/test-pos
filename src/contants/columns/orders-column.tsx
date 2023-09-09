/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CopyOutlined,
  InfoCircleOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';
import dayjs from 'dayjs';
import moment from 'moment';
import Link from 'next/link';

import { CLICK_TO_COPY } from '@/utils/common-function';
import { copyToClipBoard, getColor } from '@/utils/helpers';

import {
  FORMAT_DATE_DD_MM_YYYY,
  FORMAT_DATE_DD_MM_YYYY_HH_mm_ss,
  STATUS,
  vpsStatus,
} from '../common.constants';
import { E_NOTE, I_NOTE, ORDERS_LIST_TYPE } from '../types/orders.types';

const COMMON_CLASS = 'cursor-pointer truncate text-center p-0 m-0';
const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
const DEFAULT_CONTAINER = 'min-h-[22px] min-w-[50px] text-center m-0';
const CUSTOMER_CLASS = 'w-[150px] cursor-pointer truncate text-center p-2 m-0';
const URL_EBAY = 'https://www.ebay.com/sh/ord/details?orderid=';

const renderContent = (content: string, valueCopy?: string) => {
  return (
    <div>
      <div className={CUSTOMER_CLASS}>{content}</div>
      <div className={clsx(CUSTOMER_CLASS, 'flex')}>
        <div className='mx-2' onClick={() => copyToClipBoard(content)}>
          <CopyOutlined />
          <p>Copy Id</p>
        </div>
        {valueCopy && (
          <div className='mx-2' onClick={() => copyToClipBoard(valueCopy)}>
            <LinkOutlined />
            <p>Copy Link </p>
          </div>
        )}
      </div>
    </div>
  );
};

const renderNewContent = (content: string) => {
  return (
    <div className='mx-2 text-center' onClick={() => copyToClipBoard(content)}>
      <CopyOutlined />
      <p>Copy Id</p>
    </div>
  );
};
const renderInfoNote = (items: Array<I_NOTE>) => {
  return (
    <div className='w-[200px]'>
      {items?.map((v) => (
        <div key={v.id}>
          <p className='m-0 p-0 text-[11px]'>{`${moment(
            v.createdAt.toString(),
            'D/M-HH[h]ss'
          ).format('D/M-HH[h]ss')}: ${v.note}`}</p>

          <div className='h-[1px] w-full bg-red-50' />
        </div>
      ))}
    </div>
  );
};

export const renderOrders = (
  handleShowModal?: (item: ORDERS_LIST_TYPE) => void
) => {
  const ORDERS_COLUMN: ColumnsType<ORDERS_LIST_TYPE> = [
    {
      title: 'VPS',
      dataIndex: ['vpsId', 'vpsIp'],
      align: 'center',
      width: 150,
      key: 'vpsIp',
      fixed: 'left',
      render: (text: string) => (
        <div
          onClick={() => copyToClipBoard(text)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={CLICK_TO_COPY}>
            <p className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>Mã đơn hàng</p>
        </div>
      ),
      dataIndex: 'orderCode',
      align: 'center',
      width: 140,
      key: 'orderCode',
      fixed: 'left',
      render: (text: string) => (
        <div
          onClick={() => copyToClipBoard(text)}
          className={clsx(DEFAULT_CONTAINER, HIGH_LIGHT_CLASS)}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>Order Number</p>
        </div>
      ),
      dataIndex: 'orderId',
      align: 'center',
      width: 130,
      key: 'orderId',
      fixed: 'left',
      render: (text: string) => {
        const valueCopy = `${URL_EBAY}${text}`;
        return (
          <div className={DEFAULT_CONTAINER}>
            <Tooltip
              placement='bottom'
              title={() => {
                return (
                  <div
                    className='mx-2 cursor-pointer text-center'
                    onClick={() => copyToClipBoard(valueCopy)}
                  >
                    <CopyOutlined />
                    <p>Copy Url</p>
                  </div>
                );
              }}
            >
              <p
                className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
                onClick={() => copyToClipBoard(text)}
              >
                {text}
              </p>
            </Tooltip>
          </div>
        );
      },
    },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>Ngày tạo</p>
        </div>
      ),
      dataIndex: 'dateCreate',
      width: 90,
      fixed: 'left',
      key: 'createdAt',
      align: 'center',
      render: (text: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip
            placement='bottom'
            title={dayjs(text).format(FORMAT_DATE_DD_MM_YYYY)}
          >
            <p className={clsx(COMMON_CLASS, 'w-[70px]')}>
              {dayjs(text).format(FORMAT_DATE_DD_MM_YYYY)}
            </p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>Hạn ship</p>
        </div>
      ),
      dataIndex: 'dateShip',
      align: 'center',
      width: 80,
      fixed: 'left',
      key: 'dateShip',
      render: (text: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {text && (
            <Tooltip
              placement='bottom'
              title={dayjs(text).format(FORMAT_DATE_DD_MM_YYYY)}
            >
              <p className={clsx(COMMON_CLASS, 'w-[70px]')}>
                {dayjs(text).format(FORMAT_DATE_DD_MM_YYYY)}
              </p>
            </Tooltip>
          )}
        </div>
      ),
    },

    {
      title: 'Nhân sự',
      dataIndex: ['userId', 'fullName'],
      width: 180,
      key: 'userName',
      align: 'center',
      render: (text: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },

    {
      title: 'Item Id',
      dataIndex: ['items'],
      align: 'center',
      width: 150,
      key: 'ebayId',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) => {
        return (
          items?.length > 0 &&
          items.map((v, key) => {
            const URL = `https://www.ebay.com/itm/${v.itemId.ebayId}`;
            return (
              <div key={key}>
                <Tooltip
                  placement='bottom'
                  title={renderContent(v.itemId.ebayId, URL)}
                  className='h-full w-full bg-red-500'
                >
                  <span>
                    <Link href={URL} passHref>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        className={clsx(
                          COMMON_CLASS,
                          HIGH_LIGHT_CLASS,
                          'flex max-w-[170px] flex-col truncate p-2 '
                        )}
                      >
                        {v.itemId.ebayId}
                      </a>
                    </Link>
                  </span>
                </Tooltip>
                <p></p>
              </div>
            );
          })
        );
      },
    },
    {
      title: 'Buyer',
      dataIndex: ['buyerId'],
      align: 'center',
      width: 180,
      key: 'buyerId',
      render: (items: string, record: any) => {
        const IdEbay = record.items[0]?.itemId?.ebayId;
        const URL = `https://www.ebay.com/contact/sendmsg?item_id=${IdEbay}&recipient=${items}&message_type_id=14`;
        return (
          <div>
            <Tooltip
              placement='bottom'
              title={() => (
                <div
                  className='mx-2 text-center'
                  onClick={() => copyToClipBoard(items)}
                >
                  <CopyOutlined />
                  <p>Copy Buyer</p>
                </div>
              )}
            >
              <p
                className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
                onClick={() => copyToClipBoard(URL)}
              >
                {items}
              </p>
            </Tooltip>
          </div>
        );
      },
    },
    // {
    //   title: 'Mail',
    //   dataIndex: 'mail',
    //   align: 'center',
    //   width: 180,
    //   key: 'mail',
    //   render: (text: string) => (
    //     <div onClick={() => copyToClipBoard(text)}>
    //       <Tooltip placement='bottom' title={CLICK_TO_COPY}>
    //         <p className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}>{text}</p>
    //       </Tooltip>
    //     </div>
    //   ),
    // },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>ADD (info Khách)</p>
          {/* <Checkbox
            value={checkBoxValue?.buyerInfo}
            onChange={(e) => {
              if (handleChangeCheckBox) {
                handleChangeCheckBox('buyerInfo', e.target.checked);
              }
            }}
          /> */}
        </div>
      ),
      dataIndex: 'buyerInfo',
      align: 'center',
      width: 180,
      key: 'buyerInfo',
      render: (text: string) => (
        <div onClick={() => copyToClipBoard(text)}>
          <Tooltip placement='bottom' title={CLICK_TO_COPY}>
            <p className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Title',
      dataIndex: 'items',
      align: 'center',
      width: 300,
      key: 'title',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) =>
        items.length > 0 &&
        items.map((v, k) => (
          <div key={k} onClick={() => copyToClipBoard(v.title)}>
            <Tooltip placement='bottom' title={CLICK_TO_COPY}>
              <p className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}>{v.title}</p>
            </Tooltip>
          </div>
        )),
    },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>Link Item</p>
          {/* <Checkbox
            value={checkBoxValue?.linkItem}
            onChange={(e) => {
              if (handleChangeCheckBox) {
                handleChangeCheckBox('linkItem', e.target.checked);
              }
            }}
          /> */}
        </div>
      ),
      dataIndex: ['items'],
      align: 'center',
      width: 180,
      key: 'ebayLink',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) =>
        items?.length > 0 &&
        items.map((v, key) => (
          <div key={key} onClick={() => copyToClipBoard(v.itemId.importLink)}>
            <Tooltip placement='bottom' title={CLICK_TO_COPY}>
              <p className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}>
                {v.itemId.importLink}
              </p>
            </Tooltip>
          </div>
        )),
    },
    {
      title: 'Giá WM',
      dataIndex: ['items'],
      width: 100,
      align: 'center',
      key: 'wmPrice',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items &&
            items.length > 0 &&
            items.map((v, key) => (
              <div key={key}>
                {v.itemId.importPrice?.length > 0 &&
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  v.itemId.importPrice?.map((value: any, k: any) => (
                    <Tooltip placement='bottom' title={value} key={k}>
                      <p className={COMMON_CLASS}>{`${value}`}</p>
                    </Tooltip>
                  ))}
              </div>
            ))}
        </div>
      ),
    },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>Giá Ebay</p>
        </div>
      ),
      dataIndex: ['items'],
      align: 'center',
      width: 100,
      key: 'priceEbay',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={v.priceEbay}>
                  <p className={COMMON_CLASS}> {`${v.priceEbay}`}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Thuế',
      dataIndex: ['items'],
      align: 'center',
      width: 100,
      key: 'taxPrice',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={v.taxPrice}>
                  <p className={COMMON_CLASS}> {`${v.taxPrice || 0}`}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Chi phí Ads',
      dataIndex: ['items'],
      align: 'center',
      width: 100,
      key: 'costAds',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={v.costAds}>
                  <p className={COMMON_CLASS}> {`${v.costAds || 0}`}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Chi phí khác',
      dataIndex: ['items'],
      width: 100,
      align: 'center',
      key: 'otherCost',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={v.otherCost}>
                  <p className={COMMON_CLASS}> {`${v.otherCost || 0}`}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Nghách',
      dataIndex: ['items'],
      align: 'center',
      width: 200,
      key: 'nicheName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={v.itemId.nicheId.name}>
                  <p className={COMMON_CLASS}> {v.itemId.nicheId.name}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: (
        <div className='flex flex-row items-center justify-center gap-1'>
          <p className='m-0 p-0'>Số lượng</p>
          {/* <Checkbox
            value={checkBoxValue?.quantity}
            onChange={(e) => {
              if (handleChangeCheckBox) {
                handleChangeCheckBox('quantity', e.target.checked);
              }
            }}
          /> */}
        </div>
      ),
      dataIndex: ['items'],
      align: 'center',
      width: 80,
      key: 'quantity',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={v.quantity}>
                  <p className={COMMON_CLASS}> {`${v.quantity || 0}`}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Trạng thái đơn',
      dataIndex: ['orderStatus'],
      align: 'center',
      width: 100,
      key: 'orderStatus',
      render: (items: string, record: ORDERS_LIST_TYPE) => {
        const color = getColor[items as 'CANCEL'];
        return (
          <div
            onClick={() => handleShowModal && handleShowModal(record)}
            className={clsx(DEFAULT_CONTAINER, 'px-2')}
          >
            <div
              className={clsx(
                DEFAULT_CONTAINER,
                'h-[25px] rounded-[20px] text-[#fff]'
              )}
              style={{
                background: color,
              }}
            >
              <Tooltip placement='bottom' title={STATUS[items as 'CANCEL']}>
                <p className={COMMON_CLASS}>{STATUS[items as 'CANCEL']} </p>
              </Tooltip>
            </div>
          </div>
        );
      },
    },
    {
      title: 'Lý do cancel',
      dataIndex: ['reasonCancel'],
      align: 'center',
      width: 180,
      key: 'reasonCancel',
      render: (items: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={items}>
            <p className={COMMON_CLASS}>{items} </p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'CO',
      dataIndex: ['items'],
      align: 'center',
      width: 180,
      key: 'coName',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) =>
        items.length > 0 &&
        items.map((v, k) => (
          <div key={k}>
            <Tooltip placement='bottom' title={v.coId?.name || ''}>
              <p className={COMMON_CLASS}>{v.coId?.name || ''}</p>
            </Tooltip>
          </div>
        )),
    },
    {
      title: 'Rate CO',
      dataIndex: ['items'],
      align: 'center',
      key: 'coRate',
      width: 100,

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={`${v.coRate || 0} `}>
                  <p className={COMMON_CLASS}>{`${v.coRate || 0} `}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },

    {
      title: 'Trạng thái CO',
      dataIndex: ['items'],
      align: 'center',
      key: 'coStatus',
      width: 180,

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={`${v.coStatus || ''} `}>
                  <p className={COMMON_CLASS}>{`${v.coStatus || ''} `}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Email Order',
      dataIndex: ['items'],
      align: 'center',
      key: 'coEmail',
      width: 100,

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) => (
        <div>
          {items.length > 0 &&
            items.map((v, k) => (
              <div
                key={k}
                onClick={() => copyToClipBoard(v.coEmail)}
                className={clsx(DEFAULT_CONTAINER, HIGH_LIGHT_CLASS, 'p-1')}
              >
                <Tooltip placement='bottom' title={CLICK_TO_COPY}>
                  <p className={clsx(COMMON_CLASS, 'w-[100px]')}>{`${
                    v.coEmail || ''
                  } `}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },

    {
      title: 'Id Order',
      dataIndex: ['items'],
      align: 'center',
      width: 180,
      key: 'coOrder',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) => (
        <div>
          {items.length > 0 &&
            items.map((v, k) => (
              <div
                key={k}
                onClick={() => copyToClipBoard(v.coOrder)}
                className={clsx(DEFAULT_CONTAINER, HIGH_LIGHT_CLASS, 'p-1')}
              >
                <Tooltip placement='bottom' title={CLICK_TO_COPY}>
                  <p className={COMMON_CLASS}>{`${v.coOrder || ''} `}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },

    {
      title: 'Tracking',
      dataIndex: ['items'],
      align: 'center',
      width: 180,
      key: 'coNote',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[]) => (
        <div className={clsx(DEFAULT_CONTAINER, HIGH_LIGHT_CLASS)}>
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k} onClick={() => copyToClipBoard(v.coNote)}>
                <Tooltip placement='bottom' title={CLICK_TO_COPY}>
                  <p className={COMMON_CLASS}>{`${v.coNote || ''} `}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Link Tracking',
      dataIndex: ['buyerNote'],
      align: 'center',
      width: 180,
      key: 'buyerNote',
      render: (items: string) => (
        <div className={DEFAULT_CONTAINER}>
          <Tooltip placement='bottom' title={renderNewContent(items)}>
            <span>
              <Link href={items || ''} passHref>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className={clsx(
                    'w-[170px] truncate p-2',
                    COMMON_CLASS,
                    HIGH_LIGHT_CLASS
                  )}
                >
                  <p
                    className={clsx(
                      'max-w-[170px] truncate p-2',
                      COMMON_CLASS,
                      HIGH_LIGHT_CLASS
                    )}
                  >
                    {items}
                  </p>
                </a>
              </Link>
            </span>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Trạng thái acc',
      dataIndex: ['vpsId', 'status'],
      align: 'center',
      width: 80,
      key: 'accStatus',
      render: (items: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={items}>
            <p className={COMMON_CLASS}>{items}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Giá CO',
      dataIndex: ['items'],
      align: 'center',
      width: 100,
      key: 'coPrice',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: any[], record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items.length > 0 &&
            items.map((v, k) => (
              <div key={k}>
                <Tooltip placement='bottom' title={`${v.coPrice || 0}`}>
                  <p className={COMMON_CLASS}>{`${v.coPrice || 0}`}</p>
                </Tooltip>
              </div>
            ))}
        </div>
      ),
    },
    {
      title: 'Trạng thái TT',
      dataIndex: ['paymentStatus'],
      align: 'center',
      width: 100,
      key: 'paymentStatus',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={items}>
            <p className={clsx(COMMON_CLASS, 'w-[100px]')}>{items}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Ngày TT',
      dataIndex: ['paymentDate'],
      align: 'center',
      width: 100,
      key: 'paymentDate',
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      render: (items: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          {items && (
            <Tooltip
              placement='bottom'
              title={dayjs(items).format(FORMAT_DATE_DD_MM_YYYY)}
            >
              <p className={clsx(COMMON_CLASS, 'w-[100px]')}>
                {dayjs(items).format(FORMAT_DATE_DD_MM_YYYY)}
              </p>
            </Tooltip>
          )}
        </div>
      ),
    },

    {
      title: 'Trạng thái bán hàng',
      dataIndex: ['vpsId', 'statusOpen'],
      align: 'center',
      width: 100,
      key: 'vpsStatus',
      render: (items: string, record: ORDERS_LIST_TYPE) => (
        <div
          onClick={() => handleShowModal && handleShowModal(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={items}>
            {vpsStatus[items as 'DUNGBANCHODELI']}
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Note',
      dataIndex: 'note',
      align: 'center',
      width: 180,
      key: 'note',
      render: (note: any) => {
        return (
          <div
            className={clsx(
              DEFAULT_CONTAINER,
              COMMON_CLASS,
              'flex flex-row items-center justify-center gap-4 p-4'
            )}
          >
            {note}
          </div>
        );
      },
    },
    {
      title: 'Staff Note',
      dataIndex: 'staffNote',
      align: 'center',
      width: 180,
      key: 'staffNote',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      editable: true,
      fixed: 'right',
      render: (items: Array<I_NOTE>) => {
        const staffNote = items
          .filter((x) => x.noteType === E_NOTE.STAFF)
          .map((v) => ({
            ...v,
            createdAt: moment(v.createdAt).format(
              FORMAT_DATE_DD_MM_YYYY_HH_mm_ss
            ),
          }))
          .sort(function (a, b) {
            return (
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
            );
          });
        return (
          <div
            className={clsx(
              DEFAULT_CONTAINER,
              'flex flex-row items-center justify-center gap-4'
            )}
          >
            <span className='m-w-[100px] truncate  p-2 text-[11px] '>
              {staffNote.length > 0 &&
                `${moment(
                  staffNote[staffNote.length - 1].createdAt.toString(),
                  'D/M'
                ).format('D/M')}-${staffNote[staffNote.length - 1].note}`}
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
      title: 'Manager Note',
      dataIndex: 'staffNote',
      align: 'center',
      width: 80,
      key: 'staffNote',
      fixed: 'right',
      render: (items: Array<I_NOTE>) => {
        const managerNote = items.filter((x) => x.noteType === E_NOTE.MANAGER);
        return (
          <div
            className={clsx(
              DEFAULT_CONTAINER,
              'flex flex-row items-center justify-center gap-4 break-all p-2 text-[11px]'
            )}
          >
            {managerNote.length > 0 && managerNote[managerNote.length - 1].note}
            {managerNote.length > 0 && (
              <Tooltip title={renderInfoNote(managerNote)} placement='left'>
                <InfoCircleOutlined />
              </Tooltip>
            )}
          </div>
        );
      },
    },
  ];

  return ORDERS_COLUMN;
};

export const HEADER_EXPORT = [
  { label: 'VPS', key: 'VPS' },
  { label: 'Order Number', key: 'orderCode' },
  { label: 'Mã đơn hàng', key: 'orderId' },
  { label: 'Hạn ship', key: 'dateShip' },
  { label: 'Ngày tạo', key: 'dateCreate' },
  { label: 'Nhân sự', key: 'employee' },
  { label: 'Item Id', key: 'items' },
  { label: 'buyerId', key: 'buyerId' },
  { label: 'ADD (info Khách)', key: 'buyerInfo' },
  { label: 'Title', key: 'title' },
  { label: 'Link Item', key: 'linkItem' },
  { label: 'Giá WM', key: 'priceWM' },
  { label: 'Giá Ebay', key: 'priceEbay' },
  { label: 'Thuế ', key: 'taxPrice' },
  { label: 'Chi phí Ads', key: 'costAds' },
  { label: 'Chi phí khác', key: 'otherCost' },
  { label: 'Nghách', key: 'nicheName' },
  { label: 'Số lượng', key: 'quantity' },
  { label: 'Trạng thái đơn', key: 'orderStatus' },
  { label: 'Lý do cancel', key: 'reasonCancel' },
  { label: 'CO', key: 'cO' },
  { label: 'rate Co', key: 'rateCo' },
  { label: 'Note', key: 'note' },
  { label: 'Trạng Thái Co', key: 'coStatus' },
  { label: 'Email Order', key: 'emailOrder' },
  { label: 'Id Order', key: 'coOrder' },
  { label: 'Tracking', key: 'coNote' },
  { label: 'Link Tracking', key: 'buyerNote' },
  { label: 'Trạng thái acc', key: 'status' },
  { label: 'Giá CO', key: 'coPrice' },
  { label: 'TT Thanh toán', key: 'paymentStatus' },
  { label: 'Ngày thanh toán', key: 'paymentDate' },
  { label: 'Trạng thái bán hàng', key: 'statusOpen' },
  { label: 'Staff Note', key: 'staffNote' },
  { label: 'Manager Note', key: 'mangerNote' },
];
