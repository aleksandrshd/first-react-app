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

const Messages = () => {

  const dialogs = [
    {id: 1, name: 'Aleksandr'},
    {id: 2, name: 'Dmitry'},
    {id: 3, name: 'Aleksey'},
    {id: 4, name: 'Olga'},
    {id: 5, name: 'Maksim'},
    {id: 6, name: 'Margarita'}
  ];

  const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'What are yo doing?'},
    {id: 3, message: 'How is your project???'},
    {id: 4, message: 'Not sure'},
    {id: 5, message: 'Great idea lol'},
  ];

  const dialogsElements = dialogs.map(dialog => <Dialog id={dialog.id} name={dialog.name}/>);

  const messagesElements = messages.map(messageItem => <Message message={messageItem.message}/>)

  return (
    <div className={MessagesCss.messages}>
      <div className={MessagesCss.dialogsList}>
        {dialogsElements}
      </div>
      <div className={MessagesCss.messagesList}>
        {messagesElements}
      </div>
    </div>
  )
}

export default Messages;