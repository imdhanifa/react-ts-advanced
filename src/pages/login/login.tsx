import { useState, useEffect } from "react"
import { connect, type ConnectedProps } from "react-redux"
import { login } from "./login.thunks"
import { useNavigate } from "react-router-dom"
import { PATH } from "../../constants/paths"
import styles from "./Login.module.scss"

const mapStateToProps = (state: any) => ({
  loading: state.loading,
})

const mapDispatchToProps = {
  login,
}

const connector = connect(mapStateToProps, mapDispatchToProps)
interface Props extends ConnectedProps<typeof connector> {}


const Login = ({ login, loading }: Props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [theme, setTheme] = useState(localStorage.getItem("app-theme") || "light")

  const navigate = useNavigate()

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("app-theme", theme)
  }, [theme])

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!loading) {
      login({ username, password })
        .then(() => navigate(PATH.HOME))
        .catch((err) => setError(err.payload.message || "Login failed"))
    }
  }

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.themeSwitcher}>
        <select
          defaultValue={localStorage.getItem("app-theme") || "light"}
          onChange={(e) => setTheme(e.target.value)}
        >
         <option value="light">🌞 Light</option>
          <option value="dark">🌙 Dark</option>
          <option value="blue">🔵 Blue</option>
          <option value="red">🔴 Red</option>
          <option value="purple">🟣 Purple</option>
          <option value="pink">💗 Pink</option>
          <option value="lavender">🌸 Lavender</option>
        </select>
      </div>

      <div className={styles.loginCard}>
        <h2 className={styles.loginTitle}>Login</h2>
        <p>Please enter your login and password!</p>
        <form onSubmit={submit} className={styles.loginForm}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <div className={styles.error}>{error}</div>}
          <button type="submit" className={styles.loginButton} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default connector(Login)
