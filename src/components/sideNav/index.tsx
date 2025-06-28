import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./index.module.scss";

const menuItems = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Product",
    path: "/product",
  },
  {
    name: "Sub Menu",
    submenu: [
      { name: "Sub Home", path: "/sub-/home" },
      { name: "Sub Product", path: "/sub-/product" },
    ],
  },
];

function SideNav() {
  const location = useLocation();
  const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({});
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentItem = menuItems
      .flatMap((item) => (item.submenu ? item.submenu : [item]))
      .find((i) => i.path === location.pathname);

    if (currentItem) {
      setActiveLink(currentItem.name);
    }
  }, [location.pathname]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleLinkClick = (linkName: string) => {
    setActiveLink(linkName);
  };

  return (
    <nav className={`${style.sideNav}`}>
      <div className={style.header}>Menu</div>
      <ul className={style.navList}>
        {menuItems.map((item, index) => {
          const isOpen = openSubmenus[item.name] || false;

          if (item.submenu) {
            return (
              <li key={index} className={style.navItem}>
                <div
                  className={`${style.navLink}, ${style.subToggle}`}
                  onClick={() => toggleSubmenu(item.name)}
                >
                  <span>{item.name}</span>
                  <span>{isOpen ? "▲" : "▼"}</span>
                </div>
                {isOpen && (
                  <ul className={style.subMenu}>
                    {item.submenu.map((subItem, subIndex) => (
                      <li key={subIndex} className={style.navItem}>
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            `${style.navLink} ${
                              isActive || activeLink === subItem.name
                                ? style.activeLink
                                : ""
                            }`
                          }
                          onClick={() => handleLinkClick(subItem.name)}
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          }

          return (
            <li key={index} className={style.navItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                            `${style.navLink} ${
                              isActive || activeLink === item.name
                                ? style.activeLink
                                : ""
                            }`
                          }
                onClick={() => handleLinkClick(item.name)}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNav;
