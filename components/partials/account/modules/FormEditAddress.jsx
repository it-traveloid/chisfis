import React from 'react';
import { Form, Input } from 'antd';

const FormEditAddress = ({ onFinish }) => {
    return (
        <Form
            className="ps-form--edit-address"
            onFinish={onFinish}
        >
            <div className="ps-form__content">
                <div className="form-group">
                    <label htmlFor="name">
                        Имя <sup>*</sup>
                    </label>
                    <Form.Item
                        name="name"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Пожалуйста, введите ваше имя',
                            },
                        ]}>
                        <Input
                            id="name"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="surname">
                        Фамилия <sup>*</sup>
                    </label>
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
                            id="surname"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="companyTitle">
                        Название компании
                    </label>
                    <Form.Item
                        name="companyTitle"
                    >
                        <Input
                            id="companyTitle"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="country">
                        Страна <sup>*</sup>
                    </label>
                    <Form.Item
                        name="country"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Пожалуйста, введите страну',
                            },
                        ]}>
                        <Input
                            id="country"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="address">
                        Адрес <sup>*</sup>
                    </label>
                    <Form.Item
                        name="address"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Пожалуйста, введите адрес',
                            },
                        ]}>
                        <Input
                            id="address"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="state">
                        Состояние <sup>*</sup>
                    </label>
                    <Form.Item
                        name="state"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Пожалуйста, введите адрес',
                            },
                        ]}>
                        <Input
                            id="state"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="postcode">
                        Почтовый код <sup>*</sup>
                    </label>
                    <Form.Item
                        name="postcode"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Пожалуйста, введите адрес',
                            },
                        ]}>
                        <Input
                            id="postcode"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <label htmlFor="email">
                        Электронная почта <sup>*</sup>
                    </label>
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Пожалуйста, введите адрес',
                            },
                        ]}>
                        <Input
                            id="email"
                            className="form-control"
                            type="text"
                        />
                    </Form.Item>
                </div>
                <div className="form-group submit">
                    <button className="ps-btn" type="submit">Сохранить</button>
                </div>
            </div>
        </Form>
    );
}

export default FormEditAddress;
