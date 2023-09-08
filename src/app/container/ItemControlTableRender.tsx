/* eslint-disable @typescript-eslint/no-explicit-any */

import NextSlide from '@/app/components/Icon/NextSlide';
import PrevSlide from '@/app/components/Icon/PrevSlide';

const ItemControlTableRender = (_: any, type: string, originalElement: any) => {
  if (type === 'prev') {
    return (
      <div className='flex h-full w-full items-center justify-center rounded-full bg-[#E0E6ED]'>
        {/* <FirstRow /> */}
        <NextSlide />
      </div>
    );
  }
  if (type === 'next') {
    return (
      <div className='flex h-full w-full items-center justify-center rounded-full bg-[#E0E6ED]'>
        <PrevSlide />
      </div>
    );
  }
  return originalElement;
};

export default ItemControlTableRender;
