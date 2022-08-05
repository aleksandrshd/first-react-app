import ProfileCss from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  const postsD = [
    {id: 1, message: 'Have a nice day', likesCount: 29},
    {id: 2, message: 'How are you?', likesCount: 16},
    {id: 3, message: 'Have a nice weekend', likesCount: 41},
    {id: 4, message: 'Weather is fine', likesCount: 55},
    {id: 5, message: 'My second post', likesCount: 9},
    {id: 6, message: 'My first post', likesCount: 99}
  ];

  return (
    <main className={ProfileCss.profile}>
      <ProfileInfo/>
      <MyPosts posts={postsD}/>
    </main>
  )
}

export default Profile;