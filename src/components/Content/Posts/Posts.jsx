
import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post.jsx"



class Posts extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {value: '',
	    	array: [
		    	{key: 3, id: 3, message: "Hi?", ImgURL: `https://amp.businessinsider.com/images/5cacd56cc6cc5056ef29b195-750-563.jpg`},
		    	{key: 2, id: 2, message: "kkkkkk", ImgURL: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ed8K8CHYqSdZtT4EIjyFFcZqqqfTuABa7EZgEun6b5uhPese`},
		    	{key: 1, id: 1, message: "Byyyyyeeeee", ImgURL: `https://i.ytimg.com/vi/_c8xXjc4jPw/hqdefault.jpg`}
	    	]};
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
        console.log(newarray);
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
class PostControl extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	
	    }  
  	}
    render() {
        return (
            <div>
                { 
	                this.state.array.map(input => {
	                    return input
	                })
              	}
                <button onClick={this.addAttributeForm.bind(this)}>ADD ATTRIBUTE</button>
            </div>
        );
    }
}
export default Posts;