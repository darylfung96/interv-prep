import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../css/collection.css';

class CompanyItem extends Component {

	state = { shouldExpand: false };

	expandContent(companyName) {
		if(this.state.shouldExpand) {
			const positions = this.props.company[companyName];
			const listItem = positions.map((position) => {
				return <li key={position} style={{ padding: 15, fontFamily: 'Roboto' }} className='collection-item'>{position[0]}<a href='#!' style={{ float: 'right', marginRight: 20 }} ><i className='material-icons'>edit</i></a></li>
			});
			return(

				<ul className='collection'>
					{listItem}
				</ul>
			);
		}
	}

	render() {
		const companyName = Object.keys(this.props.company)[0];
		return (
			<div>
			<CSSTransitionGroup
			transitionName='example'
			transitionEnterTimeout={500}
			transitionLeaveTimeout={300}
			>
			<a onClick={() => {this.setState({ shouldExpand: !this.state.shouldExpand })}} className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}><span className='badge'>1</span>{companyName}</a>
			{this.expandContent(companyName)}
			</CSSTransitionGroup>

			</div>
		);
	}
}

export default CompanyItem;
