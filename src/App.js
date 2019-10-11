import React from 'react';
import './App.css';
import MainBar from './components/Bars/MainBar.jsx'
import Header from './components/Header/Header.jsx'
import Posts from './components/Content/Posts/Posts.jsx'
import Messages from './components/Content/Messages/Messages.jsx'
import Friends from './components/Content/Friends/Friends.jsx'
import History from './components/Content/History/History.jsx'
import Settings from './components/Content/Settings/Settings.jsx'
import {Route,  BrowserRouter} from 'react-router-dom'




class App extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render(){
  		return (  
		    <div className='App-wrapper'>
		        <BrowserRouter> 
			        <Header/>
			        <MainBar/>  
				    <div className='App-wrapper-MainContent content'>
						<Route exact path = '/' render = {() => <Posts PostsPage={this.props.AppState.PostsPage} PostChangeHandler={this.props.PostChangeHandler}/>}/>
			            <Route path = '/messages' render = {() => <Messages MessagesPage={this.props.AppState.MessagesPage}/>}/>
			           	<Route path = '/myposts' render = {() => <Posts PostsPage={this.props.AppState.PostsPage} PostChangeHandler={this.props.PostChangeHandler}/>}/>	
			           	<Route path = '/friends' render = {() => <Friends FriendsPage = {this.props.AppState.FriendsPage}/>}/>
			           	<Route path = '/settings' render = {() => <Settings/>}/>
			           	<Route path = '/history' render = {() => <History/>}/>	
					</div>
		      	</BrowserRouter> 
		    </div>
  		);
	}
}
export default App;
