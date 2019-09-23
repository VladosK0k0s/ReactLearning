
import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post.jsx"



class Posts extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {	value: '',
	    				array: this.props.postData
	    			};
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.addToArray = this.addToArray.bind(this);
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
 	}

    handleSubmit(event) {
    	this.addToArray();
   		event.preventDefault();
    }
    addToArray(){
  		let newarray = this.state.array;
        newarray.unshift({key: this.state.array.length + 1, id: this.state.array.length + 1, message: this.state.value, ImgURL: `https://picsum.photos/200/300/?blur`}); 
	  	this.setState({
	        array: newarray,
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
         				  <input type="text" value={this.state.value} onChange={this.handleChange} />
       				  </label>
       				  <input type="submit" value="Add Post" />
      				</form>	
				</div>
				<div>
					{
						this.state.array.map((el) => {
							return <Post key ={el.id} id={el.id} message={el.message} ImgURL={el.ImgURL} />;
						})
					}
				</div>
			</div>
		
	    );
	}
}

export default Posts;