import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { GrDocumentDownload } from 'react-icons/gr'

const Course = () => {
  const { course } = useLoaderData()
  const { fee, name, thumbnail, description, topics, isPremium, discountPercentage, rating, id } = course
  const discount = (fee * 1) * ((discountPercentage * 1) / 100)
  const discountPrice = (fee * 1) - discount
  return (
    <div className='dark:bg-gray-800 dark:text-gray-100'>
      <div className='w-11/12 lg:w-3/4 mx-auto py-4 lg:py-24'>
        <div className='grid grid-cols-12 gap-4 lg:gap-2'>
          <div className='col-span-12 lg:col-span-3 justify-center'>
            <img src={thumbnail} alt={`${name}-thumbnail`} className='h-80 w-full shadow-2xl rounded-md' />
          </div>
          <div className='flex flex-col gap-3 lg:px-3 lg:py-0 col-span-12 lg:col-span-9'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-4 items-center'>
              <p className='text-xl lg:text-3xl font-semibold text-gray-900 dark:text-gray-100'>{name}</p>
              {
                isPremium && <span className=" bg-green-400 dark:text-gray-800 py-1 px-2 text-base font-medium rounded-md">Premium</span>
              }
              </div>
              <Link to={`/pdf/${id}`}>
                <GrDocumentDownload className='text-2xl font-semibold text-gray-900 dark:text-3xl dark:bg-gray-400 dark:p-1 dark:rounded-lg' />
              </Link>
            </div>
            <div>
              <p className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>${discountPrice.toFixed(2)} <span className='line-through text-base font-normal text-gray-500 dark:text-gray-300'>${fee}</span></p>
              <p className='text-xl font-semibold text-green-600 dark:text-green-400 pt-1'>Save {discountPercentage}%</p>
            </div>
            <p className='text-base font-semibold text-black dark:text-gray-400'>Rating {rating}</p>
            <p className='text-base lg:text-lg font-normal text-amber-800 dark:text-gray-100'>Description: {description}</p>
          </div>
        </div>
        <div className='border border-black dark:border-gray-600 my-6 lg:my-12 rounded-md px-8'>
          <p className='text-2xl font-semibold text-gray-900 dark:text-gray-400 pt-4 underline uppercase'>Topics</p>
          <div className='flex flex-col gap-2 lg:gap-4 py-8'>
            {
              topics?.map(el => <li key={el} className='text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-100'>{el}</li>)
            }
          </div>
        </div>
        <Link to={`/checkout/${id}`} className='btn glass bg-green-400 hover:bg-blue-600 hover:text-white text-gray-700 font-semibold mb-2'>Get Premium Access</Link>
      </div>
    </div>
  )
}

export default Course