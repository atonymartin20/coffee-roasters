import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './homepage';
import About from './about';
import Subscribe from './subscribe';

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path='/'>
						<Homepage />
					</Route>
					<Route path='about'>
						<About />
					</Route>
					<Route path='plan'>
						<Subscribe />
					</Route>
					<Route>
						<Homepage />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;