import {createRef} from "react";
import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = ({posts, newPostText, dispatch}) => {

  const postsElements = posts.map((post, index) => <Post message={post.message}
                                                         likes={post.likesCount}
                                                         key={index}/>);

  const newPostElement = createRef();

  const addNewPost = () => {
    dispatch({type: 'ADD-POST'});
  }

  const onChange = () => {
    const text = newPostElement.current.value;
    dispatch({type: 'ADD-NEW-POST-TEXT', newPostText: text});
  }

  return (
    <div>My posts
      <div>
        <textarea ref={newPostElement} value={newPostText} onChange={onChange}></textarea>
        <button onClick={addNewPost}>Add post</button>
        <button>Remove post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;