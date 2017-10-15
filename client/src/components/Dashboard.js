import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class Dashboard extends Component {
	render() {

		if (this.props._id === undefined) {
			return <Redirect to="/" />
		}

		return (
			<div>
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
