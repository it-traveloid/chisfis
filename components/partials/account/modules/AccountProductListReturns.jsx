import React from "react";
import ProductCart from '~/components/elements/products/ProductCart';

const AccountProductListReturns = ({ products, handleRemoveWishlistItem, loading }) => {
    if (products && products.length > 0) {
        return (<div className="table-responsive">
            <table className="table ps-table--whishlist mb-0">
                <thead>
                    <tr>
                        <th></th>
                        <th>Имя товара</th>
                        <th>Цена за штуку</th>
                        <th>Дата</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product?.id}>
                            <td>
                                <a
                                    href={product?.link}
                                    onClick={(e) => handleRemoveWishlistItem(e, product)}>
                                    <i className="icon-cross"></i>
                                </a>
                            </td>
                            <td>
                                <ProductCart product={product} />
                            </td>
                            <td className="price">${product?.price}</td>
                            <td>{product?.date}</td>
                            <td>
                                {product?.state}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
    } else {
        if (!loading) {
            return (
                <div className="alert alert-danger mb-0" role="alert">
                    Список товаров пуст!
                </div>
            );
        }
    }
};

export default AccountProductListReturns;