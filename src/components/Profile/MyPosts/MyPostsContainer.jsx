import {addNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profilePageReducer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer>
      {store => {
        const profilePageState = store.getState().profilePage;

        const addNewPost = () => {
          store.dispatch(addPostActionCreator());
        }

        const changePostText = (text) => {
          store.dispatch(addNewPostTextActionCreator(text));
        }
        return (
          <MyPosts posts={profilePageState.posts}
                   newPostText={profilePageState.newPostText}
                   changePostText={changePostText}
                   addNewPost={addNewPost}/>
        );
      }
      }
    </StoreContext.Consumer>
  )
}

export default MyPostsContainer;