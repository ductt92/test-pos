import ProducIcon from '@/app/components/Icon/ProductIcon';

interface IRoutes {
  path: string;
  icons?: React.ReactNode;
  title: string;
}

export const routes: IRoutes[] = [
  {
    path: '/',
    title: 'Sản phẩm',
    icons: <ProducIcon className='-translate-x-1 text-xl' />,
  },
];
