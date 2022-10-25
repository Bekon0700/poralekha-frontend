import React from 'react'

const Stats = () => {
    return (
        <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">3000+</p>
                    <p className="text-sm sm:text-base">Students</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">89K</p>
                    <p className="text-sm sm:text-base">Followers on social media</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">4</p>
                    <p className="text-sm sm:text-base">Course Category</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">20+</p>
                    <p className="text-sm sm:text-base">Instructor</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">7</p>
                    <p className="text-sm sm:text-base">Years of experience</p>
                </div>
                <div className="flex flex-col justify-start m-2 lg:m-6">
                    <p className="text-4xl font-bold leading-none lg:text-6xl">10+</p>
                    <p className="text-sm sm:text-base">Workshops</p>
                </div>
            </div>
        </section>
    )
}

export default Stats