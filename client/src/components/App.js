import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
		<div>
			<BrowserRouter>
				<div>
				<Route exact path='/' component={HomePage}/>
				<Route exact path='/dashboard' component={Dashboard} />
				</div>
			</BrowserRouter>
		</div>
    );
  }
}

export default App;
