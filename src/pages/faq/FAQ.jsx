import React from 'react'
import QuestionCard from '../../components/question-card/QuestionCard'
import Stats from '../../components/stats/Stats'
import Subscribe from '../../components/subscribe/Subscribe'

const data = [
    {
        id: 1,
        q: 'How can I get enrolled?',
        a: 'You have to register then login and buy a course'
    },
    {
        id: 2,
        q: 'How can I get most outcome?',
        a: 'We will reliese series of videos and you have to practice along'
    },
    {
        id: 3,
        q: 'Is there any guaranteed way to ensure a job?',
        a: 'Our course is based on real world job requirements. We are confident that you will get a job if you complete the course attentively'
    },
]

const FAQ = () => {
    return (
        <div className='bg-white text-black dark:bg-gray-800 dark:text-gray-100'>
            <div className='w-11/12 mx-auto py-12'>
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-400">Clear your thoughts about our course</p>
                    <div className="space-y-4">
                        {data.map(el => {
                            return (
                                <details key={el.id} className="w-full border rounded-lg">
                                    <summary className="px-4 py-6 text-lg font-semibold focus:outline-none focus-visible:ring-violet-400">{el.q}</summary>
                                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">{el.a}</p>
                                </details>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4'>
                <Stats />
                <Subscribe />
            </div>
        </div>
    )
}

export default FAQ