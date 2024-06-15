import Router from "./routes"
import { Slide, ToastContainer } from 'react-toastify'
import { Suspense } from 'react'
import AuthContextProvider from "./contexts/UserContext"
import Spinner from "./components/Spinner"
import AdminContextProvider from "./contexts/AdminContext"
import StoreContextProvider from "./contexts/StoreContext"
import OrderContextProvider from "./contexts/OrderContext"

function App() {

  return (
    <Suspense fallback={<Spinner />}>
      <AdminContextProvider>
        <AuthContextProvider>
          <StoreContextProvider>
            <OrderContextProvider>
                <Router />
                <ToastContainer
                  position="bottom-right"
                  autoClose={2000}
                  transition={Slide} />
              </OrderContextProvider>
            </StoreContextProvider>
          </AuthContextProvider>
        </AdminContextProvider>
    </Suspense>
  )
}

export default App
