import React from 'react';
import classes from './Header.module.css'

const Header = () =>{
   return(
		<div className={classes.logo}>
				<img  src="https://www.designevo.com/res/templates/thumb_small/brown-circle-and-chocolate-coffee.png" alt="Logo"/>
		</div>	
   );
}
export default Header;