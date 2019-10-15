import React from 'react'
import classes from './MessageContent.module.css'

const MessageContent = (props) =>{
	return (
		<div>
		{	
			props.messages.map((el)=>{
				return <p className={classes.message} key = {el.id}>{el.text}</p>
			})
		}
		</div>
	)
}

export default MessageContent;