import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer';
import Client from './components/Client/Client';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" render={() => <Client />} />
					<Route path="/services" render={() => <Services />} />
					<Route path="/team" render={() => <Team />} />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
