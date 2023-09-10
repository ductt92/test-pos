/* eslint-disable no-console */
import { Button, Dropdown, Menu, Modal, Pagination, Select, Table } from 'antd';
import React, { useState } from 'react';

import ContentModal from '@/app/components/ContentModal';
import FilterModal from '@/app/components/FilterContent';
import HeaderModal from '@/app/components/HeaderModal';
import AddIcon from '@/app/components/Icon/AddIcon';
import FilterIcon from '@/app/components/Icon/FilterIcon';
import FirstRow from '@/app/components/Icon/FirstRow';
import LastRow from '@/app/components/Icon/LastRow';
import ThreeDot from '@/app/components/Icon/ThreeDot';
import InputCustome from '@/app/components/InputCustom';
import SelectCustome from '@/app/components/SelectCustom';
import { columData } from '@/app/container/columns';
import { dataSource } from '@/app/container/dataFake';
import ItemControlTableRender from '@/app/container/ItemControlTableRender';

const { Option } = Select;
const HomePageTest = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalFilter, setOpenModalFilter] = useState<boolean>(false);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleCancel = () => {
    setOpenModal(false);
    setOpenModalFilter(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>item 1</Menu.Item>
      <Menu.Item>item 2</Menu.Item>
    </Menu>
  );

  // const items = [
  //   { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
  //   { label: 'item 2', key: 'item-2' },
  // ];
  return (
    <div className='p-40'>
      <InputCustome />

      <button onClick={() => setOpenModal(true)}>Show</button>

      <Modal
        title={
          <HeaderModal title='Điều chỉnh cột hiển thị' onClose={handleCancel} />
        }
        visible={openModal}
        closeIcon={false}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        width={750}
        className='top-[20px] '
      >
        <ContentModal />
      </Modal>
      <Modal
        visible={openModalFilter}
        title={<HeaderModal title='Bộ lọc' onClose={handleCancel} />}
        closeIcon={false}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        width={750}
        className='top-[20px]'
      >
        <FilterModal />
      </Modal>
      <SelectCustome>
        <Option value='test'>Test</Option>
        <Option value='test2'>Test 2</Option>
        <Option value='test3'>Test 3</Option>
        <Option value='test4'>Test 4</Option>
      </SelectCustome>
      <Button
        onClick={() => setOpenModalFilter(true)}
        icon={<FilterIcon />}
        className='flex h-[35px] flex-row items-center justify-center border-[#fff] bg-[#fff] text-[#007AFF]'
      >
        Bộ lọc
      </Button>
      <br />
      <div className='flex flex-row gap-x-[1px]'>
        <button className='border-[none] flex h-[35px] flex-row items-center justify-center rounded-l-[4px] rounded-r-[0px] bg-[#007AFF] p-[6px] text-[#fff]'>
          <div className='flex min-w-[120px] flex-row gap-2'>
            <AddIcon />
            <span> Thêm mới</span>
          </div>
        </button>

        <Dropdown overlay={menu} trigger={['click']} placement='bottomRight'>
          <div
            onClick={(e) => e.preventDefault()}
            className='flex h-[35px] w-[35px] cursor-pointer flex-col items-center justify-center rounded-r-[4px] bg-[#007AFF]'
          >
            <ThreeDot />
          </div>
        </Dropdown>
      </div>
      <Table
        dataSource={dataSource}
        columns={columData}
        pagination={false}
        rowSelection={rowSelection}
      />
      <div className='flex flex-row items-center justify-between gap-x-2'>
        <div className='flex flex-row items-center gap-x-[50px] '>
          <p>Hiển thị 1 - 10 của 1126</p>

          <Select
            className='min-w-[70px]'
            defaultValue={10}
            options={[
              { value: 10, label: 10 },
              { value: 20, label: 20 },
              { value: 50, label: 50 },
              { value: 100, label: 100 },
            ]}
          />
        </div>

        <div className='mt-2 flex h-[46px] flex-row gap-x-2 bg-[#fff] p-2'>
          <div className='flex h-[32] w-[32px] items-center justify-center rounded-full bg-[#E0E6ED]'>
            <FirstRow />
          </div>
          <Pagination
            itemRender={ItemControlTableRender}
            total={dataSource.length}
            defaultCurrent={1}
          />
          <div className='flex h-[32] w-[32px] items-center justify-center rounded-full bg-[#E0E6ED]'>
            <LastRow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTest;
