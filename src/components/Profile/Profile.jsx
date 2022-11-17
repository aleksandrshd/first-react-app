import ProfileCss from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

  return (
    <main className={ProfileCss.profile}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </main>
  )
}

export default Profile;