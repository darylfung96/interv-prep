import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Card extends Component {

	state = { show: false };

	onCloseModal() {
		this.setState({ show: false });
	}

	render() {
		return (
			<div>
				<div onClick={ ()=>{ this.setState({ show: true }) } } className='col s6 m3'>
					<div className='card hover-card' style={{...cardStyle}}>
						<div className='card-content truncate'>
							<p style={{ display: 'block', }} >{this.props.singleResearch}</p>
						</div>
					</div>
				</div>

				<Modal
				open={this.state.show}
				little
				showCloseIcon={false}
				onClose={this.onCloseModal.bind(this)}
				modalStyle={borderStyle}
				>
					<p style={{ padding: 20 }}>{this.props.singleResearch}</p>
				</Modal>

			</div>
		);
	}
}

const cardStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	padding: 20,
	marginLeft: 15,
	borderRadius: 15,
};

const borderStyle = {
	borderRadius: 15
}

export { Card };
