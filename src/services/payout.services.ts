import { MailTypeEnum, QueryParams } from '@/contants/common.constants';
import HttpRequest from '@/utils/Http-request';

export const getPayoutServices = async ({
  page,
  pageSize,
  search,
  includeType,
  searchVPS,
  searchEmployee,
  searchLabelText,
  searchBuyer,
  searchBank,
}: QueryParams & {
  includeType: MailTypeEnum;
  searchEmployee?: string;
  searchLabelText?: string;
  searchBuyer?: string;
  searchBank?: string;
  searchVPS?: string;
}) => {
  const params = {
    page,
    pageSize,
    search,
    includeType,
    searchVPS,
    searchEmployee,
    searchLabelText,
    searchBuyer,
    searchBank,
  };
  const payout = await HttpRequest.get('mails', {
    params: params,
  });
  return payout;
};
