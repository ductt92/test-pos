import { useState } from 'react';

const status = ['Đang lọc', 'Yêu cầu', 'Đã xuất kho', 'Cần xác nhận'];

const StatusTab = () => {
  const [statusSelect, setStatusSelect] = useState<number>(0);
  return (
    <div className='flex w-full items-center justify-center'>
      {status.map((item, idx) => (
        <div
          key={idx}
          className={`flex h-9 cursor-pointer items-center justify-center border-b-2 px-2.5 text-black hover:opacity-75 ${
            idx === statusSelect ? 'border-[#007AFF]' : 'border-transparent'
          }`}
          onClick={() => setStatusSelect(idx)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default StatusTab;
