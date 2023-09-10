import { Button, Collapse } from 'antd';
import { useMemo } from 'react';

import FilterIcon from '@/app/components/Icon/FilterIcon';
import InputCustome from '@/app/components/InputCustom';
import SelectCustome from '@/app/components/SelectCustom';
const { Panel } = Collapse;

const FilterModal = () => {
  const filterCollapse = useMemo(
    () => [
      {
        key: '1',
        label: 'Trạng thái',
        extra: (
          <div className='rounded-lg border border-[#007AFF] px-3 text-[#007AFF]'>
            Đã chọn 2
          </div>
        ),
        children: <SelectCustome maxTagCount='responsive' />,
      },
      {
        key: '2',
        label: 'Danh mục',
        extra: (
          <div className='rounded-lg border border-[#007AFF] px-3 text-[#007AFF]'>
            Đã chọn 2
          </div>
        ),
        children: <SelectCustome />,
      },
      {
        key: '3',
        label: 'Người tạo',
        extra: (
          <div className='rounded-lg border border-[#007AFF] px-3 text-[#007AFF]'>
            Đã chọn 2
          </div>
        ),
        children: <SelectCustome />,
      },
      {
        key: '4',
        label: 'Tag',
        extra: (
          <div className='rounded-lg border border-[#007AFF] px-3 text-[#007AFF]'>
            Đã chọn 2
          </div>
        ),
        children: <SelectCustome />,
      },
    ],
    []
  );

  return (
    <div className='flex min-h-[540px] w-full flex-col items-center divide-y divide-[#DCDCDC] 2xl:min-h-[936px]'>
      <div className='w-full flex-grow-0 p-3'>
        <InputCustome placeholder='Tìm kiếm bộ lọc' />
        <p className='mt-3 flex text-[#007AFF]'>
          <FilterIcon /> <span className='mx-2'>Bộ lọc đã lưu</span>
        </p>
      </div>
      <div className='grid w-full flex-grow grid-cols-1 divide-y divide-[#DCDCDC]'>
        <Collapse accordion ghost>
          {filterCollapse.map((v) => {
            return (
              <Panel header='This is panel header 1' key='1'>
                <p>{v.label}</p>
              </Panel>
            );
          })}
        </Collapse>
      </div>
      <div className='flex w-full items-center justify-center gap-3 py-3'>
        <Button danger className='w-[86px] font-semibold'>
          Hủy
        </Button>
        <Button type='primary' className='w-[86px] bg-[#007AFF] font-semibold'>
          Lọc
        </Button>
      </div>
    </div>
  );
};

export default FilterModal;
