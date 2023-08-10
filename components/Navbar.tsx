import Image from 'next/image';
import Link from 'next/link';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <div className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href='/' className='flex justify-center items-center'>
          <Image
            src='/logo.svg'
            alt='logo'
            width={100}
            height={18}
            className='object-contain'
          />{' '}
          <span className='text-lg font-black'>Car Info Pro</span>
        </Link>
        <CustomButton
          title='Login'
          btnType='button'
          containerStyles='text-blue-600 rounded-full bg-white min-w-[130px]'
        />
      </div>
    </header>
  );
};

export default Navbar;
