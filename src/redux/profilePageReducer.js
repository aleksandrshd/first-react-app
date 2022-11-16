const addPostType = 'ADD-POST';
const addNewPostTextType = 'ADD-NEW-POST-TEXT';

const initialState = {
  posts: [
    {id: 1, message: 'Have a nice day', likesCount: 29},
    {id: 2, message: 'How are you?', likesCount: 16},
    {id: 3, message: 'Have a nice weekend', likesCount: 41},
    {id: 4, message: 'Weather is fine', likesCount: 55},
    {id: 5, message: 'My second post', likesCount: 9},
    {id: 6, message: 'My first post', likesCount: 99}
  ],
  newPostText: ''
};

const profilePageReducer = (state = initialState, action) => {

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