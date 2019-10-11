
import React from 'react';
import classes from './Post.module.css';


class Post extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
	  	likecnt: this.props.CNT[0],
		dislikecnt: this.props.CNT[1],
		message: this.props.message,
		avatar: this.props.ImgURL,
		HandleChange: this.props.HandleChange
	  };
	}
	ChangeLike() {	
		this.props.CNT[0]++;
		this.setState({likecnt:this.props.CNT[0]});
		this.state.HandleChange();
	}
	ChangeDisLike() {
		this.props.CNT[1]++;
		this.setState({dislikecnt:this.props.CNT[1]});
		this.state.HandleChange();		
	}
	Show (arg) {
		return !arg ? '' : arg;
	}
     render(){
		return<div className={classes.item} >
				<img className={classes.userimg} src={`${this.state.avatar}`} alt="userimg"/>
				{this.state.message}
				<div className={classes.likes} >
					<div>
						<button className={classes.like} onClick={this.ChangeLike.bind(this)}>
							<img src="https://img.icons8.com/ios/50/000000/hearts-filled.png" alt="like"></img>
							<div>{this.Show(this.state.likecnt)}</div> 
						</button>
					</div>
					<div>
						<button className={classes.dislike} onClick={this.ChangeDisLike.bind(this)}>
							<img src="https://img.icons8.com/material-rounded/50/000000/hearts.png" alt="dislike"></img>
							<div>{this.Show(this.state.dislikecnt)}</div> 
						</button>
					</div>
				</div>
			</div>	
   };
}
export default Post;