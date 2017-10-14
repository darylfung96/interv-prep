import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';

class App extends Component {
  render() {
    return (
		<div>
			<BrowserRouter>
				<div>
				<Route exact path='/' component={HomePage}/>
				<Route exact path='/user/*' component={LoginPage} />
				</div>
			</BrowserRouter>
		</div>
    );
  }
}

export default App;
