import ProfileInfoCss from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <img className={ProfileInfoCss.image} src='https://sun9-75.userapi.com/c855332/v855332451/1f6f49/5lr0yuS3bY8.jpg' alt='Фото профиля'/>
        <div>
          <p>ava + description</p>
        </div>
    </div>
)
}

export default ProfileInfo;