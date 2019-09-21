import React from 'react'
import classes from './Messages.module.css'
import {NavLink} from 'react-router-dom'

const Dialog = (props) =>{
	let link = `/messages/${props.id}`;
	return  <div>
				<NavLink to={link}>{props.name}</NavLink>
			</div>
}

const MessageContent = (props) =>{
	return  <div >
				{props.text}
		    </div>
}

const Dialogs = () =>{

	let dialogsData = [
		{id:1, name: 'Ivan'},
		{id:2, name: 'Antonio'},
		{id:3, name: 'Vlad'}
	]
	let messageData = [
		{id:1, text: 'vvvvv'},
		{id:2, text: 'vewewewvv'},
		{id:3, text: 'vv1212121vvv'},
		{id:4, text: 'v'},
		{id:5, text: '111111'},
		{id:6, text: 'vvvvv'}
	]
	return(
		<div>
			<div className={classes.text}>My Messages</div>
				<div className = {classes.messages}>
				<div>
				{
					dialogsData.map((el) => {
						return <Dialog name = {el.name} id = {el.id}></Dialog>
					})
				}
				</div>
				<div className = {classes.content}>	
				{
					messageData.map((el) => {
						return <MessageContent id = {el.id} text = {el.text}></MessageContent>	
					})
				}
				</div>
			</div>
		</div>
		);
}

export default Dialogs;