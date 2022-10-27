import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import FormInput from '../../components/form-input/FormInput'
import { authContext } from '../../context/AuthProvider'


const formData = [
    {
        id: 1,
        name: 'username',
        placeholder: 'john doe',
        type: 'text'
    },
    {
        id: 5,
        name: 'profile picture link',
        placeholder: 'johndoe/profile_pic.png',
        type: 'text'
    },
    {
        id: 2,
        name: 'email',
        placeholder: 'john@doe.com',
        type: 'text'
    },
    {
        id: 3,
        name: 'password',
        placeholder: 'password',
        type: 'password'
    },
    {
        id: 4,
        name: 'confirm password',
        placeholder: 'confirm password',
        type: 'password'
    },
]

const Registration = () => {
    const [err, setErr] = useState(false)
    const { userRegister, updateUser, userLogout } = useContext(authContext)
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.username.value
        const email = form.email.value
        const pic = form['profile picture link'].value
        let password = ''
        if (form.password.value === form['confirm password'].value) {
            password = form.password.value
            await userRegister(email, password)
            await updateUser({
                displayName: name,
                photoURL: pic
            })
            form.reset()
            await userLogout()
            toast.success('Your account has been created, please log in')
        } else {
            setErr(true)
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setErr(false)
        }, 2000);
    }, [err])
    return (
        <div className='bg-white text-black dark:bg-gray-800  dark:text-gray-100'>
            <div className='w-11/12 mx-auto flex justify-center py-12 lg:py-16'>
                <div className="w-full max-w-md p-6 lg:p-8 space-y-3 rounded-xl text-gray-900 dark:text-gray-100 border border-gray-700">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        {
                            formData.map(el => <FormInput key={el.id} data={el} />)
                        }
                        {
                            err && <p className='text-center font-semibold text-base text-amber-900'>Password does not match</p>
                        }
                        <button className="block w-full p-3 text-center font-semibold text-lg rounded-sm text-gray-900 bg-violet-400">Register</button>
                    </form>
                    <p className="text-sm text-center sm:px-6 font-semibold pt-3">Already have an account?
                        <Link to='/login' className="pl-1 underline text-blue-900 dark:text-blue-300">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Registration