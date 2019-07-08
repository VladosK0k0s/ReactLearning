
import React from 'react';
import classes from './Posts.module.css';
import Post from "./Post/Post.jsx"



const Posts = () =>{
   return(
		<div className={classes.items} >
			<div className={classes.text}>My Posts</div>
			<Post message="Hi?" ImgURL="https://amp.businessinsider.com/images/5cacd56cc6cc5056ef29b195-750-563.jpg" />
			<Post message='kkkkkk' ImgURL="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ed8K8CHYqSdZtT4EIjyFFcZqqqfTuABa7EZgEun6b5uhPese" />
			<Post message='Byyyyyeeeee' ImgURL="https://i.ytimg.com/vi/_c8xXjc4jPw/hqdefault.jpg" />
		</div>
	
   );
}
export default Posts;