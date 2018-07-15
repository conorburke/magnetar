import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Profile from './components/Profile';
import Tools from './components/Tools';
import theme from './theme';

class App extends Component {
	render() {
		return (
			<div style={{ backgroundColor: theme.palette.mobile.secondary }}>
				<BrowserRouter>
					<div style={{ height: '100vh' }}>
						<Header />
						<Route exact path="/" component={Landing} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/tools" component={Tools} />
						<Footer />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
