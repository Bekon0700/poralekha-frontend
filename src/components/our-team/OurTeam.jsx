import React from 'react'

const OurTeam = () => {
    return (
        <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">Our team</h1>
                <p className="max-w-2xl text-center dark:text-gray-400">Meet our specialized personnel</p>
                <div className="flex flex-row flex-wrap-reverse justify-center">
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?0" />
                        <p className="text-xl font-semibold leading-tight">John Doe</p>
                        <p className="dark:text-gray-400">Data Scientist</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?1" />
                        <p className="text-xl font-semibold leading-tight">Jane Doe</p>
                        <p className="dark:text-gray-400">Data Expert</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?2" />
                        <p className="text-xl font-semibold leading-tight">Leroy Sane</p>
                        <p className="dark:text-gray-400">Machine Learning Enthusiast</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?3" />
                        <p className="text-xl font-semibold leading-tight">Erling Halland</p>
                        <p className="dark:text-gray-400">Statistician</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?4" />
                        <p className="text-xl font-semibold leading-tight">Cristiano Ronaldo</p>
                        <p className="dark:text-gray-400">Competitive Programmer</p>
                    </div>
                    <div className="flex flex-col justify-center m-8 text-center">
                        <img alt="" className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://source.unsplash.com/100x100/?portrait?5" />
                        <p className="text-xl font-semibold leading-tight">Lionel Messi</p>
                        <p className="dark:text-gray-400">Machine Learning Expert</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam