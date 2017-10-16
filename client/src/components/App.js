import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Dashboard from './Dashboard';
import AddPage from './AddPage';

class App extends Component {
  render() {
    return (
		<div>
			<BrowserRouter>
				<div>
				<Route exact path='/' component={HomePage}/>
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/dashboard/add' component={AddPage} />
				</div>
			</BrowserRouter>
		</div>
    );
  }
}

export default App;
