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
import MainBackground from './components/MainBackground/MainBackground.jsx'





class App extends React.Component{
	render(){
  		return (  
		    <div className='App-wrapper'>
		    	<MainBackground storage = {this.props.storage}/>
		        <BrowserRouter>
			        <Header/>
			        <MainBar/>  
				    <div className='App-wrapper-MainContent content'>
						<Route exact path = '/' render = {() => <Posts storage = {this.props.storage}/>}/>
			            <Route path = '/messages' render = {() => <Messages storage = {this.props.storage}/>}/>
			           	<Route path = '/myposts' render = {() => <Posts storage = {this.props.storage}/>}/>	
			           	<Route path = '/friends' render = {() => <Friends storage = {this.props.storage}/>}/>
			           	<Route path = '/settings' render = {() => <Settings storage = {this.props.storage}/>}/>
			           	<Route path = '/history' render = {() => <History storage = {this.props.storage}/>}/>
					</div>
					
		      	</BrowserRouter> 
		    </div>
  		);
	}
}
export default App;
