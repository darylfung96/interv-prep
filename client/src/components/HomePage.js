import React, { Component } from 'react';
import homepage from '../image/homepage.jpg';
import organize from '../image/organize.png';
import person from '../image/person.png';
import position from '../image/position.png';
import company from '../image/company.png';
import { headingStyle } from '../styles/headingStyle';
import { Card } from './common';

//lipsum
import { norm_lip, half_norm_lip } from '../lipsum/lipsum';

class HomePage extends Component {
	render() {
		return (
			<div style={{ marginBottom: 150 }}>
				<div style={styles.backImageStyle}>
					<div style={styles.darkOpacityStyle}>
						<p style={styles.paraWhiteStyle}>Preparation for your interview</p>
					</div>
				</div>


				<div className='container'>
					<hr className='blue darken-1' style={{ height: 2, width: 70, marginTop: 200, marginBottom: 200 }}/>

					<div className='row center' style={{ marginTop: 100, marginBottom: 100 }}>
						<a className='col s6'>insert icon here</a>
						<div className='col s6'>
						<h1 style={headingStyle.black}>Why use this website?</h1>
						<p style={{...styles.paraBlackStyle, color: '#4E4E4E', fontSize: 20}}>{norm_lip}</p>
						</div>
					</div>

					<hr className='blue darken-1' style={{ height: 2, width: 70, marginTop: 200, marginBottom: 200 }}/>

					<div className='row center'>
						<div className='col s3'>
						<img src={organize} />
						<h1 style={{...headingStyle.black, fontSize: 25 }}>Be a little bit more organized</h1>
						<p style={styles.paraBlackStyle}>{half_norm_lip}</p>
						</div>
						<div className='col s3'>
							<img src={company} />
							<h1 style={{...headingStyle.black, fontSize: 25 }}>Know which company you want</h1>
							<p style={styles.paraBlackStyle}>{half_norm_lip}</p>
						</div>
						<div className='col s3'>
						<img src={position} />
						<h1 style={{...headingStyle.black, fontSize: 25 }}>Know which position you want</h1>
						<p style={styles.paraBlackStyle}>{half_norm_lip}</p>
						</div>
						<div className='col s3'>
						<img src={person} />
						<h1 style={{...headingStyle.black, fontSize: 25 }}>Know who is stands out to you</h1>
						<p style={styles.paraBlackStyle}>{half_norm_lip}</p>
						</div>
					</div>

					<hr className='blue darken-1' style={{ height: 2, width: 70, marginTop: 200, marginBottom: 150 }}/>

				</div>

				<div className='container' style={styles.loginStyle}>
					<h1>Getting started?</h1>
					<p style={styles.paraBlackStyle}>There are a few ways you can get started. You can login to either one of these to get started.</p>
					<a href='/auth/google' className="waves-effect waves-light red lighten-1 btn" style={{ marginTop: 15 }}>Login with Google</a>
					<a href='/auth/facebook' className="waves-effect waves-light blue darken-3 btn" style={{ marginTop: 15 }}>Login with Facebook</a>
				</div>


			</div>
		);
	}
}

const styles = {
	paraWhiteStyle: {
		color: 'white',
		fontFamily: 'Roboto',
		fontSize: 50,
	},
	paraBlackStyle: {
		fontFamily: 'Robot',
		fontSize: 25,
	},
  	backImageStyle: {
		backgroundImage: `url(${homepage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		height: window.innerHeight,
		width: '100%',
	},
	darkOpacityStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',

		// align items
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginStyle: {
		marginTop: 30,
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center',

	}
}

export default HomePage;
