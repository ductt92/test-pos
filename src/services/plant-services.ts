import HttpRequest from '@/utils/Http-request';

export const fetchPlant = ({
  teamId,
  vpsIp,
  page,
  pageSize,
}: {
  teamId: string;
  vpsIp: string;
  page: number;
  pageSize: number;
}) => {
  return HttpRequest.post(
    `vps/vps-plan`,
    {},
    {
      params: {
        page,
        pageSize,
        teamId,
        vpsIp,
      },
    }
  );
};
