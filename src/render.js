import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



export let rerenderEntireTree = (state, addPost) =>{
	ReactDOM.render(<App AppState={state} addPost={addPost}/>,
	document.getElementById('root'));
}
