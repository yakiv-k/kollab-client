import { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as FiIcons from "react-icons/fi";
import * as CgIcons from "react-icons/cg";
import * as MdIcons from "react-icons/md";

import "./Header.scss";

function Header() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => sessionStorage.clear();

  return (
    <>
      <div className="header">
        <div className="header__title-division">
          <Link to="/">
            <h1 className="header__title">Kollab.</h1>
          </Link>
        </div>

        <div className="header__menu-division">
          <Link to="#" className="header__menu">
            <FaIcons.FaBars
              className="header__menu-button"
              onClick={showSidebar}
            />
          </Link>
        </div>
        <nav
          className={
            sidebar ? "nav__sidebar nav__sidebar--active" : "nav__sidebar"
          }
        >
          <ul className="nav__sidebar-list">
            <li className="nav__sidebar-item">
              <Link to="#" className="nav__sidebar-links">
                <AiIcons.AiOutlineClose
                  className="nav__sidebar-icons nav__sidebar-icons--close"
                  onClick={showSidebar}
                />
              </Link>
            </li>

            <li className="nav__sidebar-item">
              <Link to={`/tracks`} className="nav__sidebar-links">
                <BiIcons.BiHomeAlt
                  className="nav__sidebar-icons"
                  onClick={showSidebar}
                />
              </Link>
            </li>
            <li className="nav__sidebar-item">
              <Link to={`/profile`} className="nav__sidebar-links">
                <CgIcons.CgProfile
                  className="nav__sidebar-icons"
                  onClick={showSidebar}
                />
              </Link>
            </li>
            <li className="nav__sidebar-item">
              <Link to={`/upload`} className="nav__sidebar-links">
                <FiIcons.FiUpload
                  className="nav__sidebar-icons"
                  onClick={showSidebar}
                />
              </Link>
            </li>
            <li className="nav__sidebar-item nav__sidebar-logout">
              <Link to={`/`} onClick={logout}>
                <MdIcons.MdLogout
                  className="nav__sidebar-icons"
                  onClick={showSidebar}
                />
                {/* Logout */}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;