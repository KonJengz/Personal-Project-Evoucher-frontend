import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import MainContainer from '../layouts/MainContainer'
import ProtectedRoute from '../features/authentication/components/ProtectedRoute'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import ManualPage from '../pages/ManualPage'
import OrderPage from '../pages/OrderPage'
// import SettingPage from '../pages/SettingPage'
import AdminContainer from '../layouts/AdminContainer'
import AdminManage from '../features/admin/components/AdminManage'
import ProtectedRouteAdmin from '../features/authentication/components/ProtectedRouteAdmin'
import RedeemVoucher from '../features/voucher/components/RedeemVoucher'

const StoreContainer = lazy(() => import('../layouts/StoreContainer'))
const VoucherPage = lazy(() => import('../pages/VoucherPage'))
const AdminPage = lazy(() => import('../pages/AdminPage'))
const SettingPage = lazy(() => import('../pages/SettingPage'))

const router = createBrowserRouter([
    { path: '/',
        element: (
            <MainContainer />
        ),
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/contact', element: <ContactPage /> },
            { path: '/manual', element: <ManualPage /> },
            { path: '/login', element: <AdminPage />}
        ]
    },
    { path: '/store',
        element: (
            <ProtectedRoute>
                <StoreContainer />
            </ProtectedRoute>
        ),
        children: [
            { path: ':id', element: <OrderPage />},
            { path: 'voucher/:id', element: <VoucherPage />},
            { path: 'setting/:id', element: <SettingPage />}
        ]
    },
    { path: '/admin',
        element: (
            <ProtectedRouteAdmin>
                <AdminContainer />
            </ProtectedRouteAdmin>
        ),
        children: [
            { path: '', element: <AdminManage />},
        ]
    },
    { path: '/voucher/:id',
        element: (
            <ProtectedRoute>
                <RedeemVoucher />
            </ProtectedRoute>
        )
    }
])

export default function Router() {
    return <RouterProvider router={router} />
}