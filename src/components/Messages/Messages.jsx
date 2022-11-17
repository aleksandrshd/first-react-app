import MessagesCss from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
  const path = '/dialogs/' + props.id;

  return (
    <div>
      <NavLink className={MessagesCss.dialog} to={path}>{props.name}
      </NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div><p className={MessagesCss.message}>{props.message}</p></div>
  )
}

const Messages = ({state, newMessageText, changeMessageText, sendMessage}) => {

  const onSendMessageBtnClick = () => {
    sendMessage();
  }

  const onMessageTextChange = (event) => {
    const text = event.target.value;
    changeMessageText(text);
  }

  const dialogsElements = state.dialogs.map((dialog, index) => <Dialog id={dialog.id} name={dialog.name} key={index}/>);

  const messagesElements = state.messages.map((messageItem, index) => <Message message={messageItem.message}
                                                                               key={index}/>)

  return (
    <div className={MessagesCss.messages}>
      <div className={MessagesCss.dialogsList}>
        {dialogsElements}
      </div>
      <div className={MessagesCss.messagesList}>
        {messagesElements}
        <div>
          <textarea onChange={onMessageTextChange} value={newMessageText}/>
          <button onClick={onSendMessageBtnClick}>Отправить</button>
        </div>
      </div>
    </div>
  )
}

export default Messages;