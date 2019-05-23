import React, { Component } from 'react';
import { Menu, Icon, Col } from 'antd';
import { Link } from 'react-router-dom';

class MainMenu extends Component {
	state = {
		current: 'home',
		user: ''
	};
	handleClick = (e) => {
		this.setState({
			current: e.key
		});
	};

	componentDidMount() {
		const user = localStorage.getItem('user');
		this.setState({ user: user });
	}
	render() {
		return (
			<Menu size="small" onClick={this.handleClick} theme="dark" mode="horizontal">
				<Menu.Item key="home">
					<Link to="/">
						<Icon type="home" />
					</Link>
				</Menu.Item>

				{!this.state.user && (
					<Menu.Item>
						<Link to="/register">
							<Icon type="user" />Register
						</Link>
					</Menu.Item>
				)}
				{this.state.user && (
					<Menu.Item>
						<Link to="/profile">
							<Icon type="user" />Profile
						</Link>
					</Menu.Item>
				)}
			</Menu>
		);
	}
}

export default MainMenu;
