/* eslint-disable no-console */
import { DeleteOutlined, EditOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Modal, Popover } from 'antd';
import { Fragment, useState } from 'react';

import HeaderModal from '@/components/HeaderModal';
import ThreeDot from '@/components/Icon/ThreeDot';
import InputCustome from '@/components/InputCustom';

const ContentChangeItem = ({ index }: { index: number }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCancel = () => {
    setOpenModal(false);
  };
  const handleSaveName = () => {
    console.log(index);
    setOpenModal(false);
  };
  return (
    <Fragment>
      <Modal
        visible={openModal}
        title={<HeaderModal title='Lưu Bộ lọc' onClose={handleCancel} />}
        closeIcon={false}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        width={376}
        className='top-[20px]'
      >
        <div className='flex flex-col'>
          <InputCustome prefix={null} placeholder='Nhập tên bộ lọc' />
          <div className='flex w-full items-center justify-center gap-3 py-3'>
            <Button
              danger
              className='w-[86px] font-semibold'
              onClick={handleCancel}
            >
              Hủy
            </Button>
            <Button
              type='primary'
              className='w-[86px] bg-[#007AFF] font-semibold'
              onClick={handleSaveName}
            >
              Lưu
            </Button>
          </div>
        </div>
      </Modal>
      {!openModal && (
        <div className='grid grid-cols-1'>
          <div
            className='flex w-24 cursor-pointer items-center px-2.5 py-1 hover:bg-[#F2F9FF]'
            onClick={() => setOpenModal(true)}
          >
            <div className='-mt-2 w-6'>
              <EditOutlined />
            </div>
            <span className='font-medium'>Đổi tên</span>
          </div>
          <div className='flex w-24 cursor-pointer items-center px-2.5 py-1 text-red-600 hover:bg-[#F2F9FF]'>
            <div className='-mt-2 w-6'>
              <DeleteOutlined color='#eb2f96' />
            </div>
            <span className='font-medium'>Xóa</span>
          </div>
        </div>
      )}
    </Fragment>
  );
};

const SaveFilterItem = ({
  index,
  name,
  onClick,
}: {
  index: number;
  name: string;
  onClick: () => void;
}) => {
  return (
    <div className='flex items-center gap-4 px-3 py-2 hover:bg-[#F2F9FF]'>
      <div className='-mt-1.5 flex-none cursor-pointer' onClick={onClick}>
        <MenuOutlined />
      </div>
      <div className='flex-grow font-medium'>{name}</div>
      <div className='flex-none cursor-pointer'>
        <Popover
          trigger='click'
          placement='bottomLeft'
          content={<ContentChangeItem index={index} />}
          // arrow={false}yarn
        >
          <ThreeDot fill='black' />
        </Popover>
      </div>
    </div>
  );
};

export default SaveFilterItem;
