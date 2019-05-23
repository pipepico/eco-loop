import React, { Component } from 'react';
import AuthService from '../../services/auth';
import toastr from 'toastr';
import { Redirect } from 'react-router-dom';
import { Card, Row, Col, Icon, Form, Input, Button } from 'antd';

const service = new AuthService();

class SignupForm extends Component {
	state = {
		form: {
			name: '',
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
			.signup(this.state.form)
			.then((response) => {
				toastr.success('Successfuly created');
				window.localStorage.setItem('loggedUser', JSON.stringify(response.data));
				setTimeout(() => this.setState({ navigation: true }), 1500);
			})
			.catch((err) => ({ msg: 'Something went wrong, try again' }));
	};
	render() {
		const { getFieldDecorator } = this.props.form;
		if (this.state.navigation) {
			return <Redirect to={'/login'} />;
		}
		//  xs: 8, sm: 16, md: 24, lg: 32
		return (
			<div style={{ marginTop: '5px' }}>
				<Row type="flex" align="middle">
					<Col
					// xs={{ span: 8, offset: 2 }}
					// sm={{ span: 10, offset: 4 }}
					// md={{ span: 12, offset: 6 }}
					// lg={{ span: 14, offset: 9 }}
					>
						<Card title={<Icon type="user-add" />}>
							<Form onSubmit={this.handleSubmit}>
								<Form.Item label="Name">
									<Input size="large" placeholder="Name" name="name" prefix={<Icon type="smile" />} />
								</Form.Item>
								<Form.Item label="E-mail">
									{getFieldDecorator('email', {
										rules: [
											{
												type: 'email',
												message: 'The input is not valid E-mail'
											},
											{
												required: true,
												message: 'Please input your E-mail'
											}
										]
									})(
										<Input
											size="large"
											placeholder="Email"
											name="email"
											prefix={<Icon type="mail" />}
										/>
									)}
								</Form.Item>
								<Form.Item label="Password">
									{getFieldDecorator('password', {
										rules: [
											{
												required: true,
												message: 'Please input your password'
											}
										]
									})(
										<Input.Password
											size="large"
											type="password"
											name="password"
											placeholder="Password"
											prefix={<Icon type="lock" />}
										/>
									)}
								</Form.Item>
								<Form.Item>
									<Button type="primary" htmlType="submit" block className="login-form-button">
										Sign up
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}

const WrappedNormalSignupForm = Form.create({ name: 'normal_login' })(SignupForm);

export default WrappedNormalSignupForm;
