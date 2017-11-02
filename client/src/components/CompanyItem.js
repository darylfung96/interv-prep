import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';

import { goEdit } from '../actions';
import '../css/collection.css';

class CompanyItem extends Component {

	state = { shouldExpand: false, showDeleteModal: false };

	expandContent(companyName) {
		if(this.state.shouldExpand) {
			const positions = this.props.company[companyName];

			const listItem = Object.keys(positions).map(position => {
				return (
					<li key={position} style={{ padding: 15, fontFamily: 'Roboto' }}
					className='collection-item'>
					{position}
						<a href='#' style={{...iconStyle, color: '#e57373'}} onClick={() => { this.setState({ showDeleteModal: true })}}><i className='material-icons'>delete</i></a>
						<Link to='dashboard/edit'
						onClick={ () => { this.props.goEdit(companyName, position); } }
						style={iconStyle} >
							<i className='material-icons'>edit</i>
						</Link>

						<Modal
						open={this.state.showDeleteModal}
						little
						showCloseIcon={false}
						onClose={() => { this.setState({ showDeleteModal: false })}}
						modalStyle={borderStyle}
						>
							<p style={{ padding: 20 }}>Are you sure you want to delete?</p>
								<a style={{ marginRight: 15, borderColor: 'blue', borderRadius: 2 }} className="waves-effect waves-light btn-flat">Cancel</a>
								<a className="waves-effect waves-light btn-flat">Delete</a>
						</Modal>
					</li>
				);
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

const iconStyle = { float: 'right', marginRight: 20};
const borderStyle = {
	borderRadius: 15
};

export default connect(null, { goEdit })(CompanyItem);
