import React from 'react';
import classes from './Settings.module.css';
import {SettingsSliderUpdate, SettingsSubmitClick} from './../../../redux/SettingsPage_reducer'


class Settings extends React.Component{
	handleInputChange(event){
		this.props.storage.dispatch(SettingsSliderUpdate(event.target.value))
	}
	handleSubmit(){
		this.props.storage.dispatch(SettingsSubmitClick());
	}
	render(){
	    return(
			<div className={classes.items} >	
				<div className={classes.text}>Settings</div>
				<input 
					type="range"
					title="Slide to change background"
					min="0" 
					max="7" 
					step="1" 
					value = {this.props.storage.getState().SettingsPage.slidervalue}
					onChange = {this.handleInputChange.bind(this)}
				/>
				<input
					type="submit"
					title="Click to set current time background"
					value="Refresh"
					onClick={this.handleSubmit.bind(this)} 
				/>
			</div>
	    );
	}
}
export default Settings;