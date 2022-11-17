import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";

const App = ({sidebar}) => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Navbar state={sidebar}/>
        <div className='App__content'>
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/messages' element={<MessagesContainer/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
