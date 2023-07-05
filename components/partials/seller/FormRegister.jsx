import React from "react";
import FormList from '@/components/elements/FormList';
import { Form, Input, Select, Radio } from 'antd';

const FormRegister = ({ numberForm = 0 }) => {
	if (numberForm === 0) {
		return (<>
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
					/>
				</Form.Item>
			</div>
			<div className="form-group form-forgot">
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
			<div className="form-group submit">
				<button
					type="submit"
					className="ps-btn ps-btn--fullwidth">
					Продолжить
				</button>
			</div>
			<br />
		</>);
	}

	if (numberForm === 1) {
		return (<div className="ps-form--scheme">
			<Radio.Group
				className="ps-form--scheme-flex"
				name="scheme"
				defaultValue="DBS"
			>
				<div className="form-group">
					<Radio
						value="DBS"
					>DBS</Radio>
					<p>
						Вы храните товары у себя и после получения заказов от нас сами собираете и доставляете их.
						<br />
						Работать можно в любом регионе.
					</p>
					<FormList
						title="Подойдёт вам, если"
						params={[
							"Вы готовы организовать и контролировать доставку. Её сроки вы назначаете сами",
							"Вы не продаёте билеты, туры, музыкальную и видеопродукцию"
						]}
					></FormList>
				</div>
				<div className="form-group">
					<Radio
						value="FBS"
					>FBS/Экспресс-доставка</Radio>
					<p>
						Доставкой занимаемся мы. Вы храните товары и отгружаете заказы в сортировочный центр (FBS) или курьеру (экспресс-доставка по городу за 1-2 часа).
					</p>
					<FormList
						title="Подойдёт вам, если"
						params={[
							"Ваш склад работает не меньше 5 дней в неделю",
							"Вы можете отгружать заказы в Москве, Санкт-Петербурге, Новосибирске или других 49 регионах."
						]}
					></FormList>
					<FormList
						title="Отгрузка курьеру подойдёт, если"
						params={[
							"Ваш склад или магазин находится в черте одного из 17 городов",
							"Вы готовы собирать и отгружать водителю такси за 30 минут"
						]}
					></FormList>
				</div>
				<div className="form-group">
					<Radio
						value="FBY"
					>FBY</Radio>
					<p>
						Вы поставляете товары на наши склады. Хранением, сборкой, упаковкой и доставкой заказов и занимается Маркет.
					</p>
					<FormList
						title="FBY подойдёт вам, если"
						params={[
							"Вы сможете поставлять товары на склады в Подмосковье, Санкт-Петербурге, Екатеринбурге или Ростове-на-Дону"
						]}
						noListStyle
					></FormList>
				</div>
			</Radio.Group>
			<div className="form-group submit">
				<button
					type="submit"
					className="ps-btn ps-btn--fullwidth">
					Далее
				</button>
			</div>
			<br />
		</div>);
	}

	return (<>
		<div className="form-group">
			<Form.Item
				name="city"
				rules={[
					{
						required: true,
						message:
							'Пожалуйста, введите город',
					},
				]}>
				<Input
					className="form-control"
					type="text"
					placeholder="Город..."
				/>
			</Form.Item>
		</div>
		<div className="form-group">
			<Form.Item
				name="warehouse"
				rules={[
					{
						required: true,
						message:
							'Пожалуйста, введите склад',
					},
				]}>
				<Input
					className="form-control"
					type="text"
					placeholder="Склад..."
				/>
			</Form.Item>
		</div>
		<div className="form-group">
			<Form.Item
				name="title"
				rules={[
					{
						required: true,
						message:
							'Пожалуйста, введите название',
					},
				]}>
				<Input
					className="form-control"
					type="text"
					placeholder="Название для покупателей..."
				/>
			</Form.Item>
		</div>
		<div className="form-group">
			<Form.Item
				name="site"
				rules={[
					{
						required: true,
						message:
							'Пожалуйста, введите ваш сайт',
					},
				]}>
				<Input
					className="form-control"
					type="text"
					placeholder="Сайт..."
				/>
			</Form.Item>
		</div>
		<div className="form-group">
			<Form.Item
				name="assortment"
				rules={[
					{
						required: true,
						message:
							'Пожалуйста, введите ассортимент товаров',
					},
				]}>
				<Select
					className="form-control"
					placeholder="Ассортимент..."
				>
					<Select.Option value="Туристические товары">
						Туристические товары
					</Select.Option>
				</Select>

			</Form.Item>
		</div>
		<div className="form-group">
			<Form.Item
				name="category"
				rules={[
					{
						required: true,
						message:
							'Пожалуйста, введите вашу основную категорию',
					},
				]}>
				<Select
					className="form-control"
					placeholder="Основная категория..."
				>
					<Select.Option value="Туристические товары">
						Туристические товары
					</Select.Option>
				</Select>
			</Form.Item>
		</div>
		<div className="form-group submit">
			<button
				type="submit"
				className="ps-btn ps-btn--fullwidth">
				Завершить
			</button>
		</div>
		<br />
	</>);
}

export default FormRegister;