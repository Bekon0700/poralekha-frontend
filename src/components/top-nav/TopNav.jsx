import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { authContext } from '../../context/AuthProvider'


const TopNav = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const [dark, setDark] = useState(false)
    const { user, userLogout } = useContext(authContext)
    const [navToggle, setNavToggle] = useState(false)

    const logoutHandler = async () => {
        await userLogout()
    }

    const handleLogin = () => {
        navigate('/login', { state: { from: location.pathname } })
    }

    useEffect(() => {
        dark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }, [dark])

    return (
        <div>
            <header className="p-4 bg-white  dark:bg-gray-800 text-black dark:text-gray-100 dark">
                <div className="container flex justify-between mx-auto">
                    <div className="flex gap-8 py-4">
                        <Link to='/' className='flex items-center gap-2 text-base lg:text-lg font-bold '>
                            <img src="/planet.png" alt="" className='w-8 h-8' />
                            <p>Pora-<span className='text-green-600'>Lekha</span></p>
                        </Link>
                        <ul className="hidden space-x-3 lg:flex items-center font-semibold">
                            <li className="flex gap-4 font-semibold">
                                <NavLink to='/courses'
                                    className={({ isActive }) => isActive ? 'text-green-600' : ''}>
                                    Courses</NavLink>
                                <NavLink to='/faq'
                                    className={({ isActive }) => isActive ? 'text-green-600' : ''}>
                                    FAQ</NavLink>
                                <NavLink to='/blog'
                                    className={({ isActive }) => isActive ? 'text-green-600' : ''}>
                                    Blog</NavLink>
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
                        {
                            user?.displayName ?
                                <Link onClick={logoutHandler} className="px-3 py-1 font-bold rounded  bg-red-600  text-white">Log out</Link>
                                :
                                <button onClick={handleLogin} className="px-3 py-1 font-bold rounded  bg-green-300  text-black">Log in</button>
                        }
                        {
                            user?.displayName &&
                            <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                <img className="w-12 h-12 mask mask-circle" src={user?.photoURL} alt={user?.displayName} />
                            </div>
                        }
                    </div>
                    <div className="p-4 lg:hidden">
                        <div className={
                            navToggle ?
                                'absolute top-0 left-0 dark:bg-gray-700 dark:text-gray-100 h-full z-50 w-3/4 ease-in-out duration-1000'
                                :
                                'absolute top-0 -left-full dark:bg-gray-700 dark:text-gray-100 h-full z-50 w-3/4 ease-in-out duration-1000'
                        }>
                            <div className="flex flex-col gap-8 py-4">
                                <Link to='/' className='flex items-center gap-2 text-xl font-bold self-center'>
                                    <img src="/planet.png" alt="" className='w-8 h-8' />
                                    <p>Pora-<span className='text-green-600'>Lekha</span></p>
                                </Link>
                                <ul className="font-semibold">
                                    <li onClick={() => setNavToggle(false)} className="flex flex-col gap-4 px-4">
                                        <NavLink to='/courses'
                                            className={({ isActive }) => isActive ? 'text-green-600' : ''}>
                                            Courses</NavLink>
                                        <NavLink to='/faq'
                                            className={({ isActive }) => isActive ? 'text-green-600' : ''}>
                                            FAQ</NavLink>
                                        <NavLink to='/blog'
                                            className={({ isActive }) => isActive ? 'text-green-600' : ''}>
                                            Blog</NavLink>
                                        <div className='self-center'>
                                            {
                                                user?.displayName ?
                                                    <Link onClick={logoutHandler} className="px-3 py-1 font-bold rounded  bg-red-600  text-white">Log out</Link>
                                                    :
                                                    <button onClick={handleLogin} className="px-3 py-1 font-bold rounded  bg-green-300  text-black">Log in</button>
                                            }
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            {
                                dark ?
                                    <button onClick={() => { setDark(!dark) }}><MdDarkMode className='text-2xl outline-2 outline-blue-50' /></button>
                                    :
                                    <button onClick={() => { setDark(!dark) }}><BsFillSunFill className='text-2xl' /></button>
                            }
                            {
                                user?.displayName &&
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                                    <img className="w-8 h-8 mask mask-circle" src={user?.photoURL} alt={user?.displayName} />
                                </div>
                            }
                            <div onClick={() => setNavToggle(!navToggle)} >
                                {
                                    !navToggle ?
                                        <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                                        :
                                        <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default TopNav