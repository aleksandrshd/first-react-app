import React from 'react';
import ReactDOM from "react-dom/client";

import './index.css';

import store from "./redux/reduxStore";

import App from "./App";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()}
           dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

rerenderEntireTree();

/*store.subscribe(() => {
  rerenderEntireTree(store.getState());
});*/

store.subscribe(rerenderEntireTree);

reportWebVitals();
