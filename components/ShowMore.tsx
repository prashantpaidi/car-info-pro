'use client';

import { updateSearchParams } from '@/utils';
import { useRouter } from 'next/navigation';
import CustomButton from './CustomButton';

interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams('limit', `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className='w-full flex-center gap-5 mt-10'>
      {!isNext && (
        <CustomButton
          btnType='button'
          title='Show More'
          containerStyles='bg-blue-600 rounded-full text-white'
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
