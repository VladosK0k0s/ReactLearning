import React from 'react'
import classes from './Messages.module.css'
import Dialog from './Dialog/Dialog.jsx'
import MessageContent from './MessageContent/MessageContent.jsx'


class Messages extends React.Component{
	render(){
		return(
			<div>
				<div className={classes.text}>My Messages</div>
					<div className = {classes.messages}>
					<div>
					{
						this.props.storage.getState().MessagesPage.dialogsData.map((el) => {
							return <Dialog className = {classes.dialoglink} name = {el.name} key = {el.id} id = {el.id}></Dialog>
						})
					}
					</div>
					<div className = {classes.content}>	
					{
						this.props.storage.getState().MessagesPage.messageData.map((el) => {
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