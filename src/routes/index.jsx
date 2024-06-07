import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import MainContainer from '../layouts/MainContainer'

const HomePage = lazy(() => import('../pages/HomePage'))
const ContactPage = lazy(() => import('../pages/ContactPage'))
const ManualPage = lazy(() => import('../pages/ManualPage'))

const router = createBrowserRouter([
    { path: '/',
        element: (
            <MainContainer />
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/manual', element: <ManualPage /> }
        ]
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}