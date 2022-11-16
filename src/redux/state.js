export const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Have a nice day', likesCount: 29},
        {id: 2, message: 'How are you?', likesCount: 16},
        {id: 3, message: 'Have a nice weekend', likesCount: 41},
        {id: 4, message: 'Weather is fine', likesCount: 55},
        {id: 5, message: 'My second post', likesCount: 9},
        {id: 6, message: 'My first post', likesCount: 99}
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Aleksandr'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Aleksey'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Maksim'},
        {id: 6, name: 'Margarita'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'What are yo doing?'},
        {id: 3, message: 'How is your project???'},
        {id: 4, message: 'Not sure'},
        {id: 5, message: 'Great idea lol'}
      ]
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Maksim', avatarLink: 'https://i.ytimg.com/vi/-3fcgKTSyBQ/maxresdefault.jpg'},
        {id: 2, name: 'Andrey', avatarLink: 'https://funart.pro/uploads/posts/2019-10/1570103771_1.jpg'},
        {id: 3, name: 'Ivan', avatarLink: 'https://topkin.ru/wp-content/uploads/2016/09/ivangaj.jpg'},
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('No subscribers / observers');
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === 'ADD-NEW-POST-TEXT') {

      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);

    } else if (action.type === 'ADD-POST') {

      const newPost = {
        id: this._state.profilePage.posts.length + 1,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    console.log(this._state);
  }
};

/*
const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Have a nice day', likesCount: 29},
      {id: 2, message: 'How are you?', likesCount: 16},
      {id: 3, message: 'Have a nice weekend', likesCount: 41},
      {id: 4, message: 'Weather is fine', likesCount: 55},
      {id: 5, message: 'My second post', likesCount: 9},
      {id: 6, message: 'My first post', likesCount: 99}
    ],
    newPostText: ''
  },
  messagesPage: {
    dialogs: [
      {id: 1, name: 'Aleksandr'},
      {id: 2, name: 'Dmitry'},
      {id: 3, name: 'Aleksey'},
      {id: 4, name: 'Olga'},
      {id: 5, name: 'Maksim'},
      {id: 6, name: 'Margarita'}
    ],
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'What are yo doing?'},
      {id: 3, message: 'How is your project???'},
      {id: 4, message: 'Not sure'},
      {id: 5, message: 'Great idea lol'}
    ]
  },
  sidebar: {
    friends: [
      {id: 1, name: 'Maksim', avatarLink: 'https://i.ytimg.com/vi/-3fcgKTSyBQ/maxresdefault.jpg'},
      {id: 2, name: 'Andrey', avatarLink: 'https://funart.pro/uploads/posts/2019-10/1570103771_1.jpg'},
      {id: 3, name: 'Ivan', avatarLink: 'https://topkin.ru/wp-content/uploads/2016/09/ivangaj.jpg'},
    ]
  }
};

let rerenderEntireTree = () => {};

export const addPost = () => {
  const newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export const updateNewPostText = (text) => {
  state.profilePage.newPostText = text;
  rerenderEntireTree(state);
}

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}

export default state;*/
