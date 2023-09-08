/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox, Input } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';

import { columData } from '@/app/container/columns';

const ContentModal = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //  @ts-ignore
  const dataOpition: { label: any; value: any } = columData.map((v) => {
    return {
      label: v.title || '',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //  @ts-ignore
      value: v?.dataIndex || '',
    };
  });

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

  return (
    <div className='grid grid-cols-2 gap-x-[18px] p-6'>
      <div className='rounded border-[1px] border-[#DCDCDC]'>
        <div className='flex h-[50px] items-center justify-center border-b-[1px] border-[#DCDCDC]'>
          <p className='font-semibold'>Thêm cột hiển thị</p>
        </div>
        <div className=' grid h-[60px] w-full items-center  justify-center border-b-[1px] '>
          <Input
            placeholder='Tìm kiếm'
            className='h-[34px] w-full rounded border-[#DCDCDC]'
          />
        </div>
        <div className='flex flex-col p-4'>
          <Checkbox.Group
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //  @ts-ignore
            options={dataOpition}
            onChange={onChange}
            className='newCheckBox flex flex-col gap-y-2'
          />
        </div>
      </div>

      <div className='rounded border-[1px] border-[#DCDCDC]'>
        <div className='flex h-[50px] items-center justify-center border-b-[1px] border-[#DCDCDC]'>
          <p className='font-semibold'> Cột hiển thị</p>
        </div>
        <div className=' grid h-[60px] w-full items-center  justify-center border-b-[1px] '>
          <p className='text-center font-[500] text-[#007AFF]'>
            Di chuyển để sắp xếp cột hiển thị
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentModal;
