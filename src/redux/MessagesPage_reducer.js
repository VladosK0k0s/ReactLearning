const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';
const SEND_MESSAGE = 'SEND_MESSAGE';



const MessagesPage_reducer = (state, action)=>{
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