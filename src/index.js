import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import {HandleChange} from './redux/state';
import {rerenderEntireTree} from './render.js'

serviceWorker.unregister();
rerenderEntireTree(state, HandleChange);