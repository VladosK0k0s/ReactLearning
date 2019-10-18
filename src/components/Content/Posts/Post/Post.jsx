import React from 'react';
import classes from './Post.module.css';
import {PostUpdateLikeActionCreator, PostUpdateDisLikeActionCreator} from './../../../../redux/PostsPage_reducer.js'


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
						<button className={classes.like} onClick={()=>this.props.dispatch(PostUpdateLikeActionCreator(this.props.id))}>
							<img src="https://img.icons8.com/ios/50/000000/hearts-filled.png" alt="like"></img>
							<div>{this.Show(this.props.likesCNT[0])}</div> 
						</button>
					</div>
					<div>
						<button className={classes.dislike} onClick={()=>this.props.dispatch(PostUpdateDisLikeActionCreator(this.props.id))}>
							<img src="https://img.icons8.com/material-rounded/50/000000/hearts.png" alt="dislike"></img>
							<div>{this.Show(this.props.likesCNT[1])}</div> 
						</button>
					</div>
				</div>
			</div>	
   };
}
export default Post;