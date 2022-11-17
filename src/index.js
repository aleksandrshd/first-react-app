import React from 'react';
import ReactDOM from "react-dom/client";

import './index.css';

import store from "./redux/reduxStore";

import App from "./App";

import reportWebVitals from './reportWebVitals';
import {Provider, StoreContext} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App sidebar={store.getState().sidebar}/>
      </Provider>
    </React.StrictMode>
  );
}

rerenderEntireTree();

store.subscribe(rerenderEntireTree);

reportWebVitals();
