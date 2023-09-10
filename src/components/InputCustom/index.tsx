import { Input, InputProps } from 'antd';

import SearchIcon from '@/app/components/Icon/SearchIcon';
type VInputProps = InputProps & {
  label?: string;
  required?: boolean;
  isHorizal?: boolean;
};
const InputCustome = ({ ...props }: VInputProps) => {
  return (
    <Input
      className='h-[35px] rounded-[5px] border-[1px] border-[#E9EDF5] bg-[#fff]'
      prefix={<SearchIcon />}
      {...props}
    />
  );
};

export default InputCustome;
