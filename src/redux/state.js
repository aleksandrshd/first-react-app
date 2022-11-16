import profilePageReducer from "./profilePageReducer";
import messagesPageReducer from "./messagesPageReducer";
import sidebarReducer from "./sidebarReducer";

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
      ],
      newMessageText: ''
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

    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

    console.log(this._state);
  }
};
