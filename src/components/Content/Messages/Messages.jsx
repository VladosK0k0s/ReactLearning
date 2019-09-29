import React from 'react'
import classes from './Messages.module.css'
import Dialog from './Dialog/Dialog.jsx'
import MessageContent from './MessageContent/MessageContent.jsx'


class Messages extends React.Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	Data: this.props.MessagesPage
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