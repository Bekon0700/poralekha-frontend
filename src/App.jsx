import { Toaster } from 'react-hot-toast';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './components/layout/Main';
import PdfMaker from './components/pdf/PdfMaker';
import Blog from './pages/blog/Blog';
import Checkout from './pages/checkout/Checkout';
import ProtectedRoute from './protected-route/ProtectedRoute'
import Course from './pages/course/Course';
import Courses from './pages/courses/Courses';
import FAQ from './pages/faq/FAQ';
import Home from './pages/home/Home';
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import { useEffect } from 'react';


function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://assignment10-server-delta.vercel.app/api/premium-courses')
          },
          element: <Home />
        },
        {
          path: 'home',
          loader: async () => {
            return fetch('https://assignment10-server-delta.vercel.app/api/premium-courses')
          },
          element: <Home />
        },
        {
          path: 'courses',
          loader: async () => {
            return fetch('https://assignment10-server-delta.vercel.app/api/courses')
          },
          element: <Courses />
        },
        {
          path: 'courses/:id',
          loader: async ({params}) => {
            return fetch(`https://assignment10-server-delta.vercel.app/api/courses/${params.id}`)
          },
          element: <Course />
        },
        {
          path: 'checkout/:id',
          loader: async ({params}) => {
            return fetch(`https://assignment10-server-delta.vercel.app/api/courses/${params.id}`)
          },
          element: <ProtectedRoute><Checkout /></ProtectedRoute>
        },
        {
          path: 'faq',
          element: <FAQ />
        },
        {
          path: 'blog',
          element: <Blog />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Registration />
        },
      ]
    },
    {
      path: '/pdf/:id',
      loader: async ({params}) => {
        return fetch(`https://assignment10-server-delta.vercel.app/api/courses/${params.id}`)
      },
      element: <PdfMaker />
    }
  ])

  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App
