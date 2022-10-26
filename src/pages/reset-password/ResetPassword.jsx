import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import FormInput from '../../components/form-input/FormInput'
import { authContext } from '../../context/AuthProvider'

const formData = [
    {
        id: 1,
        name: 'email',
        placeholder: 'john@doe.com',
        type: 'text'
    },
]

const ResetPassword = () => {
    const {resetPassword, errorHandler, error} = useContext(authContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        console.log(email)
        try{
            await resetPassword(email)
            toast.success(`Reset link has been sent to ${email}`, 
            {
                duration: 3000
            })
            e.target.reset()
        }catch(err){
            errorHandler(err.message)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            errorHandler('')
        }, 2000);
    }, [error])

    return (
        <div className='dark:bg-gray-800  dark:text-gray-100'>
            <div className='w-11/12 mx-auto flex justify-center py-12 lg:py-24'>
                <div className="w-full max-w-md p-8 space-y-3 rounded-xl text-gray-900 dark:text-gray-100 border border-gray-700">
                    <h1 className="text-2xl font-bold text-center">Reset password</h1>
                    <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                        {
                            formData.map(el => <FormInput key={el.id} data={el} />)
                        }
                        {
                            error && <p className='text-red-900 dark:text-red-300 text-sm text-center'>{error}</p>
                        }
                        <button className="block w-full p-3 text-center font-semibold text-lg rounded-sm text-gray-900 bg-violet-400">Confirm Email</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                        <p className="px-3 text-sm text-green-700 dark:text-gray-100 font-semibold">We will sent a reset link to your email. Check spam folder if needed</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    </div>
                    <p className="text-sm text-center sm:px-6 font-semibold">No need to reset password?
                        <Link to='/login' className="pl-1 underline text-blue-900 dark:text-blue-200">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword