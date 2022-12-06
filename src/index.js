import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <div className='wrapper'>
        <App />
      </div>
    </React.StrictMode>
  </BrowserRouter>

);
