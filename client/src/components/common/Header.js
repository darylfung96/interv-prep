import React, { Component } from 'react';
import { fontFamilyStyle } from '../../styles/fontStyle';

class Header extends Component  {

	state = { dropdown: false };

	renderDropdown() {
		if (!this.state.dropdown) return;

		return (
				<ul style={styles.dropDownShadow}>
				<li style={styles.dropDownShadow}><a className='blue-text text-lighten-2' style={{...fontFamilyStyle, fontSize: 15 }} href='/api/logout'>Logout</a></li>
				</ul>

		);
	}

	setDropdown() {
		this.setState({ dropdown: !this.state.dropdown });
	}

	render() {

		const isActivated = (!this.state.dropdown) ? 'blue lighten-1': 'blue darken-1';

		return (
				<div>
				<nav>
				<div className='nav-wrapper blue lighten-1'>
					<a className='brand-logo left' style={{ marginLeft: 15 }}>Inter-Prep</a>
					<ul className='right'>
						<li style={{marginRight: 20, }} className='dropdown-button' data-activates='dropdown1'>
							<a className={isActivated} onClick={this.setDropdown.bind(this)} style={{ overflow: 'hidden' }} ><i className="material-icons right">more_vert</i></a>
							{this.renderDropdown()}
						</li>

					</ul>
				</div>
				</nav>

				</div>
		);
	}
}


const styles = {
	dropDownShadow: {
		boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.23)',
	}
};

export { Header };
