import React from 'react';
import { Button } from '../components';
import { earningData } from '../data/dummy';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:bg-secondary-dark-bg h-44 w-full lg:w-80 rounded-xl p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Earning</p>
              <p className='text-2xl'>$63,448</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor='blue'
              text='Download'
              borderRadius='10px'
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map(item => (
            <div
              key={item.title}
              className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-2xl'
              >
                {item.icon}
              </button>
              <div className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span
                  style={
                    item.percentage.slice(0, 1) === '+'
                      ? { color: '#009900' }
                      : { color: '#dc2626' }
                  }
                  className={`text-${item.pcColor} text-sm ml-2`}
                >
                  {item.percentage}
                </span>
              </div>
              <p className='text-sm text-gray-400 mt-1 font-semibold'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
