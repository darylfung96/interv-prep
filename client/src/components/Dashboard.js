import React, { Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './common';
import CompanyItem from './CompanyItem';
import { fetchUser, fetchCollections } from '../actions';
import { fontFamilyStyle } from '../styles/fontStyle';

class Dashboard extends Component {

	componentWillMount() {
		
	}


	render() {

		if (this.props._id === undefined) {
			return <Redirect to='/' />
		}

		return (
			<div>
			<Header />
			<br/><br/><br/>
			<h4 style={{ marginLeft: 15 }}>Interviews</h4>

			<div className='collection'>
			  <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}><span className='badge'>1</span>Wawanesa</a>
			  <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}><span className='new badge'>4</span>Norima</a>
			  <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}>24-7 InTouch</a>
			  <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}><span className='badge'>14</span>Amazon</a>
			</div>



			<div className='fixed-action-btn horizontal'>
    			<a className='btn-floating btn-large blue lighten-1'>
      				<i className='large material-icons'>mode_edit</i>
    			</a>
    			<ul>
      				<li><Link to='/dashboard/add' className='btn-floating red'><i className='material-icons'>add</i></Link></li>
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

export default connect(mapStateToProps, { fetchUser, fetchCollections })(Dashboard);
