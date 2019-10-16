const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';
const ADD_POST = 'ADD_POST';
const UPDATE_DISLIKE = 'UPDATE_DISLIKE';
const UPDATE_LIKE = 'UPDATE_LIKE';


const PostsPage_reducer = (state, action)=>{
	switch(action.type){
		case ADD_POST:{
			let postsData = state.postsData;
			postsData.unshift({
				key: postsData.length + 1,
				id: postsData.length + 1,
				likesCNT: [0,0],
				message: state.inputvalue[0],
				ImgURL: `https://picsum.photos/200/30${Math.floor(Math.random()*10)}/`
			});
			return state;
		}
		case UPDATE_POST_INPUT:{
			state.inputvalue[0] = action.text;
			return state;
		}
		case UPDATE_LIKE:{
			let postsData = state.postsData;
			let k = postsData.length - action.id; // post position in array 
			if(postsData[k]){
				postsData[k].likesCNT[0]++;
			}
			else console.log('Error, post doesn`t exist');
			return state;
		}
		case UPDATE_DISLIKE:{
			let postsData = state.postsData;
			let k = postsData.length - action.id; // post position in array 
			if(postsData[k]){
				postsData[k].likesCNT[1]++;
			}
			else console.log('Error, post doesn`t exist');
		}
		default:
			return state;
	}
}




export const PostUpdateInputActionCreator = (text) =>({type: UPDATE_POST_INPUT, text: text});
export const PostAddActionCreator = () =>({type: ADD_POST});
export const PostUpdateLikeActionCreator = (id) => ({type: UPDATE_LIKE, id: id});
export const PostUpdateDisLikeActionCreator = (id) =>({type: UPDATE_DISLIKE, id: id});


export default PostsPage_reducer;