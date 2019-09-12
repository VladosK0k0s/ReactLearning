import React from 'react';
import classes from './Content.module.css';
import Posts from './Posts/Posts.jsx'
import Messages from './Messages/Messages.jsx'
import Friends from './Friends/Friends.jsx'
import History from './History/History.jsx'
import Settings from './Settings/Settings.jsx'
import {Route, BrowserRouter} from 'react-router-dom'



const MainContent = () =>{
  return(
    <BrowserRouter> 
  		<div>
  			<Route exact path = '/' component = {Posts}/>
            <Route path = '/messages' component = {Messages}/>
           	<Route path = '/myposts' component = {Posts}/>	
           	<Route path = '/friends' component = {Friends}/>
           	<Route path = '/settings' component = {Settings}/>
           	<Route path = '/history' component = {History}/>			
  		</div>
  	</BrowserRouter> 	
  );
}
export default MainContent;