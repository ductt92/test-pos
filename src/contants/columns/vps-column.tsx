import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import clsx from 'clsx';
import dayjs from 'dayjs';
import moment from 'moment';

import { VPS_LIST_TYPE } from '@/contants/types/vps.types';
import { CLICK_TO_COPY } from '@/utils/common-function';
import { copyToClipBoard } from '@/utils/helpers';

import { FORMAT_DATE_DD_MM_YYYY, vpsStatus } from '../common.constants';
import { FilterProps } from '../types';

const COMMON_CLASS = ' cursor-pointer truncate';
const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
const DEFAULT_CONTAINER = 'min-h-[32px] min-w-[50px]';

export const SETTING_COLUMNS: FilterProps = {
  receivedDate: { isVisiable: true, title: 'Ngày lấy VPS' },
  vpsIp: { isVisiable: true, title: 'VPS' },
  vpsId: { isVisiable: true, title: 'User VPS' },
  vpsPass: { isVisiable: true, title: 'Pass VPS' },
  vpsUser: { isVisiable: true, title: 'User ID' },
  vpsName: { isVisiable: true, title: 'Name' },
  dob: { isVisiable: true, title: 'DOB' },
  ssn: { isVisiable: true, title: 'SSN' },
  address: { isVisiable: true, title: 'Địa chỉ' },
  bang: { isVisiable: true, title: 'Bang' },
  city: { isVisiable: true, title: 'City' },
  zip: { isVisiable: true, title: 'Zip' },
  mail: { isVisiable: true, title: 'Mail Ebay' },
  mailPass: { isVisiable: true, title: 'Mail Pass' },
  emailRestore: { isVisiable: true, title: 'Mail khôi phục' },
  phone: { isVisiable: true, title: 'Phone' },
  note: { isVisiable: true, title: 'Note' },
  bank: { isVisiable: true, title: 'Bank' },
  routing: { isVisiable: true, title: 'Routing' },
  accType: { isVisiable: true, title: 'Loại acc' },
  status: { isVisiable: true, title: 'Trạng thái' },
  username: { isVisiable: true, title: 'Nhân sự' },
  team: { isVisiable: true, title: 'Team' },
};

export function renderVPSColums(
  handleOpenEdit: (items: VPS_LIST_TYPE) => void
) {
  const VPS_COLUMN: ColumnsType<VPS_LIST_TYPE> = [
    {
      title: 'VPS',
      dataIndex: 'vpsIp',
      key: 'vpsIp',
      fixed: 'left',
      width: 180,
      align: 'center',
      render: (text: string) => (
        <Tooltip title={CLICK_TO_COPY}>
          <p
            onClick={() => copyToClipBoard(text)}
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS, 'w-[180px]')}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Ngày lấy VPS',
      dataIndex: 'dateCreate',
      key: 'id',
      width: 100,
      align: 'center',
      render: (text: string | Date, record: VPS_LIST_TYPE) => (
        <div
          className={DEFAULT_CONTAINER}
          onClick={() => handleOpenEdit(record)}
        >
          <Tooltip
            placement='bottom'
            title={dayjs(text).format(FORMAT_DATE_DD_MM_YYYY)}
          >
            <p className={COMMON_CLASS}>
              {dayjs(text).format(FORMAT_DATE_DD_MM_YYYY)}
            </p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Ngày hết hạn',
      dataIndex: 'expiryDate',
      key: 'team',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>
              {text && moment(text).format(FORMAT_DATE_DD_MM_YYYY)}
            </p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Đối tác',
      dataIndex: 'partner',
      key: 'team',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },

    {
      title: 'User VPS',
      dataIndex: 'vpsId',
      key: 'vpsId',
      width: 150,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            Administrator
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Pass VPS',
      dataIndex: 'vpsPass',
      key: 'vpsPass',
      width: 180,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'User ID',
      dataIndex: 'vpsUser',
      key: 'vpsUser',
      width: 180,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'vpsName',
      key: 'vpsName',
      width: 180,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'DOB',
      dataIndex: 'dob',
      key: 'dob',
      width: 100,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip
            placement='bottom'
            title={text && moment(text).format('DD/MM')}
          >
            <p className={COMMON_CLASS}>
              {text && moment(text).format('DD/MM')}
            </p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'SSN',
      dataIndex: 'ssn',
      key: 'ssn',
      width: 120,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
      width: 250,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Bang',
      dataIndex: 'bang',
      key: 'bang',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <Tooltip placement='bottom' title={text}>
          <p className={COMMON_CLASS} onClick={() => handleOpenEdit(record)}>
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Zip',
      dataIndex: 'zip',
      key: 'zip',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS} onClick={() => handleOpenEdit(record)}>
              {text}
            </p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Mail Ebay',
      dataIndex: 'mail',
      key: 'mail',
      width: 300,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Mail pass',
      dataIndex: 'mailPass',
      key: 'mailPass',
      width: 180,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },

    {
      title: 'Ebay pass',
      dataIndex: 'ebayPass',
      key: 'ebayPass',
      width: 180,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },
    {
      title: 'Mail khôi phục',
      dataIndex: 'emailRestore',
      key: 'emailRestore',
      width: 180,
      align: 'center',
      render: (text: string) => (
        <Tooltip placement='bottom' title={CLICK_TO_COPY}>
          <p
            className={clsx(COMMON_CLASS, HIGH_LIGHT_CLASS)}
            onClick={() => copyToClipBoard(text)}
          >
            {text}
          </p>
        </Tooltip>
      ),
    },

    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Note',
      dataIndex: 'note',
      key: 'note',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Bank',
      dataIndex: 'bank',
      key: 'bank',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={clsx(COMMON_CLASS)}
        >
          <Tooltip placement='bottom' title={text}>
            <p className='break-words'>{text}</p>
          </Tooltip>
        </div>
      ),
    },

    {
      title: 'Routing',
      dataIndex: 'routing',
      key: 'routing',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Loại acc',
      dataIndex: 'accType',
      key: 'accType',
      width: 50,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },

    {
      title: 'Trạng thái',
      dataIndex: 'status',
      key: 'status',
      width: 80,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Nhân sự',
      dataIndex: ['userId', 'username'],
      key: 'userId',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Team',
      dataIndex: ['teamId', 'name'],
      key: 'team',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>{text}</p>
          </Tooltip>
        </div>
      ),
    },
    {
      title: 'Trạng thái bán hàng',
      dataIndex: 'statusOpen',
      key: 'team',
      width: 180,
      align: 'center',
      render: (text: string, record: VPS_LIST_TYPE) => (
        <div
          onClick={() => handleOpenEdit(record)}
          className={DEFAULT_CONTAINER}
        >
          <Tooltip placement='bottom' title={text}>
            <p className={COMMON_CLASS}>
              {vpsStatus[text as 'DUNGBANCHODELI']}
            </p>
          </Tooltip>
        </div>
      ),
    },
  ];
  return VPS_COLUMN;
}
