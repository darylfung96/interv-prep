import React, { Component } from 'react';
import Modal from 'react-modal';

class Card extends Component {

	state = { show: false };

	render() {
		return (
			<div>
				<div onClick={ ()=>{ this.setState({ show: !this.state.show }) } } className='col s6 m3'>
					<div className='card hover-card' style={{...cardStyle}}>
						<div className='card-content truncate'>
							<p style={{ display: 'block', }} >{this.props.singleResearch}</p>
						</div>
					</div>
				</div>

				<Modal
				isOpen={this.state.show}
				style={customStyles}
				>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
							<p style={{ textAlign: 'center' }}>{this.props.singleResearch}</p>
					</div>
					<a href="#" style={{ position: 'absolute', right: 0, marginRight: 20 }} onClick={() => {this.setState({ show: !this.state.show})}}><i style={{ color: 'black', marginTop: 10 }} className='material-icons'>close</i></a>
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
};

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
	width				  : '35%',
	height				  : '35%',
    transform             : 'translate(-50%, -50%)',
},
	overlay: {
		backgroundColor   : 'rgba(0, 0, 0, 0.5)'
	},
};


export { Card };
