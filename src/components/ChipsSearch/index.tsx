import { useEffect, useState } from 'react';

import CloseIcon from '@/components/Icon/CloseIcon';

const dataFakes = [
  {
    id: 1,
    title: 'Trạng thái: Đã xuất kho, Đã xác nhận',
  },
  { id: 2, title: 'Kho: TLM, LK247' },
  {
    id: 3,
    title: 'Kỹ thuật: Bình, Khoa',
  },
];
const ChipsSearch = () => {
  const [dataSearch, setDataSearch] = useState<
    Array<{ id: number; title: string }>
  >([]);
  useEffect(() => {
    setDataSearch(dataFakes);
  }, []);

  const handleDeleteChip = (idRemove: number) => {
    setDataSearch((current) => current.filter(({ id }) => id !== idRemove));
  };
  return (
    <div className='flex flex-wrap items-center justify-start gap-2'>
      {dataSearch.map((item) => (
        <div
          key={item.id}
          className='flex items-center gap-0.5 rounded-md bg-[#F2F9FF] px-2 py-1 text-[#46515F]'
        >
          <span>{item.title}</span>
          <span
            className='cursor-pointer'
            onClick={() => handleDeleteChip(item.id)}
          >
            <CloseIcon stroke='#007AFF' />
          </span>
        </div>
      ))}
    </div>
  );
};

export default ChipsSearch;
