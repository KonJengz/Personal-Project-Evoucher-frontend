import Router from "./routes"
import { Suspense } from 'react'

function App() {

  return (
    <Suspense fallback={<h1>Loading . . .</h1>}>
      <Router />
    </Suspense>
  )
}

export default App
