import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__
  && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
//registerServiceWorker();




// import { createStore } from 'redux';
//
// function playlist(state = [], action) {
//   if (action.type === 'ADD_TRACK') {
//     return [
//       ...state,
//       action.payload
//     ]
//   }
//   return state;
// }
//
// const store = createStore(playlist);
//
// const btn = document.querySelector('.add-track');
// const list = document.getElementById('list');
// const trackInput = document.querySelector('.track-name');
//
// store.subscribe(() => {
//   console.log('subscribe', store.getState());
//   list.innerHTML = '';
//   trackInput.value = '';
//   store.getState().forEach(track => {
//   let el = document.createElement('li');
//   el.textContent = track;
//   list.appendChild(el);
//   })
// })
//
// btn.addEventListener('click', () => {
//   let trackName = trackInput.value;
//   if (trackName !== "")
//     store.dispatch({'type': 'ADD_TRACK', 'payload': trackName})
// })
