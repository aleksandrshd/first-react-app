const addMessageType = 'ADD-MESSAGE';
const addNewMessageTextType = 'ADD-NEW-MESSAGE-TEXT';

const messagesPageReducer = (state, action) => {

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