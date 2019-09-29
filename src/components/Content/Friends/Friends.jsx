import React from 'react';
import classes from './Friends.module.css';


const Friends = (props) =>{
	let state = props.FriendsPage.FriendsData;
	return (
		<div className={classes.main} >
			<div className={classes.text}>My Friends</div>
			<div>
				{
					state.map((el)=>{
						return <div key = {el.id}>{el.name}</div>
					})
				}
			</div>
		</div>
		);
}

export default Friends;