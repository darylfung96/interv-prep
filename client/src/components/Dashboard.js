import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './common';
import { fetchUser } from '../actions';

class Dashboard extends Component {
	render() {

		if (this.props._id === undefined) {
			return <Redirect to="/" />
		}

		return (
			<div>
			<Header />
				<p>Logged In</p>
			</div>
		);
	}
}

const mapStateToProps = ({ FetchUser }) => {
	const { user } = FetchUser;
	return user;
};

export default connect(mapStateToProps, { fetchUser })(Dashboard);
