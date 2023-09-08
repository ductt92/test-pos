import CloseIcon from '@/app/components/Icon/CloseIcon';

const HeaderModal = ({
  title,
  onClose,
}: {
  title: string;
  onClose: () => void;
}) => {
  return (
    <div
      className='flex h-[50px] flex-row items-center justify-between 
    rounded-t-[4px]
     bg-[#F2F9FF] px-[24px]'
    >
      <p className='m-0 p-0 text-left text-[20px] font-semibold'>{title}</p>
      <div onClick={onClose} className='cursor-pointer'>
        <CloseIcon />
      </div>
    </div>
  );
};

export default HeaderModal;
