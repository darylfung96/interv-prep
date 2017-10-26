import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Notifications from 'react-notify-toast';

import HomePage from './HomePage';
import Dashboard from './Dashboard';
import AddPage from './AddPage';
import EditPage from './EditPage';

class App extends Component {
  render() {
    return (
		<div>
			<Notifications />
			<BrowserRouter>
				<div>
				<Route exact path='/' component={HomePage}/>
				<Route exact path='/dashboard' component={Dashboard} />
				<Route exact path='/dashboard/add' component={AddPage} />
				<Route exact path='/dashboard/edit' component={EditPage} />
				</div>
			</BrowserRouter>
		</div>
    );
  }
}

export default App;
