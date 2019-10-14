import React from 'react';
import classes from './Post.module.css';
import {UpdateLikeActionCreator, UpdateDisLikeActionCreator} from './../../../../redux/state.js'


// let UpdateLikeActionCreator = (id) =>{
// 	return {type: 'UPDATE-LIKE', id: id}
// }
// let UpdateDisLikeActionCreator = (id) =>{
// 	return {type: 'UPDATE-DISLIKE', id: id}
// }

//console.log(UpdateDisLikeActionCreator);

class Post extends React.Component {
	Show (arg) {
		return !arg ? '' : arg;
	}
     render(){
		return<div className={classes.item} >
				<img className={classes.userimg} src={`${this.props.ImgURL}`} alt="userimg"/>
				{this.props.message}
				<div className={classes.likes} >
					<div>
						<button className={classes.like} onClick={()=>this.props.dispatch(UpdateLikeActionCreator(this.props.id))}>
							<img src="https://img.icons8.com/ios/50/000000/hearts-filled.png" alt="like"></img>
							<div>{this.Show(this.props.likesCNT[0])}</div> 
						</button>
					</div>
					<div>
						<button className={classes.dislike} onClick={()=>this.props.dispatch(UpdateDisLikeActionCreator(this.props.id))}>
							<img src="https://img.icons8.com/material-rounded/50/000000/hearts.png" alt="dislike"></img>
							<div>{this.Show(this.props.likesCNT[1])}</div> 
						</button>
					</div>
				</div>
			</div>	
   };
}
export default Post;