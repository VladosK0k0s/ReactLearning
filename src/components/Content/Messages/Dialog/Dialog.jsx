import React from 'react'
import classes from './Dialog.module.css'
import {NavLink} from 'react-router-dom'

const Dialog = (props) =>{
	let link = `/messages/${props.id}`;
	return  <div>
				<NavLink to={link}>{props.name}</NavLink>
			</div>
}


export default Dialog;