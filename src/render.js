import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let rerenderEntireTree = (state, PostChangeHandler) =>{
	ReactDOM.render(<App AppState={state} PostChangeHandler={PostChangeHandler}/>,
	document.getElementById('root'));
	console.log('rerender');
}

