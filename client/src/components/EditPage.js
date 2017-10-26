import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Header } from './common/Header';

class EditPage extends Component {
	render() {
		return(
			<div>
				<Header />
				<br/><br/><br/>

				<p style={{ marginLeft: 15, fontSize: 20 }}>{this.props.companyName}</p>
				<p style={{ marginLeft: 15, fontSize: 18 }}>{this.props.position[0]}</p>

				<div className='row container'>
					<div className='col s4 m3'>
						<div className='card' style={{ display: 'flex', alignItems: 'center', marginLeft: 15 }}>
							<div className='card-content'>
								<p style={{ display: 'block', }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ EditPageReducer }) => {
	const { companyName, position } = EditPageReducer;
	return { companyName, position };
};

export default connect(mapStateToProps, null)(EditPage);
