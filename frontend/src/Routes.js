import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Profile from './components/profile/Profile';
import Plans from './components/info/Plans';
import Info from './components/info/Info';

const Routes = () => (
	<div>
		<Switch>
			<Route exact path={'/'} component={Home} />
			<Route exact path={'/login'} component={Login} />
			<Route exact path={'/register'} component={Signup} />
			<Route exact path={'/profile'} component={Profile} />
			<Route exact path={'/plans'} component={Plans} />
			<Route exact path={'/info'} component={Info} />
			<Route component={() => <p>404 Not Found</p>} />
		</Switch>
	</div>
);

export default Routes;
