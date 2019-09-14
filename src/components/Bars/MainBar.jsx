import React from 'react';
import classes from './Bars.module.css';
import {NavLink} from 'react-router-dom'

const MainBar = () =>{
	return(
			<div className={classes.leftbar}>
				<NavLink className={classes.bar} to = '/myposts'>Profile</NavLink>
				<NavLink className={classes.bar} to = '/messages'>Messages</NavLink>
				<NavLink className={classes.bar} to = '/friends'>Friends</NavLink>
				<NavLink className={classes.bar} to = '/settings'>Settings</NavLink>
				<NavLink className={classes.bar} to = '/history'>History</NavLink>
			</div>
	);
}
export default MainBar;