import React, { Component } from 'react';
import { Header } from './common';

import '../css/input.css';

class AddPage extends Component {

	render() {
		return(
			<div>
				<Header />
				<div className='container'>
				<br/><br/>

				<div style={{ marginBottom: 30 }}>
				<h5>Information form</h5>
				</div>

				<form className='col s12'>
					<div className='input-field col s12'> <input id='icon_prefix' type='text' className='validate'></input> <label for='icon_prefix'>Company</label> </div>
					<div className='input-field col s12'> <input id='icon_prefix' type='text' className='validate'></input> <label for='icon_prefix'>Job Position</label> </div>
					<div className='input-field col s12'> <textarea id='textarea1' type='text' className='materialize-textarea'></textarea> <label for='textarea1'>Research</label> </div>
					<div className='input-field col s12'> <textarea id='textarea1' type='text' className='materialize-textarea'></textarea> <label for='textarea1'>Questions to ask</label> </div>
					<div className='input-field col s12'> <textarea id='textarea1' type='text' className='materialize-textarea'></textarea> <label for='textarea1'>Notes</label> </div>
				</form>

				<a style={{ marginBottom: 50 }} className="waves-effect waves-light btn blue right">add</a>
				</div>

			</div>
		);
	}
}

export default AddPage;
