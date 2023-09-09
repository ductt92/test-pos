import React from 'react';

import MenuContainer from './Menu';

function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex h-screen flex-col'>
      <div className='flex flex-1 flex-row'>
        <MenuContainer />
        <div className='flex-1 flex-col overflow-y-auto bg-[#F2F2F2]'>
          <div className='h-full rounded-md bg-white'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default MenuLayout;
