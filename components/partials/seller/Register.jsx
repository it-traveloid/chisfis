import React, { Component } from 'react';
import Link from 'next/link';
import Router from 'next/router';
// import { login } from '../../../store/auth/action';
import zxcvbn from 'zxcvbn';

import { Form } from 'antd';
import { connect } from 'react-redux';
import FormRegister from '@/components/partials/seller/FormRegister';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numberForm: 0,
			values: {}
		};
	}
	onFinish = async (values) => {
		let allValues = this.state.values
		allValues = Object.assign(allValues, values);
		// allValues.push(values)
		console.log(values)
		console.log(allValues)
		this.setState({
			values: allValues
		})
		if (allValues.password.length < 6) {
			alert("Длина пароля должна быть больше 6 символов!")
			return
		}
		if (allValues.password != allValues.passwordconfirm) {
			alert("Пароль и подтверждение пароля не совпадают!")
			return
		}
		allValues.roles = "Продавец"

		const feedback = zxcvbn(allValues.password).feedback.suggestions
		// console.log('Success:', values);
		console.log('pass:', feedback);
		if (feedback.length > 0) {
			alert("Пароль недостаточно сложный!")
			return
		}
		this.setState({
			numberForm: this.state.numberForm + 1
		})
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(allValues),
		}
		if (this.state.numberForm == 3) {
			const response = await fetch('/api/register', options);
			const json = await response.json();
			alert(json.data)
		}
		//.then((data)) => { alert(data.data) }
	};

	/*  handleSubmit = (values) => {
		 console.log(values)
		 console.log(5)
		 this.setState({
			 numberForm: this.state.numberForm + 1
		 })
	 	
		 console.log(this.state.numberForm)
		 // this.props.form.validateFields((err, values) => {
		 //     if (!err) {
		 //         console.log(5)
		 //         this.props.dispatch(login());
		 //         //Router.push('/account/login');
		 //     } else {
	 	
		 //     }
		 // });
	 }; */

	render() {
		return (
			<div className="ps-my-account">
				<div className="container">
					<Form
						className={'ps-form--account' + (this.state.numberForm === 1 ? ' _scheme' : '')}
						onFinish={this.onFinish}>
						<div className="ps-tab active" id="register">
							<div className="ps-form__content">
								<h5>Регистрация продавца</h5>
								<FormRegister numberForm={this.state.numberForm}></FormRegister>
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
