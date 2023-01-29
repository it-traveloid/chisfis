import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import zxcvbn from 'zxcvbn';
import { Form, Input } from 'antd';
import { connect } from 'react-redux';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	async onFinish(values) {
		if (values.password.length < 6) {
			alert("Длина пароля должна быть больше 6 символов!")
			return
		}
		if (values.password != values.passwordconfirm) {
			alert("Пароль и подтверждение пароля не совпадают!")
			return
		}
		values.roles = "Покупатель"

		const feedback = zxcvbn(values.password).feedback.suggestions
		// console.log('Success:', values);
		console.log('pass:', feedback);
		if (feedback.length > 0) {
			alert("Пароль недостаточно сложный!")
			return
		}
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		}

		const response = await fetch('/api/register', options);
		const json = await response.json();
		alert(json.data)
		//.then((data)) => { alert(data.data) }
	};


	render() {
		return (
			<div className="ps-my-account">
				<div className="container">
					<Form
						className="ps-form--account"

						onFinish={this.onFinish}
					>
						<ul className="ps-tab-list">
							<li>
								<Link href="/account/login">
									<a>Войти</a>
								</Link>
							</li>
							<li className="active">
								<Link href="/account/register">
									<a>Регистрация</a>
								</Link>
							</li>
						</ul>
						<div className="ps-tab active" id="register">
							<div className="ps-form__content">
								<h5>Зарегистрироваться</h5>
								<div className="form-group">
									<Form.Item
										name="username"
										rules={[
											{
												required: true,
												message:
													'Пожалуйста, введите ваше имя',
											},
										]}>
										<Input
											className="form-control"
											type="text"
											placeholder="Имя..."
										/>
									</Form.Item>
								</div>
								<div className="form-group">
									<Form.Item
										name="surname"
										rules={[
											{
												required: true,
												message:
													'Пожалуйста, введите вашу фамилию',
											},
										]}>
										<Input
											className="form-control"
											type="text"
											placeholder="Фамилия..."
										/>
									</Form.Item>
								</div>
								<div className="form-group">
									<Form.Item
										name="email"
										rules={[
											{
												required: true,
												message:
													'Пожалуйста, введите почту',
											},
										]}>
										<Input
											className="form-control"
											type="email"
											placeholder="Email адрес..."
										/>
									</Form.Item>
								</div>
								<div className="form-group">
									<Form.Item
										name="phone"
										rules={[
											{
												required: true,
												message:
													'Пожалуйста, введите номер телефона',
											},
										]}>
										<Input
											className="form-control"
											type="tel"
											placeholder="Ваш номер телефона..."
										/>
									</Form.Item>
								</div>


								<div className="form-group form-forgot">
									<Form.Item
										name="password"
										rules={[
											{
												required: true,
												message:
													'Пожалуйста, введите пароль',
											},
										]}>
										<Input
											className="form-control"
											type="password"
											placeholder="Пароль..."
										/></Form.Item>
									<Form.Item
										name="passwordconfirm"
										rules={[
											{
												required: true,
												message:
													'Пожалуйста, введите подтверждение пароля',
											},
										]}>
										<Input
											className="form-control"
											type="password"
											placeholder="Подтверждение пароля..."
										/>
									</Form.Item>
								</div>
								<div className="form-group">
									<Link href="/seller/register">Стать продавцом</Link>
								</div>
								<div className="form-group submit">
									<button
										type="submit"
										className="ps-btn ps-btn--fullwidth">
										Регистрация
									</button>
								</div>
								<br />
							</div>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return state.auth;
};
export default connect(mapStateToProps)(Register);
