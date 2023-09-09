/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Select, SelectProps, Tag } from 'antd';
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { JSXElementConstructor, ReactElement, useState } from 'react';

import ArrowDown from '@/app/components/Icon/ArrowDownIcon';
import CloseIcon from '@/app/components/Icon/CloseIcon';
import InputCustome from '@/app/components/InputCustom';
const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  { label: 'Đang giao dịch', value: 1 },
  { label: 'Ngừng giao dịch', value: 2 },
];
const defaultCheckedList = [1, 2];

const SelectCustome = ({ children, ...rest }: SelectProps) => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions.map((v) => v.value) : []);
  };
  const tagRender = ({ label, closable, onClose }: CustomTagProps) => {
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        closeIcon={<CloseIcon />}
        className='flex h-[25px] flex-row items-center justify-center gap-1 rounded-[20px] border-[1px] border-[#007AFF] bg-[#F2F9FF] text-[#000]'
      >
        <span className='text-[#000]'>{label}</span>
      </Tag>
    );
  };

  const renderDropDown = (
    menu: ReactElement<any, string | JSXElementConstructor<any>>
  ) => {
    return (
      <div className='flex flex-col gap-1 '>
        <div className='p-2'>
          <InputCustome placeholder='Tìm kiếm' className='bg-[#F4F4F4]' />
        </div>
        <div>
          <div className='p-2'>
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
              className='text-[#007AFF]'
            >
              Check all
            </Checkbox>
          </div>
          <div className='my-2 h-[1px] bg-[#E0E6ED]' />

          <div className='p-2'>
            <CheckboxGroup
              className='checkboxGroup flex flex-col gap-[17px]'
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <Select
      // showSearch
      mode='multiple'
      showSearch={false}
      suffixIcon={<ArrowDown />}
      className='w-full rounded-[5px]'
      tagRender={tagRender}
      defaultValue={[1, 2]}
      dropdownRender={renderDropDown}
      {...rest}
    >
      {children}
    </Select>
  );
};

export default SelectCustome;
