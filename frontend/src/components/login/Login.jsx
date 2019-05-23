import React, { Component } from 'react';
import AuthService from '../../services/auth';
import toastr from 'toastr';
import { withRouter } from 'react-router-dom';
import { Row, Col, Card, Form, Input, Icon, Button } from 'antd';

const service = new AuthService();

class LoginForm extends Component {
	state = {
		form: {
			email: '',
			password: ''
		},
		navigation: false
	};
	handleInput = (evt) => {
		const { form } = this.state;
		form[evt.target.name] = evt.target.value;
		this.setState(form);
	};

	handleSubmit = (evt) => {
		evt.preventDefault();
		service
			.login(this.state.form)
			.then((res) => {
				if (res.err) return toastr.error(res.err);
				window.localStorage.setItem('loggedUser', JSON.stringify(res.data));
				toastr.success('Login successfuly');
				this.props.history.push('/profile');
			})
			.catch((err) => ({ msg: 'Something went wrong :(' }));
	};
	render() {
		return (
			<Row type="flex" align="middle">
				<Col xs={{ span: 11, offset: 11 }} lg={{ span: 6, offset: 9 }}>
					<Card title={<Icon type="user" />}>
						<Form className="login-form">
							<Form.Item>
								<Input
									size="large"
									type="email"
									name="email"
									prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
									placeholder="Email"
									onChange={this.handleInput}
								/>
							</Form.Item>
							<Form.Item>
								<Input.Password
									size="large"
									placeholder="Password"
									type="password"
									name="password"
									onChange={this.handleInput}
									prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
								/>
							</Form.Item>

							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									className="login-form-button"
									block
									onClick={this.handleSubmit}
								>
									Log in
								</Button>
								Or <a href="/signup">register now!</a>
							</Form.Item>
						</Form>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default LoginForm;
