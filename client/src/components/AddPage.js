import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import { updateCompany, updatePosition, updateNotes, onAdd, resetInputs } from '../actions';
import { Header } from './common';
import '../css/input.css';

class AddPage extends Component {

	onAdd() {
		const { company, position, research, question, notes } = this.props;
		this.props.onAdd(company, position, research, question, notes);
	}

	componentWillMount() {
		this.props.resetInputs();
	}

	// <div className='input-field col s12'> <textarea onChange={ (text) => { this.props.updateResearch(text.target.value); }} id='textarea1' type='text' className='materialize-textarea'></textarea> <label htmlFor='textarea1'>Research</label> </div>
	// <div className='input-field col s12'> <textarea onChange={ (text) => { this.props.updateQuestion(text.target.value); }} id='textarea1' type='text' className='materialize-textarea'></textarea> <label htmlFor='textarea1'>Questions to ask</label> </div>

	render() {

		if(this.props.addSuccess) {
			this.props.resetInputs();
			notify.show('successfully added');
			return <Redirect to='/dashboard' />;
		}


		return(
			<div>
				<Header />
				<div className='container'>
				<br/><br/>

				<div style={{ marginBottom: 30 }}>
				<h5>Information form</h5>
				</div>

				<form className='col s12'>
					<div className='input-field col s12'> <input onChange={ (text) => { this.props.updateCompany(text.target.value); }} id='icon_prefix' type='text' className='validate'></input> <label htmlFor='icon_prefix'>Company</label> </div>
					<div className='input-field col s12'> <input onChange={ (text) => { this.props.updatePosition(text.target.value); }} id='icon_prefix' type='text' className='validate'></input> <label htmlFor='icon_prefix'>Job Position</label> </div>
					<div className='input-field col s12'> <textarea onChange={ (text) => { this.props.updateNotes(text.target.value); }} id='textarea1' type='text' className='materialize-textarea'></textarea> <label htmlFor='textarea1'>Notes</label> </div>
				</form>

				<a onClick={this.onAdd.bind(this)} style={{ marginBottom: 50 }} className="waves-effect waves-light btn blue right">add</a>
				</div>

			</div>
		);
	}
}

const mapStateToProps = ({ InputAddPage }) => {
	const { company, position, research, question, notes, addSuccess } = InputAddPage;
	return { company, position, research, question, notes, addSuccess };
};

export default connect(mapStateToProps, { updateCompany, updatePosition, updateNotes, onAdd, resetInputs })(AddPage);
