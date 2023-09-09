import HttpRequest from '@/utils/Http-request';

import { IUserTeam } from './Authen.type';

export const fetchTeams = async () => {
  const data: Array<IUserTeam> = await HttpRequest.get('teams');
  return data;
};
export const createTeamServices = async (name: string) => {
  return await HttpRequest.post('teams', name);
};

export const changeOldPassword = async ({
  newPassword,
  id,
}: {
  id: string;
  newPassword: string;
}) => {
  return await HttpRequest.patch(`users/${id}/change-pass`, { newPassword });
};
