import React from 'react'
import classes from './Messages.module.css'
import Dialog from './Dialog/Dialog.jsx'
import MessageContent from './MessageContent/MessageContent.jsx'


let dialogsData = [
	{name: "Anton", id: 1},
	{name: 'Vlad', id: 2},
	{name: 'Vania', id: 3},
	{name: 'Petya', id: 4}
]
let messageData = [
	{text: "Hello world!", id: 1},
	{text: "Hello, VSause!", id: 2},
	{text: "jfjjfjf", id: 3},
	{text: "Jemes Koh", id: 4}
]


class Messages extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	Data: this.props.messagesData
	  };
	}
	render(){
		return(
			<div>
				<div className={classes.text}>My Messages</div>
					<div className = {classes.messages}>
					<div>
					{
						this.state.Data.dialogsData.map((el) => {
							return <Dialog className = {classes.dialoglink} name = {el.name} key = {el.id}></Dialog>
						})
					}
					</div>
					<div className = {classes.content}>	
					{
						this.state.Data.messageData.map((el) => {
							return <MessageContent key = {el.id} text = {el.text}></MessageContent>	
						})
					}
					</div>
				</div>
			</div>
		);
	}
};

export default Messages;