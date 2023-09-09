import { message, notification } from 'antd';

import {
  dateFilter,
  dateFilterItems,
  numberFilter,
  numberFilterItems,
  textFilter,
  txtFilterItems,
} from '@/contants/common.constants';
import { exportCSVItems } from '@/services/items.services';

export const alertMessage = (
  content: string,
  type: 'success' | 'error' | 'warning'
) => {
  switch (type) {
    case 'success':
      return message.success({
        content,
        style: {
          textAlign: 'center',
        },
      });
    case 'error':
      return message.error({
        content,
        style: {
          textAlign: 'center',
        },
      });
    case 'warning':
      return message.warning({
        content,
        style: {
          textAlign: 'center',
        },
      });
    default:
      break;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const copyToClipBoard = (value: any, content?: string) => {
  navigator.clipboard.writeText(value);
  message.success({
    content: content || 'Đã copy',
    style: {
      textAlign: 'center',
    },
  });
};

export const dowloadCsv = (id: string) => {
  exportCSVItems(id)
    .then((response) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      const url = window.URL.createObjectURL(new Blob([response]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file.csv'); //or any other extension
      document.body.appendChild(link);
      link.click();
    })
    .catch(() =>
      notification.error({
        message: 'Something went wrong',
        placement: 'top',
      })
    );
};

export const checkTypeOfFilter = (value: string) => {
  switch (true) {
    case dateFilter.includes(value):
      return 'date';
    case numberFilter.includes(value):
      return 'number';
    default:
      return 'text';
  }
};
export const checkTypeOfFilterItems = (value: string) => {
  switch (true) {
    case dateFilterItems.includes(value):
      return 'date';
    case numberFilterItems.includes(value):
      return 'number';
    default:
      return 'text';
  }
};
export const opitionTypeOfFilter = (value: string) => {
  switch (true) {
    case textFilter.includes(value):
      return [
        { value: 'contains', label: 'contains' },
        { value: 'isEmty', label: 'Is Emty' },
        { value: 'isNotEmty', label: 'Is Not Emty' },
      ];
    case numberFilter.includes(value):
      return [
        { value: '>', label: '>' },
        { value: '<', label: '<' },
        { value: '=', label: '=' },
      ];
    default:
      // return SELECT_DATE.map((v) => ({ value: v, label: v }));
      return;
  }
};

export const opitionTypeOfFilterItems = (value: string) => {
  switch (true) {
    case txtFilterItems.includes(value):
      return [
        { value: 'contains', label: 'contains' },
        { value: 'isEmty', label: 'Is Emty' },
        { value: 'isNotEmty', label: 'Is Not Emty' },
      ];
    case numberFilterItems.includes(value):
      return [
        { value: '>', label: '>' },
        { value: '<', label: '<' },
        { value: '=', label: '=' },
      ];
    default:
      // return SELECT_DATE.map((v) => ({ value: v, label: v }));
      return;
  }
};

export const getColor = {
  NEW: '#ffffff',
  DAGUI: '#ff9900',
  TRACKAO: '#ffffff',
  SHIPPED: '#00ff00',
  DELI: '#00ffff',
  DATT: '#ffffff',
  CANCEL: '#ff00ff',
  CASE: '#ffffff',
  REFUND: '#ffffff',
  // RETURN: 'Return', #ff0000
  NOSHIP: '#ffff00',
  DIE: '#ff0000',
};
