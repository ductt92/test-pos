import { Select } from 'antd';

import InputCustome from '@/app/components/InputCustom';
import SelectCustome from '@/app/components/SelectCustom';

const { Option } = Select;
const HomePageTest = () => {
  return (
    <div className='p-40'>
      <InputCustome />
      <SelectCustome>
        <Option value='test'>Test</Option>
        <Option value='test2'>Test 2</Option>
        <Option value='test3'>Test 3</Option>
        <Option value='test4'>Test 4</Option>
      </SelectCustome>
    </div>
  );
};

export default HomePageTest;
