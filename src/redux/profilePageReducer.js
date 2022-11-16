const addPostType = 'ADD-POST';
const addNewPostTextType = 'ADD-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {

  switch (action.type) {
    case addPostType:
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case addNewPostTextType:
      state.newPostText = action.newPostText;
      return state;

    default:
      return state;

  }
}

export default profilePageReducer;

export const addPostActionCreator = () => ({type: addPostType});

export const addNewPostTextActionCreator = (text) =>
  ({type: addNewPostTextType, newPostText: text});