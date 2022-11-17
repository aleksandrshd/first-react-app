import {addMessageActionCreator, addNewMessageTextActionCreator} from "../../redux/messagesPageReducer";
import Messages from "./Messages";
import {StoreContext} from "../../StoreContext";


const MessagesContainer = () => {


  return (
    <StoreContext.Consumer>
      {store => {
        const messagesPageState = store.getState().messagesPage;

        const sendMessage = () => {
          store.dispatch(addMessageActionCreator());
        }

        const changeMessageText = (text) => {
          store.dispatch(addNewMessageTextActionCreator(text));
        }
        return (
          <Messages state={messagesPageState}
                    newMessageText={messagesPageState.newMessageText}
                    changeMessageText={changeMessageText}
                    sendMessage={sendMessage}/>
        );
      }
      }
    </StoreContext.Consumer>
  )
}

export default MessagesContainer;