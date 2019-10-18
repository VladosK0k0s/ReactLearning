const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const MessagesPage_reducer = (state = initialState, action)=>{
	switch(action.type){
		case UPDATE_MESSAGE_INPUT:{
			state.inputvalue[0] = action.text;
			return state;
		}
		case SEND_MESSAGE:{
			if(action.id != 0){
				state.dialogsData[action.id-1].messages.push({
					text: state.inputvalue[0],
					id: state.dialogsData[action.id-1].messages.length + 1
				})
			}
			return state;
		}
		default: 
			return state;
	}
}


export const MessageSendActionCreator = (id) =>({type: SEND_MESSAGE, id: id});
export const MessageUpdateInputActionCreator = (text) =>({type: UPDATE_MESSAGE_INPUT, text: text});

export default MessagesPage_reducer;