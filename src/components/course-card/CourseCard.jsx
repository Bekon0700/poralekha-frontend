import { Link } from "react-router-dom"

const CourseCard = ({ course }) => {
  const { thumbnail, rating, fee, id, name, discountPercentage, isPremium } = course
  const discount = (fee * 1) * ((discountPercentage * 1) / 100)
  const discountPrice = (fee * 1) - discount
  return (
    <div className=' bg-white text-black dark:bg-gray-800 dark:text-gray-100'>
      <Link to={`/courses/${id}`} className="card w-full bg-base-100 rounded-md border dark:border-gray-600 shadow-xl">
        {
          isPremium && <span className="absolute top-4 -left-9 -rotate-45 bg-green-400 dark:text-gray-800 py-2 px-7 text-2xl font-medium rounded-md">Premium</span>
        }
        <figure><img src={thumbnail} alt={name} className='h-64 w-full' /></figure>
        <div className="card-body p-4 flex flex-col justify-between h-80 bg-white text-black dark:bg-gray-800 dark:text-gray-100">
          <h2 className="pb-3">
            <p className='text-2xl font-normal'>{name}</p>
          </h2>
          <div className='flex flex-col gap-4'>
            <p className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>${discountPrice.toFixed(2)} <span className='line-through text-lg font-normal text-gray-500'>${fee}</span></p>

            <p className='text-xl font-semibold text-green-600 dark:text-green-600'>Save {discountPercentage}%</p>
            <p className='text-base font-semibold text-black dark:text-gray-50'>Rating {rating}</p>
            <button className='btn glass bg-blue-400 hover:bg-green-700 hover:text-white text-gray-700 font-semibold'>View this course</button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CourseCard