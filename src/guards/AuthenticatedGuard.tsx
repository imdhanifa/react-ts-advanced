import { Navigate, Outlet  } from "react-router-dom"
import { useSelector } from "react-redux"

function AuthenticatedGuard() {
  const isAuthenticated = useSelector((state: any) => state.app.isAuthenticated)

  // fallback to token if redux state is not yet available
  const hasToken = localStorage.getItem("token")

  if (!isAuthenticated && !hasToken) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}


export default AuthenticatedGuard
