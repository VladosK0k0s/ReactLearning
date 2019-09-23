let postsData = [
	{key: 3, id: 3, message: "Hi?", ImgURL: `https://amp.businessinsider.com/images/5cacd56cc6cc5056ef29b195-750-563.jpg`},
	{key: 2, id: 2, message: "kkkkkk", ImgURL: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Ed8K8CHYqSdZtT4EIjyFFcZqqqfTuABa7EZgEun6b5uhPese`},
	{key: 1, id: 1, message: "Byyyyyeeeee", ImgURL: `https://i.ytimg.com/vi/_c8xXjc4jPw/hqdefault.jpg`}
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
let state = {	dialogsData: dialogsData,
  				messageData: messageData,
  				postsData: postsData
};

export default state;