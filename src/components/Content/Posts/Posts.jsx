import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post.jsx"



class Posts extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {	value: '',
	    				array: this.props.PostsPage.postsData,
	    				HandleChange: this.props.PostsPage.HandleChange
	    			};
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.addToArray = this.addToArray.bind(this);
  	}

  	handleInputChange(event) {
  		let new1  = event.target.value;
  		if((new1[new1.length-1] === ',')||(new1[new1.length] === ',')){
  			this.setState({value: new1.slice(0,-1)});
  		}
  		else
    	this.setState({value: event.target.value});
 	}

    handleSubmit(event) {
    	if(this.state.value !== ''){
	    	this.addToArray();
	    	this.state.HandleChange();
    	}
   		event.preventDefault();
    }
    addToArray(){
  		let newarray = this.state.array;
        newarray.unshift({key: this.state.array.length + 1, id: this.state.array.length + 1, likesCNT: [0,0], message: this.state.value, ImgURL: `https://picsum.photos/200/300/?blur`}); 
	  	this.setState({
	        //array: newarray,
	        value: ''
	    });
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

export default Posts;