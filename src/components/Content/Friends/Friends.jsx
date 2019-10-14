import React from 'react';
import classes from './Friends.module.css';


const Friends = (props) =>{
	return (
		<div className={classes.main} >
			<div className={classes.text}>My Friends</div>
			<div>
				{
					props.storage.getState().FriendsPage.FriendsData.map((el)=>{
						return <div key = {el.id}>{el.name}</div>
					})
				}
			</div>
		</div>
		);
}

export default Friends;