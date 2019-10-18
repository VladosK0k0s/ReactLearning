import React from 'react';
import {Helmet} from "react-helmet";

let url = null;

class MainBackground extends React.Component{
	render(){
		console.log(this.props.storage.getState().SettingsPage.slidervalue);
		switch (+this.props.storage.getState().SettingsPage.slidervalue) {
	  	case 0:
		  	url ='https://i.imgur.com/laSSeYN.png';
	  		break;
	  	case 1:
		  	url = 'https://i.imgur.com/HaYuGQi.png'
	  		break;
	  	case 2:
		  	url = 'https://i.imgur.com/NNoFNWf.png'
	  		break;
	  	case 3:
		  	url= 'https://i.imgur.com/VW2DYbL.png'
	  		break;
	  	case 4:
	  		url = 'https://i.imgur.com/UZKEjzG.png'
	  		break;
	  	case 5:
		  	url = 'https://i.imgur.com/6EhAM7G.png'
	  		break;
	  	case 6:
		  	url = 'https://i.imgur.com/QOfZ5r8.png'
	  		break;
	  	case 7:
		  	url = 'https://i.imgur.com/Y4BHWJM.png'
	  		break;
	  	default:
		  	url = 'https://i.imgur.com/axNNqyH.png'
	  		break;
	  }
		return (
			<Helmet>
			    <style type="text/css">{`
			    	body { background-image: url(${url}); transition: 1s }`}
			    </style>
			</Helmet>
		)
	}
}

export default MainBackground;