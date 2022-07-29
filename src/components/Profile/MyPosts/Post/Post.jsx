import PostCss from './Post.module.css';

const Post = (props) => {
  return (
    <ul className={PostCss.list}>
      <li className={PostCss.item}>
        <img src='https://sun9-69.userapi.com/aFLRAerLldkJkNHi6Od2voekamABHVAaOg-e3w/yXmw8FCyFoQ.jpg'/>
        <p>{props.message}</p>
        <span>{props.likes} likes</span>
      </li>
    </ul>
  )
}

export default Post;