/* eslint-disable @typescript-eslint/no-explicit-any */
import { MailTypeEnum, QueryParams } from '@/contants/common.constants';
import HttpRequest from '@/utils/Http-request';

export const getEmailServices = async ({
  page,
  pageSize,
  search,
  excludeType,
  searchVPS,
  searchEmployee,
  searchLabelText,
  searchBuyer,
  searchBank,
}: QueryParams & {
  excludeType: MailTypeEnum;
  searchVPS?: string;
  searchEmployee?: string;
  searchLabelText?: string;
  searchBuyer?: string;
  searchBank?: string;
}) => {
  const email = await HttpRequest.get('mails', {
    params: {
      page,
      pageSize,
      search,
      excludeType,
      searchVPS,
      searchEmployee,
      searchLabelText,
      searchBuyer,
      searchBank,
    },
  });
  return email;
};

export const UpdateEmailServices = async ({
  id,
  note,
  payoutDateReturnBank,
}: {
  id: string;
  note?: string;
  payoutDateReturnBank?: string;
}) => {
  const updateEmail = await HttpRequest.patch(`mails/${id}/update`, {
    note,
    payoutDateReturnBank,
  });
  return updateEmail;
};
