const UPDATE_SLIDER = 'UPDATE_SLIDER';
const SUBMIT_CLICK = 'SUBMIT_CLICK';

let initialState = {
	slidervalue: (()=>{
		let d = new Date();
	return Math.floor(d.getHours()/3);
	})()
}

const MessagePage_reducer = (state = initialState, action) => {
	switch(action.type){
		case UPDATE_SLIDER:{
			state.slidervalue = +action.value;
			return state;
		}
		case SUBMIT_CLICK:{
			let d = new Date();
			state.slidervalue = Math.floor(d.getHours()/3);
			return state;
		}
		default: 
			return state;
	}
}


export const SettingsSliderUpdate = (value) =>({type: UPDATE_SLIDER, value: value});
export const SettingsSubmitClick = () =>({type: SUBMIT_CLICK});

export default MessagePage_reducer;