import { useSelector } from "react-redux";
import Header from "../components/header";
import SideNav from "../components/sideNav";
import style from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  const closeSideNav = useSelector((state: any) => state.app.closeSideNav);

  return (
    <>
      <Header />
      <div className={style["layout-wrapper"]}>
        <aside
          className={style["side-nav"]}
          style={{ transition: "0.5s", ...(closeSideNav && { width: 0, overflow: "hidden" }) }}
        >
          <SideNav />
        </aside>

        <main
          className={`${style["main-content"]} ${
            closeSideNav ? style["full-width"] : style["with-sidebar"]
          }`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
}
