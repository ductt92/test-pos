import React from 'react';

import MenuLayout from '@/components/MenuLayout';
import HomePageTest from '@/container';

function HomePage() {
  return (
    <MenuLayout>
      <div className='bg-gray-300 p-4'>
        <HomePageTest />
      </div>
    </MenuLayout>
  );
}

export default HomePage;
