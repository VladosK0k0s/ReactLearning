const UPDATE_DISLIKE = 'UPDATE_DISLIKE';
const UPDATE_LIKE = 'UPDATE_LIKE';
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';
const ADD_POST = 'ADD_POST';


let storage = {
	_state: {
		MessagesPage: {
			dialogsData : [
				{	name: "Anton", 
					id: 1, 
					messages: [
						{text: "Hello world!111111111111111111111", id: 1},
						{text: "Hello, VSause!", id: 2},
						{text: "jfjjfjf", id: 3},
						{text: "Jemes Koh", id: 4}
					]
				},
				{	name: 'Vlad', 
					id: 2,
					messages: []
				},
				{	name: 'Vania', 
					id: 3,
					messages: []
				},
				{	name: 'Petya', 
					id: 4,
					messages: []
				}
			]
		},
		PostsPage: {
			postsData: [
				{key: 3, id: 3, likesCNT: [0,0], message: "Hi?", ImgURL: `https://amp.businessinsider.com/images/5cacd56cc6cc5056ef29b195-750-563.jpg`},
				{key: 2, id: 2, likesCNT: [0,0], message: "kkkkkk", ImgURL: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ed8K8CHYqSdZtT4EIjyFFcZqqqfTuABa7EZgEun6b5uhPese`},
				{key: 1, id: 1, likesCNT: [0,0], message: "Byyyyyeeeee", ImgURL: `https://i.ytimg.com/vi/_c8xXjc4jPw/hqdefault.jpg`}
			],
			inputvalue: ['']
		},
	  	FriendsPage: {
	  		FriendsData: [
				{id: 5, name: 'Vladik'},
				{id: 4, name: 'Vladik1'},
				{id: 3, name: 'Vladik2'},
				{id: 2, name: 'Vladik3'},
				{id: 1, name: 'Vladik4'}
			]
	  	}
	},
	getState(){
		return this._state;
	},
	rerenderEntireTree(){
		console.log('State changed!');
	},
	subscribe(observer){
		this.rerenderEntireTree = observer;
	},
	dispatch(action){   //  {type: 'ADD-POST'}
		if(action.type === 'ADD_POST'){
			let postsData = this._state.PostsPage.postsData;
			postsData.unshift({
				key: postsData.length + 1,
				id: postsData.length + 1,
				likesCNT: [0,0],
				message: this._state.PostsPage.inputvalue[0],
				ImgURL: `https://picsum.photos/200/30${Math.floor(Math.random()*10)}/`
			});
			this.rerenderEntireTree();
		}
		else if(action.type === 'UPDATE_POST_INPUT'){
			this._state.PostsPage.inputvalue[0] = action.text;
			this.rerenderEntireTree();
		}
		else if(action.type === 'UPDATE_LIKE'){
			let postsData = this._state.PostsPage.postsData;
			let k = postsData.length - action.id; // post position in array 
			if(postsData[k]){
				postsData[k].likesCNT[0]++;
			}
			else console.log('Error, post doesn`t exist');
			this.rerenderEntireTree();
		}
		else if(action.type === 'UPDATE_DISLIKE'){
			let postsData = this._state.PostsPage.postsData;
			let k = postsData.length - action.id; // post position in array 
			if(postsData[k]){
				postsData[k].likesCNT[1]++;
			}
			else console.log('Error, post doesn`t exist');
			this.rerenderEntireTree();
		}
	}
}

export const UpdatePostInputActionCreator = (text) =>({type: UPDATE_POST_INPUT, text: text});
export const AddPostActionCreator = () =>({type: ADD_POST});
export const UpdateLikeActionCreator = (id) => ({type: UPDATE_LIKE, id: id});
export const UpdateDisLikeActionCreator = (id) =>({type: UPDATE_DISLIKE, id: id});


window.storage = storage;

export default storage;

