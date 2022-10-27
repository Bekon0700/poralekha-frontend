import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Checkout = () => {
    const { course } = useLoaderData()
    const { fee, name, thumbnail, description, topics, isPremium, discountPercentage, rating, id } = course
    const discount = (fee * 1) * ((discountPercentage * 1) / 100)
    const discountPrice = (fee * 1) - discount
    return (
      <div className='bg-white text-black dark:bg-gray-800 dark:text-gray-100'>
        <div className='w-11/12 lg:w-3/4 mx-auto py-12'>
            <p className='text-3xl text-center pb-8 text-gray-900 dark:text-gray-100 underline'>Checkout</p>
          <div className='grid grid-cols-12 gap-2'>
            <div className='col-span-12 lg:col-span-3 justify-center'>
              <img src={thumbnail} alt={`${name}-thumbnail`} className='h-80 w-full shadow-2xl rounded-md' />
            </div>
            <div className='flex flex-col gap-8 lg:px-3 lg:py-0 col-span-12 lg:col-span-9'>
              <div className='flex justify-between items-center'>
                <p className='text-lg lg:text-3xl font-semibold text-gray-900 dark:text-gray-100' >{name}</p>
                <p className='text-lg lg:text-2xl font-semibold text-gray-900 dark:text-gray-100'>${discountPrice.toFixed(2)}</p>
              </div>
              <div className='flex flex-col gap-3'>
                <p className='text-base font-semibold text-black dark:text-gray-400'>Rating {rating}</p>
                <p className='text-base lg:text-lg font-normal text-amber-800 dark:text-gray-100'>Description: {description}</p>
              </div>
            </div>
          </div>
          </div>
      </div>
    )
}

export default Checkout