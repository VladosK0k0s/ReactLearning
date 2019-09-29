import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {addPost} from './redux/state';
import {rerenderEntireTree} from './render.js'

serviceWorker.unregister();
rerenderEntireTree(state, addPost);