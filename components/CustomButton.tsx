'use client';
import Image from 'next/image';
import { MouseEventHandler } from 'react';

interface CustomButtonProps {
  title: string;
  containerStyles: string;
  isDisabled?: boolean;
  // type: 'button' | 'submit' | 'reset';
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
  textStyles?: string;
  rightIcon?: string;
}

const CustomButton = ({
  title,
  containerStyles,
  isDisabled,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className='relative w-6 h-6'>
          <Image
            src={rightIcon}
            alt='arrow_left'
            fill
            className='object-contain'
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
