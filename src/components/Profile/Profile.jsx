import ProfileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({state, dispatch}) => {

  return (
    <main className={ProfileCss.profile}>
      <ProfileInfo/>
      <MyPosts posts={state.posts}
               newPostText={state.newPostText}
               dispatch={dispatch}/>
    </main>
  )
}

export default Profile;