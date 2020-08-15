import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let posts = [
  { id: 0, massage: 'Hi bitches', likes: '66' },
  { id: 1, massage: 'There is my first post', likes: '4'}
];

let dialogs = [
  { id: 0, name: 'Sawed massages' },
  { id: 1, name: 'Artem' },
  { id: 2, name: 'Andrew' },
  { id: 3, name: 'Nastya' },
  { id: 4, name: 'Olya' }
];

let massages = [
  { id: 0, massage: 'hi' },
  { id: 1, massage: 'ne hi' },
  { id: 2, massage: 'ff' },
  { id: 3, massage: 'vbcb' }
];


ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} massages={massages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
