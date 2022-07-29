import ProfileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <main className={ProfileCss.profile}>
      <img src='https://sun9-75.userapi.com/c855332/v855332451/1f6f49/5lr0yuS3bY8.jpg' alt='Фото профиля'/>
      <div>
        ava + description
      </div>
      <MyPosts/>
    </main>
  )
}

export default Profile;