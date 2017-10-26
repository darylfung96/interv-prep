import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { updateResearch, addResearch } from '../actions';
import { Header } from './common/Header';

class EditPage extends Component {

	state = { modalState: false };

	componentWillMount() {

	}

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

				<div className='fixed-action-btn horizontal'>
	    			<a onClick={() => { this.setState({ modalState: !this.state.modalState}); }} className='btn-floating btn-large blue lighten-1'>
	      				<i className='large material-icons'>add</i>
	    			</a>
	  			</div>

				<Modal
				isOpen={this.state.modalState}
				style={customStyles}
				>
					<a href='#' onClick={() => { this.setState({ modalState: !this.state.modalState }); }} style={{ position: 'absolute', right: '10%'}}><i className='material-icons'>close</i></a>
					<h5 style={{ marginLeft: 30 }}>Add a Research</h5>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<form style={{ width: '70%', position: 'absolute', top: '30%'}} className='col s12'>
							<div className='input-field col s12'> <input onChange={ (text) => { this.props.updateResearch(text.target.value); }} id='icon_prefix' type='text' className='validate'></input> <label htmlFor='icon_prefix'>Research</label> </div>
						</form>
					</div>
					<div>
					<a style={{ position: 'absolute', right: '10%', bottom: '20%' }} className="waves-effect waves-light btn blue lighten-1">Add</a>
					</div>
				</Modal>


			</div>
		);
	}
}
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
	width				  : '80%',
	height				  : '80%',
    transform             : 'translate(-50%, -50%)'
},
	overlay: {
		backgroundColor   : 'rgba(0, 0, 0, 0.5)'
	},
};

const mapStateToProps = ({ EditPageReducer, InputEditPageReducer }) => {
	const { companyName, position } = EditPageReducer;
	const { research } = InputEditPageReducer;

	return { companyName, position, research };
};

export default connect(mapStateToProps, { updateResearch, addResearch })(EditPage);
