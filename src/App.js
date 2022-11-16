import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = ({state, dispatch}) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar state={state.sidebar}/>
        <div className='App__content'>
          <Routes>
            <Route path='/profile' element={<Profile state={state.profilePage}
                                                     dispatch={dispatch}/>}/>
            <Route path='/messages' element={<Messages state={state.messagesPage}
                                                       dispatch={dispatch}/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
