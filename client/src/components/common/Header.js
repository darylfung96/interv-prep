import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<ul id='settings-drop' className='dropdown-content'>
				<li><a href='#!'>Logout</a></li>
			</ul>

			<nav className='nav-wrapper'>
				<a className='brand-logo'>Inter-Prep</a>
				<ul calssName='right'>
					<li><a href='#!' className='dropdown-button' data-activates='settings-drop'><i className='material-icons'>more_vert</i></a></li>
				</ul>
			</nav>
		);
	}
}

export default Header;
