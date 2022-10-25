import { Link } from 'react-router-dom'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
const TopNav = () => {
    const [dark, setDark] = useState(false)
    useEffect(() => {
        dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [dark])
    return (
        <div>
            <header className="p-4 bg-white  dark:bg-gray-800 text-black dark:text-gray-100 dark">
                <div className="container flex justify-between mx-auto">
                    <div className="flex gap-8">
                        <Link to='/' className='flex items-center gap-2 text-base lg:text-lg font-bold '>
                            <img src="/planet.png" alt="" className='w-8 h-8' />
                            <p>Pora-<span className='text-green-600'>Lekha</span></p>
                        </Link>
                        <ul className="items-stretch hidden space-x-3 lg:flex font-semibold">
                            <li className="flex">
                                <Link to='/courses' className="flex items-center px-4 ">Courses</Link>
                                <Link to='/faq' className="flex items-center px-4 ">FAQ</Link>
                                <Link to='/blog' className="flex items-center px-4 ">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="items-center flex-shrink-0 hidden lg:flex gap-3">
                        {
                            dark ?
                                <button onClick={() => { setDark(!dark) }}><MdDarkMode className='text-2xl outline-2 outline-blue-50' /></button>
                                :
                                <button onClick={() => { setDark(!dark) }}><BsFillSunFill className='text-2xl' /></button>
                        }
                        <button className="px-3 py-1 font-bold rounded  bg-green-300  text-black">Log in</button>
                        <div className="tooltip tooltip-bottom" data-tip="name">
                            <img className="w-12 h-12 mask mask-hexagon" src="https://files.worldwildlife.org/wwfcmsprod/images/Leonardo_headshot.jpg/card_three_col/2l0tmd2211_Leonardo_headshot.jpg" alt="user photo" />
                        </div>
                    </div>
                    <div className="p-4 lg:hidden">
                        <div className='flex gap-2 items-center'>
                            {
                                dark ?
                                    <button onClick={() => { setDark(!dark) }}><MdDarkMode className='text-2xl outline-2 outline-blue-50' /></button>
                                    :
                                    <button onClick={() => { setDark(!dark) }}><BsFillSunFill className='text-2xl' /></button>
                            }
                            <div className="tooltip tooltip-bottom" data-tip="name">
                                <img className="w-8 h-8 mask mask-circle" src="https://files.worldwildlife.org/wwfcmsprod/images/Leonardo_headshot.jpg/card_three_col/2l0tmd2211_Leonardo_headshot.jpg" alt="user photo" />
                            </div>
                            <label className="swap swap-rotate">
                                <input type="checkbox" />

                                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                            </label>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default TopNav