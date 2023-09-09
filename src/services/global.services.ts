/* eslint-disable unused-imports/no-unused-vars */
import { QueryParams, TYPE_REPORT } from '@/contants/common.constants';
import { PaginationType, TeamOverViewType, TReport } from '@/contants/types';
import HttpRequest from '@/utils/Http-request';

type ParamsProps = {
  fromDate?: string | Date;
  endDate?: string | Date;
  team?: string;
  user?: string;
  typeOfReport?: TYPE_REPORT;
  vps?: string;
} & QueryParams;

type responseType = {
  data: Array<TeamOverViewType>;
} & PaginationType;

export const getGlobalServices = async ({
  page,
  pageSize,
  search,
  team,
  user,
  fromDate,
  endDate,
  typeOfReport,
}: ParamsProps) => {
  const globalData = await HttpRequest.get('teams/overview', {
    params: {
      page,
      pageSize,
      search,
      fromDate,
      team,
      user,
      endDate,
      typeOfReport,
    },
  });
  return globalData as unknown as Array<TeamOverViewType>;
};

export const getReportTeamsServices = async ({
  page,
  pageSize,
  search,
  team,
  user,
  fromDate,
  endDate,
  typeOfReport,
}: ParamsProps) => {
  const globalData = await HttpRequest.get('item/item/report', {
    params: {
      page,
      pageSize,
      search,
      fromDate,
      team,
      user,
      endDate,
      typeOfReport,
    },
  });
  return globalData as unknown as TReport[];
};
