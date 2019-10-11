import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post.jsx"


class Posts extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {	value: this.props.PostsPage.inputvalue,
	    				array: this.props.PostsPage.postsData,
	    				AddPost: this.props.PostChangeHandler[0],	
	    				UpdateInput: this.props.PostChangeHandler[1]
	    			};
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleInputChange(event) {
  		let new1  = event.target.value;
  		if(!(new1[new1.length-1] === ',')&&!(new1[new1.length] === ',')){
  			this.state.UpdateInput(event.target.value);
  		}
 	}
    handleSubmit(event) {
    	if(this.state.value !== '11'){
        	this.state.AddPost({
        	 	message: this.state.value, 
        	 	ImgURL: `https://picsum.photos/200/30${Math.floor(Math.random()*10)}/`});
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
         				  <input type="text" value={this.state.value} onChange={this.handleInputChange} />
       				  </label>
       				  <input type="submit" value="Add Post" />
      				</form>	
				</div>
				<div>
					{
						this.state.array.map((el) => {
							return <Post HandleChange = {this.state.HandleChange} key ={el.id} CNT = {el.likesCNT} message={el.message} ImgURL={el.ImgURL} />;
						})
					}
				</div>
			</div>
		
	    );
	}
}
// function deleteCookie(name) {
//   setCookie(name, "", {
//     'max-age': -1
//   })
// } 

export default Posts;