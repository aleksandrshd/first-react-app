import NavbarCss from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from "./Friend/Friend";

const Navbar = ({state}) => {

  const friendsElements = state.friends.map(friend => <Friend name={friend.name} avatarLink={friend.avatarLink}
                                                              key={friend.id}/>)

  return (
    <nav className={NavbarCss.nav}>
      <ul className={NavbarCss.list}>
        <li className={NavbarCss.item}><NavLink to='/profile'>Profile</NavLink></li>
        <li className={NavbarCss.item}><NavLink to='/messages'>Messages</NavLink>
        </li>
        <li className={NavbarCss.item}><NavLink to='/news'>News</NavLink></li>
        <li className={NavbarCss.item}><NavLink to='/music'>Music</NavLink></li>
        <li className={NavbarCss.item}><NavLink to='/settings'>Settings</NavLink></li>
      </ul>
      <div className={NavbarCss.divFriends}>
        <h2 className={NavbarCss.h2}>Friends</h2>
        <div className={NavbarCss.div}>
          {friendsElements}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;