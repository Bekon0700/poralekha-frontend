import React from 'react'
import QuestionCard from '../../components/question-card/QuestionCard'

const data = [
  {
      id: 1,
      q: 'What is cors?',
      a: 'Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.'
  },
  {
      id: 2,
      q: 'Why are you using firebase? What other options do you have to implement authentication?',
      a: 'Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Alternatives MongoDB.Oracle Database. Amazon Redshift.DataStax Enterprise.Redis Enterprise Cloud. Cloudera Enterprise Data Hub. Db2.Couchbase Server.'
  },
  {
      id: 3,
      q: 'How does the private route work?',
      a: 'The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property'
  },
  {
      id: 4,
      q: 'What is Node? How does Node work?',
      a: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive'
  },
]


const Blog = () => {
  return (
    <div className='dark:bg-gray-800 dark:text-gray-100'>
        <div className='w-11/12 mx-auto py-8'>
            <p className='text-3xl font-bold text-center pb-8'>Blog Post</p>
            <div className='flex flex-col gap-4'>
                {
                    data.map(el => <QuestionCard key={el.id} data={el} />)
                }
            </div>
        </div>
    </div>
  )
}

export default Blog