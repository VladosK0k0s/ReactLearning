import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


export let rerenderEntireTree = (state, HandleChange) =>{
	console.log(state.PostsPage.postsData);
	ReactDOM.render(<App AppState={state} HandleChange={HandleChange}/>,
	document.getElementById('root'));
}

