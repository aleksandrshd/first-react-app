import NavbarCss from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={NavbarCss.nav}>
      <ul className={NavbarCss.list}>
        <li className={NavbarCss.item}><NavLink activeClassName={NavbarCss.active} to='/profile'>Profile</NavLink></li>
        <li className={NavbarCss.item}><NavLink activeClassName={NavbarCss.active} to='/messages'>Messages</NavLink>
        </li>
        <li className={NavbarCss.item}><NavLink to='/news'>News</NavLink></li>
        <li className={NavbarCss.item}><NavLink to='/music'>Music</NavLink></li>
        <li className={NavbarCss.item}><NavLink to='/settings'>Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;