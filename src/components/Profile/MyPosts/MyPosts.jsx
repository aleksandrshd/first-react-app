import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (posts) => {

  const postsElements = posts.map(post => <Post message={post.message} likes={post.likesCount}/>);
  return (
    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;