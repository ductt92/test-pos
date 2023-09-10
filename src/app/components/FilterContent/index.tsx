import { Button, Collapse, Modal } from 'antd';
import { Fragment, useMemo, useState } from 'react';

import FilterIcon from '@/app/components/Icon/FilterIcon';
import InputCustome from '@/app/components/InputCustom';
import SaveFilterItem from '@/app/components/SaveFilterItem';
import SelectCustome from '@/app/components/SelectCustom';

const { Panel } = Collapse;

const FilterModal = () => {
  const [filterOptions, setFilterOptions] = useState<Array<Array<string>>>([
    ['1', '2'],
    ['1', '2'],
    ['1', '2'],
    ['1', '2'],
  ]);

  const [openModalFilterSave, setOpenModalFilterSave] =
    useState<boolean>(false);

  const getExtraCollapse = (idx: number) => {
    const options = filterOptions?.[idx];
    return (
      <div className='rounded-lg border border-[#007AFF] px-3 text-[#007AFF]'>
        Đã chọn {options?.length || 0}
      </div>
    );
  };

  const setFilter = (index: number) => (options: Array<string>) => {
    setFilterOptions((current) =>
      current?.map((item, idx) => {
        if (idx === index) {
          return options;
        }
        return item;
      })
    );
  };

  const setFilter0 = useMemo(() => {
    return setFilter(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFilter1 = useMemo(() => {
    return setFilter(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFilter2 = useMemo(() => {
    return setFilter(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setFilter3 = useMemo(() => {
    return setFilter(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancel = () => {
    setOpenModalFilterSave(false);
  };

  return (
    <Fragment>
      <Modal
        visible={openModalFilterSave}
        closeIcon={false}
        onOk={handleCancel}
        onCancel={handleCancel}
        footer={null}
        width={380}
      >
        <div className='-mx-6 grid grid-cols-1'>
          {Array(4)
            .fill(1)
            .map((_, idx) => (
              <SaveFilterItem key={idx} />
            ))}
        </div>
      </Modal>
      <div className='flex min-h-[540px] w-full flex-col items-center divide-y divide-[#DCDCDC] 2xl:min-h-[936px]'>
        <div className='w-full flex-grow-0 p-3'>
          <InputCustome placeholder='Tìm kiếm bộ lọc' />
          <p
            className='mt-3 flex cursor-pointer text-[#007AFF]'
            onClick={() => setOpenModalFilterSave(true)}
          >
            <FilterIcon /> <span className='mx-2'>Bộ lọc đã lưu</span>
          </p>
        </div>
        <div className='grid w-full flex-grow grid-cols-1 divide-y divide-[#DCDCDC]'>
          <Collapse className='border-none bg-transparent'>
            <Panel header='Trạng thái' key='0' extra={getExtraCollapse(0)}>
              <SelectCustome
                maxTagCount='responsive'
                setSelect={setFilter0}
                value={filterOptions?.[0]}
              />
            </Panel>
            <Panel header='Danh mục' key='1' extra={getExtraCollapse(1)}>
              <SelectCustome
                maxTagCount='responsive'
                setSelect={setFilter1}
                value={filterOptions?.[1]}
              />
            </Panel>
            <Panel header='Người tạo' key='2' extra={getExtraCollapse(2)}>
              <SelectCustome
                maxTagCount='responsive'
                setSelect={setFilter2}
                value={filterOptions?.[2]}
              />
            </Panel>
            <Panel header='Tag' key='3' extra={getExtraCollapse(3)}>
              <SelectCustome
                maxTagCount='responsive'
                setSelect={setFilter3}
                value={filterOptions?.[3]}
              />
            </Panel>
          </Collapse>
        </div>
        <div className='flex w-full items-center justify-center gap-3 py-3'>
          <Button danger className='w-[86px] font-semibold'>
            Hủy
          </Button>
          <Button
            type='primary'
            className='w-[86px] bg-[#007AFF] font-semibold'
          >
            Lọc
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterModal;
