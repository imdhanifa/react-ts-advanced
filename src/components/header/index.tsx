import { useEffect, useState } from "react";
import { connect, type ConnectedProps } from "react-redux";
import { logout, toggleSideNav } from "../../app/app.actions";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/paths";
import style from "./index.module.scss";

const mapStateToProps = () => ({});
const mapDispatchToProps = { logout, toggleSideNav };
const connector = connect(mapStateToProps, mapDispatchToProps);
interface Props extends ConnectedProps<typeof connector> {}

const Header = (props: Props) => {
  const { logout, toggleSideNav } = props;
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    localStorage.getItem("app-theme") || "light"
  );
  const handleLogout = () => {
    logout();
    navigate(PATH.LOGIN);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  return (
    <header className={style.navbar}>
      <button className={style.menuButton} onClick={toggleSideNav}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="20"
          viewBox="0 -53 384 384"
          width="20"
        >
          <g>
            <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
            <path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
          </g>
        </svg>
      </button>

      <div className={style.brand}>Navbar</div>

      <div className={style.rightControls}>
        <div className={style.searchInputGroup}>
          <input type="search" placeholder="Search" />
          <span>@</span>
        </div>

        
        <div className={style.themeSwitcher}>
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

        <button className={style.logoutButton} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default connector(Header);
