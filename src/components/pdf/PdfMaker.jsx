import React from 'react'
import { GrDocumentDownload } from 'react-icons/gr';
import { useLoaderData } from 'react-router-dom';

import Pdf from "react-to-pdf";
const ref = React.createRef();

const PdfMaker = () => {
    const { course } = useLoaderData()
    const { fee, name, thumbnail, description, topics, isPremium, discountPercentage, rating, id } = course
    const discount = (fee * 1) * ((discountPercentage * 1) / 100)
    const discountPrice = (fee * 1) - discount
    return (
        <div>
            <Pdf targetRef={ref} filename="Course-detail.pdf">
                {({ toPdf }) => 
                    <div className='flex items-center justify-center py-8 ' onClick={toPdf}>
                        <div className='flex gap-4 btn btn-primary'>
                            <p>Download this page</p>
                            <GrDocumentDownload  className='text-2xl font-semibold text-gray-900 dark:text-gray-100' />
                        </div>
                    </div>
                }
            </Pdf>
            <div ref={ref} className='dark:bg-gray-800 dark:text-gray-100'>
                <div className='w-11/12 lg:w-2/5 py-2 lg:py-8 pl-4'>
                    <div className='grid grid-cols-12 gap-2'>
                        <div className='col-span-12 lg:col-span-3 justify-center'>
                            <img src={thumbnail} alt={`${name}-thumbnail`} className='h-80 w-full shadow-2xl rounded-md' />
                        </div>
                        <div className='flex flex-col gap-3 lg:px-3 lg:py-0 col-span-12 lg:col-span-9'>
                            <div className='flex justify-between items-center'>
                                <p className='text-3xl font-semibold text-gray-900 dark:text-gray-100'>{name}</p>
                            </div>
                            <div>
                                <p className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>${discountPrice.toFixed(2)} <span className='line-through text-base font-normal text-gray-500 dark:text-gray-300'>${fee}</span></p>
                                <p className='text-xl font-semibold text-green-600 dark:text-green-400 pt-1'>Save {discountPercentage}%</p>
                            </div>
                            <p className='text-base font-semibold text-black dark:text-gray-400'>Rating {rating}</p>
                            <p className='text-base lg:text-lg font-normal text-amber-800 dark:text-gray-100'>Description: {description}</p>
                        </div>
                    </div>
                    <div className='border border-black dark:border-gray-600 my-12 rounded-md px-8'>
                        <p className='text-2xl font-semibold text-gray-900 dark:text-gray-400 pt-4 underline uppercase'>Topics</p>
                        <div className='flex flex-col gap-2 lg:gap-4 py-8'>
                            {
                                topics?.map(el => <li key={el} className='text-base lg:text-lg font-semibold text-gray-800 dark:text-gray-100'>{el}</li>)
                            }
                        </div>
                    </div>
                    <p className='text-xl font-semibold text-gray-900 dark:text-gray-400 underline uppercase text-center'>Course image is not downloading due to cors policy</p>
                </div>
            </div>
        </div>
    )
}

export default PdfMaker