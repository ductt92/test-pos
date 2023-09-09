import { Tooltip } from 'antd';
import { ColumnsType } from 'antd/lib/table';

import { INiche } from '../types/niche.types';

const COMMON_CLASS = ' cursor-pointer truncate text-center';
// const HIGH_LIGHT_CLASS = 'text-[#1890ff]';
const DEFAULT_CONTAINER = 'h-[32px] min-w-[100px]';

export const NICHE_COLUMS: ColumnsType<INiche> = [
  {
    title: 'Tên nghách',
    dataIndex: 'name',
    align: 'center',
    width: 180,
    key: 'nameNiche',
    render: (text: string) => (
      <div className={DEFAULT_CONTAINER}>
        <Tooltip placement='bottom' title={text}>
          <p className={COMMON_CLASS}>{text}</p>
        </Tooltip>
      </div>
    ),
  },
  {
    title: 'Số VPS',
    dataIndex: '321',
    align: 'center',
    width: 180,
    key: 'nameVPS',
    render: (text: string) => (
      <div className={DEFAULT_CONTAINER}>
        <Tooltip placement='bottom' title={text}>
          <p className={COMMON_CLASS}>{text}</p>
        </Tooltip>
      </div>
    ),
  },
  {
    title: 'Doanh thu',
    dataIndex: '123',
    align: 'center',
    width: 180,
    key: 'saleVPS',
    render: (text: string) => (
      <div className={DEFAULT_CONTAINER}>
        <Tooltip placement='bottom' title={text}>
          <p className={COMMON_CLASS}>{text}</p>
        </Tooltip>
      </div>
    ),
  },
];
