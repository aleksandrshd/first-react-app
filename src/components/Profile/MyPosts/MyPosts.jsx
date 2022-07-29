import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {
  return (
    <div>My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <Post message='Have a nice day' likes='29'/>
      <Post message='How are you?' likes='16'/>
      <Post message='Have a nice weekend' likes='41'/>
      <Post message='Weather is fine' likes='55'/>
      <Post message='My first post' likes='8'/>
    </div>
  )
}

export default MyPosts;