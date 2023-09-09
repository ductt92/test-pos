import { identity, pickBy } from 'lodash';
import moment from 'moment';
import querystring, { StringifyOptions } from 'query-string';

import { FORMAT_DATE_DD_MM_YYYY } from '@/contants/common.constants';

export const formatDateRequest = (date: string | Date | undefined) => {
  return moment(date).format().toString();
};

export const formatRangeDate = (date: Date | string) => {
  return moment(date, FORMAT_DATE_DD_MM_YYYY).toISOString();
};

export function toQuery(
  url: string,
  params?: object,
  option?: StringifyOptions
) {
  const trulyParams = pickBy(params, identity);
  return `${url}?${querystring.stringify(
    trulyParams || {},
    option || { arrayFormat: 'bracket' }
  )}`;
}

export const CLICK_TO_COPY = 'Click to copy';

// today, yesterday, 7 ngày, 30 ngày và custom nhé
// export const startDateWithParams = (value: string) => {
//   const date = new Date();
//   switch (value) {
//     case SELECT_DATE[0]:
//       date.setDate(date.getDate());
//       return moment(date).format(FORMAT_DATE_DD_MM_YYYY);
//     case SELECT_DATE[1]:
//       date.setDate(date.getDate() - 1);
//       return moment(date).format(FORMAT_DATE_DD_MM_YYYY);
//     case SELECT_DATE[2]:
//       date.setDate(date.getDate() - 7);
//       return moment(date).format(FORMAT_DATE_DD_MM_YYYY);
//     case SELECT_DATE[3]:
//       date.setDate(date.getDate() - 30);
//       return moment(date).format(FORMAT_DATE_DD_MM_YYYY);
//     default:
//       return null;
//   }
// };
