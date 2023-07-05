import React, { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useSession, signIn } from "next-auth/react"
import { Form, Input } from 'antd';
// import { useCheckSession } from '@/hooks/useCheckSession';
import {useRouter} from 'next/router';

const Login = ({ error }) => {
    const router=useRouter()
	// const { checkAuthPage } = useCheckSession();
	const { data: session } = useSession();

	const onFinish = values => {
		signIn("credentials", { email: values.email, password: values.password })
	};

	useEffect(() => {
		if (!session) return;
		// console.log('session:', session);
		router.push('/account/my-account')

		// checkAuthPage(session)
	}, [session])
    
	if(!session)
	return (
		<div className="ps-my-account">
			<div className="container">
				<Form
					className="ps-form--account"
					onFinish={onFinish}>
					<ul className="ps-tab-list">
						<li className="active">
							<Link href="/account/login">
								<a>Вход</a>
							</Link>
						</li>
						<li>
							<Link href="/account/register">
								<a>Регистрация</a>
							</Link>
						</li>
					</ul>
					<div className="ps-tab active" id="sign-in">
						<div className="ps-form__content">
							{error && <div>Неправильный логин или пароль</div>}

							<h5>Вход в личный кабинет</h5>
							<div className="form-group">
								<Form.Item
									name="email"
									rules={[
										{
											required: true,
											message:
												'Введите ваш email!',
										},
									]}>
									<Input
										className="form-control"
										type="text"
										placeholder="Имя пользователя или адрес email..."
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
												'Введите пароль!',
										},
									]}>
									<Input
										className="form-control"
										type="password"
										placeholder="Пароль..."
									/>
								</Form.Item>
							</div>
							<div className="form-group">
								<div className="ps-checkbox">
									<input
										className="form-control"
										type="checkbox"
										id="remember-me"
										name="remember-me"
									/>
									<label htmlFor="remember-me">
										Запомнить меня
									</label>
								</div>
							</div>
							<div className="form-group submit">
								<button
									type="submit"
									className="ps-btn ps-btn--fullwidth">
									Войти
								</button>
							</div>
						</div>
						<br />
					</div>
				</Form>
			</div>
		</div>
	);
	
	return (
	<>
	Успешная авторизация, перехожу в аккаунт....
	</>
	)
}

const mapStateToProps = state => {
	return state.auth;
};
// export default connect(mapStateToProps)(Login);
export default Login;