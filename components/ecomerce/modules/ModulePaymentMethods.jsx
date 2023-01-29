import React, { useState } from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';

const ModulePaymentMethods = () => {
    const Router = useRouter();
    const [method, setMethod] = useState(1);

    function handleChangeMethod(e) {
        setMethod(e.target.value); //e.target.value
    }

    function handleSubmit(e) {
        e.preventDefault();
        Router.push('/account/payment-success');
    }

    return (
        <>
            <h4>Способы оплаты</h4>
            <div className="ps-block--payment-method">
                <div className="ps-block__header">
                    <Radio.Group
                        onChange={(e) => handleChangeMethod(e)}
                        value={method}>
                        <Radio value={1}>Visa / Master Card</Radio>
                        <Radio value={2}>Paypal</Radio>
                    </Radio.Group>
                </div>
                <div className="ps-block__content">
                    {method === 1 ? (
                        <div className="ps-block__tab">
                            <div className="form-group">
                                <label>Номер карты</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Имя на карте</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="row">
                                <div className="col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>Дата на карте (ММ/ГГ)</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="01/21"
                                        />
                                    </div>
                                </div>
                                <div className=" col-sm-4 col-4">
                                    <div className="form-group">
                                        <label>CVV код</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <button
                                    className="ps-btn ps-btn--fullwidth"
                                    onClick={(e) => handleSubmit(e)}>
                                    Подтвердить
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="ps-block__tab">
                            <a
                                className="ps-btn"
                                href="https://www.paypal.com/"
                                target="_blank">
                                Process with Paypal
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default ModulePaymentMethods;
