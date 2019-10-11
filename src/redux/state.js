import {rerenderEntireTree} from './../render.js';

let postsData = [
	{key: 3, id: 3, likesCNT: [0,0], message: "Hi?", ImgURL: `https://amp.businessinsider.com/images/5cacd56cc6cc5056ef29b195-750-563.jpg`},
	{key: 2, id: 2, likesCNT: [0,0], message: "kkkkkk", ImgURL: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ed8K8CHYqSdZtT4EIjyFFcZqqqfTuABa7EZgEun6b5uhPese`},
	{key: 1, id: 1, likesCNT: [0,0], message: "Byyyyyeeeee", ImgURL: `https://i.ytimg.com/vi/_c8xXjc4jPw/hqdefault.jpg`}
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


let AddPost = (data) =>{
	postsData.unshift({
		key: postsData.length + 1,
		id: postsData.length + 1,
		likesCNT: [0,0],
		message: data.message,
		ImgURL: data.ImgURL
	});
	rerenderEntireTree(state, PostChangeHandler);
}
let UpdateInput = (text) =>{
	state.PostsPage.inputvalue[0] = text;
	rerenderEntireTree(state, PostChangeHandler);
}

export let PostChangeHandler = [
	AddPost,
	UpdateInput
]

let MessagesPage = {
	dialogsData: dialogsData,
  	messageData: messageData
}
let PostsPage = {
	postsData: postsData,
	inputvalue: [''],
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