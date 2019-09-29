import {rerenderEntireTree} from './../render.js';

let postsData = [
	{key: 3, id: 3, likesCNT: null, message: "Hi?", ImgURL: `https://amp.businessinsider.com/images/5cacd56cc6cc5056ef29b195-750-563.jpg`},
	{key: 2, id: 2, likesCNT: null, message: "kkkkkk", ImgURL: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ed8K8CHYqSdZtT4EIjyFFcZqqqfTuABa7EZgEun6b5uhPese`},
	{key: 1, id: 1, likesCNT: null, message: "Byyyyyeeeee", ImgURL: `https://i.ytimg.com/vi/_c8xXjc4jPw/hqdefault.jpg`}
];
let dialogsData = [
	{name: "Anton", id: 1},
	{name: 'Vlad', id: 2},
	{name: 'Vania', id: 3},
	{name: 'Petya', id: 4}
];
let messageData = [
	{text: "Hello world!", id: 1},
	{text: "Hello, VSause!", id: 2},
	{text: "jfjjfjf", id: 3},
	{text: "Jemes Koh", id: 4}
];
let FriendsData = [
	{id: 5, name: 'Vladik'},
	{id: 4, name: 'Vladik1'},
	{id: 3, name: 'Vladik2'},
	{id: 2, name: 'Vladik3'},
	{id: 1, name: 'Vladik4'}
];



export let addPost = (msg) =>{
	let newId = state.PostsPage.postsData + 1;
	let newPost = {
		id: newId, likesCNT: null, message: "Hi?", ImgURL: `https://amp.businessinsider.com/images/5cacd56cc6cc5056ef29b195-750-563.jpg`
	};
	state.PostsPage.postsData.unshift(newPost);
	rerenderEntireTree(state, addPost);
}

let MessagesPage = {
	dialogsData: dialogsData,
  	messageData: messageData
}
let PostsPage = {
	postsData: postsData,
	addPost: addPost
}
let FriendsPage = {
	FriendsData: FriendsData
}



let state = {	
	FriendsPage: FriendsPage,
	PostsPage: PostsPage,
  	MessagesPage: MessagesPage
};

export default state;