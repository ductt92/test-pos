/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnsType } from 'antd/es/table';

const renderStatus = (type: string) => {
  switch (type) {
    case 'YC':
      return {
        color: '#FF9E00',
        text: 'Yêu cầu',
      };
    case 'DXK':
      return {
        color: '#007AFF',
        text: 'Đã xuất kho',
      };

    case 'DXN': {
      return {
        color: '#0DC268',
        text: 'Đã xác nhận',
      };
    }
    case 'CXN':
      return {
        color: '#747C87',
        text: 'Cần xác nhận',
      };
    default:
      return {
        color: '#ED0A34',
        text: 'Huỷ',
      };
  }
};

export const columData: ColumnsType<any> = [
  {
    title: 'Mã phiếu',
    dataIndex: 'ordersId',
    key: 'ordersId',
    align: 'center',
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'nameProduct',
    key: 'nameProduct',
    align: 'left',
    width: 400,
    render: (nameProduct: string) => {
      return <span className='text-[#007AFF]'>{nameProduct}</span>;
    },
  },
  {
    title: 'Giá bán ',
    dataIndex: 'price',
    key: 'price',
    align: 'center',
    width: 120,
  },
  {
    title: 'Kho',
    dataIndex: 'warehouse',
    key: 'warehouse',
    width: 70,
    align: 'center',
  },
  {
    title: 'Mã phiếu dịch vụ',
    dataIndex: 'orderProductId',
    key: 'orderProductId',
    align: 'center',
    render: (orderProductId: string) => {
      return <span className='text-[#007AFF]'>{orderProductId}</span>;
    },
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    key: 'status',
    align: 'center',

    render: (status: 'string') => {
      const { color } = renderStatus(status);
      return <span style={{ color }}>{renderStatus(status).text}</span>;
    },
  },
  {
    title: 'Loại',
    dataIndex: 'type',
    key: 'type',
    align: 'center',
  },
  {
    title: 'Kỹ thuật ',
    dataIndex: 'userName',
    key: 'userName',
    align: 'center',
  },
];
