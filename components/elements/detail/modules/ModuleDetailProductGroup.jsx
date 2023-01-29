import React from 'react';

const ModuleDetailProductGroup = () => {
    return (
        <div className="ps-product__groupped">
            <div className="table-responsive">
                <table className="table ps-table--product-groupped">
                    <tbody>
                        <tr>
                            <td>
                                <a className="ps-btn" href="#">
                                    Читать больше
                                </a>
                            </td>
                            <td>
                                <a
                                    className="title"
                                    href="product-default.html">
                                    Ароматическая рисоварка
                                </a>
                            </td>
                            <td>
                                <p>18674,76 Руб</p>
                                <p>
                                    Наличие:
                                    <span className="ps-tag--out-stock">
                                        Товар закончился
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="ps-btn" href="#">
                                Читать больше
                                </a>
                            </td>
                            <td>
                                <a
                                    className="title"
                                    href="product-default.html">
                                    Стул из корейской ткани коричневого цвета
                                </a>
                            </td>
                            <td>
                                <p> 21725,09 Руб</p>
                                <p>
                                Наличие:
                                    <span className="ps-tag--out-stock">
                                        Товар закончился
                                    </span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a className="ps-btn" href="#">
                                    Читать больше
                                </a>
                            </td>
                            <td>
                                <a
                                    className="title"
                                    href="product-default.html">
                                    Набор ножей из 14 предметов от KichiKit
                                </a>
                            </td>
                            <td>
                                <p>5803,75 Руб</p>
                                <p>
                                Наличие:
                                    <span className="ps-tag--out-stock">
                                        Товар закончился
                                    </span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ModuleDetailProductGroup;
