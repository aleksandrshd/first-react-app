const addMessageType = 'ADD-MESSAGE';
const addNewMessageTextType = 'ADD-NEW-MESSAGE-TEXT';

const initialState = {
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
};

const messagesPageReducer = (state = initialState, action) => {

  switch (action.type) {

    case addNewMessageTextType:
      state.newMessageText = action.newMessageText;
      return state;

    case addMessageType:
      const newMessage = {
        id: state.messages.length + 1,
        message: state.newMessageText
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    default:
      return state;

  }
}

export default messagesPageReducer;

export const addMessageActionCreator = () => ({type: addMessageType});

export const addNewMessageTextActionCreator = (text) =>
  ({type: addNewMessageTextType, newMessageText: text});