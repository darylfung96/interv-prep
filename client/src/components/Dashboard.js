import React, { Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './common';
import CompanyItem from './CompanyItem';
import { fetchUser, fetchCollections } from '../actions';
import { fontFamilyStyle } from '../styles/fontStyle';

class Dashboard extends Component {

	componentDidMount() {
		this.props.fetchCollections();
	}


	renderCollection() {
		const { userInfo } = this.props;

		if(userInfo === undefined) {
			return (
				<div className='container center'>
					<p style={{ fontFamily: 'Roboto', fontSize: 20, color: '#888' }}> No results found.</p>
					<p style={{ fontFamily: 'Roboto', fontSize: 20, color: '#888' }}> You can start by adding companies.</p>
				</div>
			);
		}


		const companies = Object.keys(userInfo).map((key)=>{
			const company = { [key]: userInfo[key] };
			return <CompanyItem key={key} company={company} />;
		});
		return (
			<div className='collection'>
			<h4 style={{ marginLeft: 15 }}>Interviews</h4>
			{companies}
			</div>
		);
	}


/* Hardcoded collections */
	// <div className='collection'>
	//   <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}><span className='badge'>1</span>Wawanesa</a>
	//   <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}><span className='new badge'>4</span>Norima</a>
	//   <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}>24-7 InTouch</a>
	//   <a href='#!' className='collection-item blue-text text-darken-1' style={{ fontSize: 18, padding: 20 }}><span className='badge'>14</span>Amazon</a>
	// </div>

	render() {
		if (this.props.user === '') {
			return <Redirect to='/' />
		}
		this.renderCollection();

		return (
			<div>
			<Header />
			<br/><br/><br/>

			{ this.renderCollection() }


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

const mapStateToProps = ({ FetchUser, DashCollectReducer }) => {
	const { user } = FetchUser;
	const { userInfo } = DashCollectReducer;
	return { user, userInfo };
};

export default connect(mapStateToProps, { fetchUser, fetchCollections })(Dashboard);
