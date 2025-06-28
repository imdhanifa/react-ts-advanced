import { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import { appRouter } from "./app.router"
import Loading from "../components/loading"

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider future={{ v7_startTransition: true }} router={ appRouter } />
    </Suspense>
  )
}

export default App
