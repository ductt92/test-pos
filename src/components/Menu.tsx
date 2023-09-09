/* eslint-disable unused-imports/no-unused-vars */
import { WarningOutlined } from '@ant-design/icons';
import { Menu, MenuProps, Modal } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { USER } from '@/contants/Storage';
import { routes } from '@/routes/routes';
import storage from '@/utils/storage';

type MenuItem = Required<MenuProps>['items'][number];

function getMenuItems(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const MenuContainer = () => {
  const router = useRouter();
  const [isCreateUser, setIsCreateUser] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isCreateTeam, setIsCreateTeam] = useState<boolean>(false);
  const { removeAll, getItem } = storage();

  const handleCreateUser = () => {
    setIsCreateUser(true);
  };
  const handleCreateTeams = () => {
    setIsCreateTeam(true);
  };

  const handleCloseCreateTeam = () => {
    setIsCreateTeam(false);
  };

  const handleCancelCreateUser = () => {
    setIsCreateUser(false);
  };
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleRedirect: MenuProps['onClick'] = (e) => {
    router.push(`/${e.key}`);
  };
  const items: MenuItem[] = routes.map((v) =>
    getMenuItems(v.title, v.path, v.icons)
  );

  const handleLogout = async () => {
    removeAll();
    await router.push('/login');
  };

  const handleOpenLogout = () => {
    Modal.confirm({
      title: 'Thông báo',
      icon: <WarningOutlined className='text-red-700' />,
      content: 'Bạn có chắc chắn muốn đăng xuất tài khoản',
      okText: 'Đồng ý',
      cancelText: 'Không',
      onOk: handleLogout,
    });
  };

  const defaultSelectKey = [router.asPath];
  const DEFAULT_CLASS = 'mt-[10px] flex h-[40px] flex-row pl-5';
  const COLLAPSE_CLASS = 'flex h-[40px]  items-end justify-center';

  const user = getItem(USER);

  return (
    <div className='flex flex-col bg-white pt-9'>
      <div className='flex-1 p-2'>
        <Menu
          onClick={handleRedirect}
          defaultSelectedKeys={defaultSelectKey}
          mode='inline'
          defaultOpenKeys={defaultSelectKey}
          inlineCollapsed={collapsed}
          className='border-none'
          items={items}
        />
      </div>
    </div>
  );
};

export default MenuContainer;
