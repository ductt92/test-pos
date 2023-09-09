import { UserAddOutlined } from '@ant-design/icons';

interface IRoutes {
  path: string;
  icons?: React.ReactNode;
  title: string;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    title: 'Kế hoạch',
    icons: <UserAddOutlined className='-translate-x-1 text-xl' />,
  },
];
