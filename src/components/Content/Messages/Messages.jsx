import React from 'react'
import classes from './Messages.module.css'
import Dialog from './Dialog/Dialog.jsx'
import {Route} from 'react-router-dom'
import MessageContent from './MessageContent/MessageContent.jsx'
import {SendMessageActionCreator, UpdateMessageInputActionCreator} from './../../../redux/state.js'



class Messages extends React.Component{
	constructor(props) {
	  super(props);
	  this.handleSubmit = this.handleSubmit.bind(this);
	  this.handleInputChange = this.handleInputChange.bind(this);
	}
	handleInputChange(event){
		let text = event.target.value;
		this.props.storage.dispatch(UpdateMessageInputActionCreator(text));
	}
	handleSubmit(event){
		let reg = /\/messages\/([0-9]+)/;
		let id = reg.exec(window.location.pathname) ? reg.exec(window.location.pathname)[1] : 0;
		if(this.props.storage.getState().MessagesPage.inputvalue[0] !== ''){
        	this.props.storage.dispatch(SendMessageActionCreator(id));
        	this.props.storage.dispatch(UpdateMessageInputActionCreator(''));
    	}
		event.preventDefault();
	}
	render(){
		return(
			<div>
				<div className={classes.text}>My Messages</div>
					<div className = {classes.messages_main_page}>
					<div className={classes.dialogs}>
						{
							this.props.storage.getState().MessagesPage.dialogsData.map((el) => {
								return <Dialog name = {el.name} key = {el.id} id = {el.id}></Dialog>
							})
						}
					</div>
					<div className = {classes.messages_list} >
						<Route exact path = '/messages/'  key={0} render = {() => (<h3 className = {classes.hitext} >Select Dialog</h3>)}/>
						{
							this.props.storage.getState().MessagesPage.dialogsData.map((el) => {
								this.id = el.id;
								return <Route path = {`/messages/${el.id}`} key={el.id} render = {() => <MessageContent messages = {el.messages}/> }/>
							})
						}
					</div>
					<div className={classes.forma}>
						<form  onSubmit={this.handleSubmit}>
		        			<label>
		         				<input type="text" value={this.props.storage.getState().MessagesPage.inputvalue} onChange={this.handleInputChange} />
		       				</label>
		       				<input type="submit" value="SEND" />
	      				</form>		
					</div>		
				</div>
			</div>
		);
	}
};


export default Messages;