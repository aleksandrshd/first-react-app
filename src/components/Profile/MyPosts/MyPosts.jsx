import {createRef} from "react";
import MyPostsCss from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = ({posts,newPostText, changePostText, addNewPost}) => {

  const postsElements = posts.map((post, index) => <Post message={post.message}
                                                         likes={post.likesCount}
                                                         key={index}/>);

  const newPostElement = createRef();

  const onAddBtnClick = () => {
    addNewPost();
  }

  const onPostTextChange = () => {
    const text = newPostElement.current.value;
    changePostText(text);
  }

  return (
    <div>My posts
      <div>
        <textarea ref={newPostElement} value={newPostText} onChange={onPostTextChange}></textarea>
        <button onClick={onAddBtnClick}>Add post</button>
        <button>Remove post</button>
      </div>
      {postsElements}
    </div>
  )
}

export default MyPosts;