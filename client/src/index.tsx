import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './index.css';

ReactDOM.render(<App />, document.querySelector('#root'));

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./serviceWorker.js')
      .then((registration) => {
        console.log('service worker succesfully registered', registration);
      })
      .catch((error) => {
        console.log('service worker registration failed', error);
      });
  }
});
