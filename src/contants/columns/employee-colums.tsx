/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnsType } from 'antd/lib/table';

import storage from '@/utils/storage';

import { USERS_TEAM } from '../Storage';

const { getItem } = storage();

const teams = getItem(USERS_TEAM);

const arrTeams = teams && JSON.parse(teams);
export interface IUserTeam {
  createdAt: string;
  id: string;
  name: string;
  updatedAt: string;
}
export const EMPLOYEE_COLUMNS: ColumnsType<any> = [
  {
    title: 'Tên nhân viên',
    dataIndex: 'fullName',
    key: 'fullName',
    align: 'center',
  },
  {
    title: 'Team',
    dataIndex: 'teams',
    key: 'team',
    align: 'center',
    render: (team: string[]) => {
      const newTeams = team.map((x: any) =>
        arrTeams.filter((v: IUserTeam) => v.id === x?.teamId)
      );
      return (
        <div>
          {newTeams.map((v) =>
            v.map((x: IUserTeam) => (
              <p key={x.id} className='m-0'>
                {x.name}
              </p>
            ))
          )}
        </div>
      );
    },
  },
  {
    title: 'Bộ phận',
    dataIndex: 'department',
    key: 'department',
    align: 'center',
  },
  {
    title: 'User',
    dataIndex: 'username',
    key: 'user',
    align: 'center',
  },
];

export const dataMockEmployee = [
  {
    nameEmployee: 'a',
  },
];
