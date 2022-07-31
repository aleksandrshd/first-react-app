import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
  const posts = [
    {id: 1, message: 'Have a nice day', likesCount: 29},
    {id: 2, message: 'How are you?', likesCount: 16},
    {id: 3, message: 'Have a nice weekend', likesCount: 41},
    {id: 4, message: 'Weather is fine', likesCount: 55},
    {id: 5, message: 'My second post', likesCount: 9},
    {id: 6, message: 'My first post', likesCount: 99}
  ];

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