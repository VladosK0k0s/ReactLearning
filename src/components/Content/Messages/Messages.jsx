import React from 'react'
import classes from './Messages.module.css'
import Dialog from './Dialog/Dialog.jsx'
import {Route} from 'react-router-dom'
import MessageContent from './MessageContent/MessageContent.jsx'


class Messages extends React.Component{
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
								return <Route path = {`/messages/${el.id}`} key={el.id} render = {() => <MessageContent messages = {el.messages}/> }/>
							})
						}
						<div>
							
						</div>		
					</div>
				</div>
			</div>
		);
	}
};


export default Messages;