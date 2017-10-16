import React, { Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './common';
import { fetchUser } from '../actions';
import { fontFamilyStyle } from '../styles/fontStyle';

class Dashboard extends Component {
	render() {

		if (this.props._id === undefined) {
			return <Redirect to="/" />
		}

		return (
			<div>
			<Header />
			<br/><br/><br/>
			<h4 style={{ marginLeft: 15 }}>Interviews</h4>

			<div className="collection">
			  <a href="#!" className="collection-item blue-text text-darken-1" style={{ fontSize: 18 }}><span class="badge">1</span>Wawanesa</a>
			  <a href="#!" className="collection-item blue-text text-darken-1" style={{ fontSize: 18 }}><span class="new badge">4</span>Norima</a>
			  <a href="#!" className="collection-item blue-text text-darken-1" style={{ fontSize: 18 }}>24-7 InTouch</a>
			  <a href="#!" className="collection-item blue-text text-darken-1" style={{ fontSize: 18 }}><span class="badge">14</span>Amazon</a>
			</div>

			<div class="fixed-action-btn horizontal">
    			<a class="btn-floating btn-large blue lighten-1">
      				<i class="large material-icons">mode_edit</i>
    			</a>
    			<ul>
      				<li><a class="btn-floating red"><i class="material-icons">add</i></a></li>
    			</ul>
  			</div>

			</div>
		);
	}
}

const mapStateToProps = ({ FetchUser }) => {
	const { user } = FetchUser;
	return user;
};

export default connect(mapStateToProps, { fetchUser })(Dashboard);
