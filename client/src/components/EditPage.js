import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { updateResearch, addResearch, resetResearch, retrieveResearch } from '../actions';
import { Header, Card } from './common';


import '../css/breadcrumb.css';
import '../css/EditPage/hover-card.css';

class EditPage extends Component {

	state = { modalState: false };

	componentDidMount() {
		this.props.retrieveResearch(this.props.companyName, this.props.position);
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
	}

	onClickAdd() {
		this.setState({ modalState: !this.state.modalState});
		this.props.resetResearch();
	}

	addResearch() {
		this.props.addResearch(this.props.researchInput, this.props.companyName, this.props.position);
	}

	renderCardItems() {
		const { research } = this.props;

		if(research === undefined || research.length === 0) return (
			<div className='container center'>
				<p style={{ fontFamily: 'Roboto', fontSize: 20, color: '#888' }}> No results found.</p>
				<p style={{ fontFamily: 'Roboto', fontSize: 20, color: '#888' }}> You can start by adding researches.</p>
			</div>
		);


		const researches = research.map(singleResearch => {
			return (
				<Card singleResearch={singleResearch} />
			);
		});

		return researches;
	}


	render() {

		return(
			<div>
				<Header />
				<br/>


				<nav style={{ backgroundColor: '#FFF', boxShadow: 'none' }}>
				    	<div style={{ marginLeft: 20 }} className="col s12">
				        	<a className="breadcrumb blue-text text-lighten 1">{this.props.companyName}</a>
				        	<a className="breadcrumb blue-text text-lighten 1">{this.props.position}</a>
				    	</div>
			  	</nav>


				<div className='container center row'>
					{ this.renderCardItems() }
				</div>

				<div className='fixed-action-btn horizontal'>
	    			<a onClick={this.onClickAdd.bind(this)} className='btn-floating btn-large blue lighten-1'>
	      				<i className='large material-icons'>add</i>
	    			</a>
	  			</div>



				<Modal
				isOpen={this.state.modalState}
				style={customStyles}
				>
					<a href='#' onClick={() => { this.setState({ modalState: !this.state.modalState }); }} style={{ position: 'absolute', right: '10%'}}><i style={{ color: 'black', marginTop: 10 }} className='material-icons'>close</i></a>
					<h5 style={{ marginLeft: 30 }}>Add a Research</h5>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<form style={{ width: '70%', position: 'absolute', top: '30%'}} className='col s12'>
							<div className='input-field col s12'> <input onChange={ (text) => { this.props.updateResearch(text.target.value); }} id='icon_prefix' type='text' className='validate'></input> <label htmlFor='icon_prefix'>Research</label> </div>
						</form>
					</div>
					<div>
					<a onClick={this.addResearch.bind(this)} style={{ position: 'absolute', right: '10%', bottom: '20%' }} className="waves-effect waves-light btn blue lighten-1">Add</a>
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

const cardStyle = {
	display: 'flex',
	alignItems: 'center',
	marginLeft: 15,
};


const mapStateToProps = ({ EditPageReducer, InputEditPageReducer }) => {
	const { companyName, position, research } = EditPageReducer;
	const { researchInput } = InputEditPageReducer;

	return { companyName, position, research, researchInput };
};

export default connect(mapStateToProps, { updateResearch, addResearch, resetResearch, retrieveResearch })(EditPage);
