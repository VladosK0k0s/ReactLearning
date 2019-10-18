import MessagesPage_reducer from './MessagesPage_reducer.js';
import PostsPage_reducer from './PostsPage_reducer.js';
import FriendsPage_reducer from './FriendsPage_reducer.js';
import SettingsPage_reducer from './SettingsPage_reducer.js'

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
			],
			inputvalue: ['']
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
	  	},
	  	SettingsPage:{
	  		slidervalue: (()=>{
	  			let d = new Date();
				return Math.floor(d.getHours()/3);
	  		})()
	  	}
	},
	getState(){
		return this._state;
	},
	makeSliderValue(){
		let d = new Date();
		this._state.SettingsPage.slidervalue = Math.floor(d.getHours()/3);
	},
	rerenderEntireTree(){
		console.log('State changed!');
	},
	subscribe(observer){
		this.rerenderEntireTree = observer;
	},
	dispatch(action){   //  {type: 'ADD-POST'}
		this._state.PostsPage = PostsPage_reducer(this._state.PostsPage, action);
		this._state.MessagesPage = MessagesPage_reducer(this._state.MessagesPage, action);
		this._state.FriendsPage = FriendsPage_reducer(this._state.FriendsPage, action);
		this._state.SettingsPage = SettingsPage_reducer(this._state.SettingsPage, action);
		this.rerenderEntireTree();
	}
}




window.storage = storage;

export default storage;

