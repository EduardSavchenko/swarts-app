import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';
import store from './store/store';
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}></Provider>
      <div className='wrapper'>
        <App />
      </div>
    </Provider>
  </React.StrictMode>
  </BrowserRouter >

);
