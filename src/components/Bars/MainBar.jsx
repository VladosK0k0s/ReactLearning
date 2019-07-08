import React from 'react';
import classes from './Bars.module.css';
import {Link, Route, BrowserRouter as Router } from 'react-router-dom'

const MainBar = () =>{
	return(
		<Router>
			<div className={classes.leftbar}>
				<Link className={classes.bar} to = '/myposts'>Profile</Link>
				<Link className={classes.bar} to = '/messages'>Messages</Link>
				<Link className={classes.bar} to = '/friends'>Friends</Link>
				<Link className={classes.bar} to = '/settings'>Settings</Link>
				<Link className={classes.bar} to = '/history'>History</Link>
			</div>
		</Router>
	);
}
export default MainBar;