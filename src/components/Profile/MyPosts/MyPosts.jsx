import {createRef} from "react";
import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";
import {addNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profilePageReducer";

const MyPosts = ({posts, newPostText, dispatch}) => {

  const postsElements = posts.map((post, index) => <Post message={post.message}
                                                         likes={post.likesCount}
                                                         key={index}/>);

  const newPostElement = createRef();

  const addNewPost = () => {
    dispatch(addPostActionCreator());
  }

  const onChange = () => {
    const text = newPostElement.current.value;
    dispatch(addNewPostTextActionCreator(text));
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