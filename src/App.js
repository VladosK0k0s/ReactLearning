import React from 'react';
import './App.css';
import MainBar from './components/Bars/MainBar.jsx'
import Header from './components/Header/Header.jsx'
import Posts from './components/Content/Posts/Posts.jsx'
import Messages from './components/Content/Messages/Messages.jsx'
import Friends from './components/Content/Friends/Friends.jsx'
import History from './components/Content/History/History.jsx'
import Settings from './components/Content/Settings/Settings.jsx'
import {Route, BrowserRouter} from 'react-router-dom'


const App = () =>{
  return (  
    <div className='App-wrapper'>
        <BrowserRouter> 
	        <Header/>
	        <MainBar/>  
		    <div className='App-wrapper-MainContent content'>
				<Route exact path = '/' component = {Posts}/>
	            <Route path = '/messages' component = {Messages}/>
	           	<Route path = '/myposts' component = {Posts}/>	
	           	<Route path = '/friends' component = {Friends}/>
	           	<Route path = '/settings' component = {Settings}/>
	           	<Route path = '/history' component = {History}/>	
			</div>
      	</BrowserRouter> 
    </div>
  );
}
export default App;
