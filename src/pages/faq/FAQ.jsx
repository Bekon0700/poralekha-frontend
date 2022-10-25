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
    <div className='dark:bg-gray-800 dark:text-gray-100'>
        <div className='w-11/12 mx-auto py-12'>
            <p className='text-3xl font-bold text-center pb-8'>Frequently Asked Questons</p>
            <div className='flex flex-col gap-4'>
                {
                    data.map(el => <QuestionCard key={el.id} data={el} />)
                }
            </div>
        </div>
        <div>
            <Stats />
            <Subscribe />
        </div>
    </div>
  )
}

export default FAQ