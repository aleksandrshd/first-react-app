import FriendCss from "./Friend.module.css"

const Friend = ({avatarLink, name}) => {
  return (
    <div>
      <img className={FriendCss.img} src={avatarLink}/>
      <p className={FriendCss.p}>{name}</p>
    </div>
  );
}

export default Friend;