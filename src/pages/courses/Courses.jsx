import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import CourseCard from '../../components/course-card/CourseCard'

const Courses = () => {
    const { courses } = useLoaderData()
    return (
        <div className='dark:bg-gray-800 dark:text-gray-100'>
            <div className='w-11/12 mx-auto py-12'>
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 lg:col-span-3 2xl:col-span-2'>
                        <p className='text-2xl text-center font-bold pb-4 uppercase'>Our Courses</p>
                        <div className='flex flex-col gap-2'>
                            {
                                courses.map(el => {
                                    return (
                                        <Link to={`/courses/${el.id}`} key={el.id} className='text-base font-semibold text-center border border-black dark:border-gray-600 py-2 hover:bg-gray-700 hover:text-purple-100'>
                                            {el.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='col-span-12 lg:col-span-9 2xl:col-span-10 lg:px-4'>
                        <div className='py-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
                            {
                                courses.map(el => <CourseCard key={el.id} course={el} />)
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses