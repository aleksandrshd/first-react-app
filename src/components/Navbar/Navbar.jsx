import NavbarCss from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={NavbarCss.nav}>
      <ul className={NavbarCss.list}>
        <li className={`${NavbarCss.item} ${NavbarCss.active}`}>Profile</li>
        <li className={NavbarCss.item}>Messages</li>
        <li className={NavbarCss.item}>News</li>
        <li className={NavbarCss.item}>Music</li>
        <li className={NavbarCss.item}>Settings</li>
      </ul>
    </nav>
  )
}

export default Navbar;