import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post.jsx"
import {PostUpdateInputActionCreator, PostAddActionCreator} from './../../../redux/PostsPage_reducer.js'


class Posts extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}
  	handleInputChange(event) {
  		let new1  = event.target.value;
  		if(!(new1[new1.length-1] === ',')&&!(new1[new1.length] === ',')){
  			this.props.storage.dispatch(PostUpdateInputActionCreator(new1));
  		}
 	}
    handleSubmit(event) {
    	if(this.props.storage.getState().PostsPage.inputvalue[0] !== ''){
        	this.props.storage.dispatch(PostAddActionCreator());
        	this.props.storage.dispatch(PostUpdateInputActionCreator(''));
    	}

   		event.preventDefault();
    }
    render(){
	    return(
			<div className={classes.items} >
				<div className={classes.text}>My Posts</div>
				<div>
					<form className = {classes.text} onSubmit={this.handleSubmit}>
        			  <label>
         				  <input type="text" value={this.props.storage.getState().PostsPage.inputvalue} onChange={this.handleInputChange} />
       				  </label>
       				  <input type="submit" value="Add Post" />
      				</form>	
				</div>
				<div>
					{
						this.props.storage.getState().PostsPage.postsData.map((el) => {
							return (
								<Post 
									dispatch = {this.props.storage.dispatch.bind(this.props.storage)} 
									key ={el.id} id ={el.id} 
									likesCNT = {el.likesCNT} 
									message={el.message} 
									ImgURL={el.ImgURL} 
								/>);
						})
					}
				</div>
			</div>
		
	    );
	}
}

export default Posts;