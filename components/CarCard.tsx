'use client';

import { useState } from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CarDetails from './CarDetails';

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className='flex flex-col p-6 justify-center items-start text-black-100 bg-blue-50 hover:bg-white hover:shadow-md rounded-3xl group'>
      <div className='w-full flex justify-between items-start gap-2'>
        <h2 className='text-[22px] leading-[26px] font-bold capitalize'>
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>
          $
        </span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>
          /day
        </span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image
          src={generateCarImageUrl(car)}
          alt='car model'
          fill
          priority
          className='object-contain'
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src='/steering-wheel.svg'
              width={20}
              height={20}
              alt='steering wheel'
            />
            <p className='text-[14px] leading-[17px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/tire.svg' width={20} height={20} alt='seat' />
            <p className='text-[14px] leading-[17px]'>{drive.toUpperCase()}</p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/gas.svg' width={20} height={20} alt='seat' />
            <p className='text-[14px] leading-[17px]'>{city_mpg} MPG</p>
          </div>
        </div>

        <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-blue-600'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
