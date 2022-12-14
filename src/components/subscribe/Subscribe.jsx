import React from 'react'

const Subscribe = () => {
    return (
        <div className='dark:bg-gray-800 dark:text-gray-100'>
            <div className="w-full bg-no-repeat bg-cover" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://static.scientificamerican.com/sciam/cache/file/C3D6DFBB-92DD-43D0-A9F8CB9AB477F652_source.jpg?w=590&h=800&5F47C5D2-41D8-476F-A29200DA225DCEEA')" }}>
                <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                    <h1 className="text-xl lg:text-5xl antialiased font-semibold leading-none text-center text-gray-100">Get Our Updates</h1>
                    <p className="pt-2 pb-8 text-base lg:text-xl antialiased text-center text-gray-100">Find out about events and other news</p>
                    <div className="flex flex-row">
                        <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                        <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-violet-400 text-gray-900">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe