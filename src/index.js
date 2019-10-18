import './index.css';
import * as serviceWorker from './serviceWorker';
import storage from './redux/redux_store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


serviceWorker.unregister();
let rerenderEntireTree = () =>{
	ReactDOM.render(<App storage={storage} />,
	document.getElementById('root'));
	console.log('rerender');
}

rerenderEntireTree();

storage.subscribe(rerenderEntireTree);