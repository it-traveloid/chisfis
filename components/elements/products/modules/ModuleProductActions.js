import React, { useState } from 'react';
import { Modal } from 'antd';
import { connect } from 'react-redux';
import ProductDetailQuickView from '~/components/elements/detail/ProductDetailQuickView';
import useEcomerce from '~/hooks/useEcomerce';

const ModuleProductActions = ({ product, ecomerce }) => {
    const [isQuickView, setIsQuickView] = useState(false);
    const { addItem } = useEcomerce();

    function handleAddItemToCart(e) {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
    }

    function handleAddItemToWishlist(e) {
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.wishlistItems, 'wishlist');
        const modal = Modal.success({
            centered: true,
            title: 'Поздравляем!',
            content: `Товар добавлен в избранное`,
        });
        modal.update;
    }

    function handleAddItemToCompare(e) {
        e.preventDefault();
        addItem({ id: product.id }, ecomerce.compareItems, 'compare');
        const modal = Modal.success({
            centered: true,
            title: 'Поздравляем!',
            content: `Товар добавлен к списку сравнения!`,
        });
        modal.update;
    }

    const handleShowQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(true);
    };

    const handleHideQuickView = (e) => {
        e.preventDefault();
        setIsQuickView(false);
    };
	// console.log(product)
    return (
        <ul className="ps-product__actions">
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="В корзину"
                    onClick={handleAddItemToCart}>
                    <i className="icon-bag2"></i>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Быстрый просмотр"
                    onClick={handleShowQuickView}>
                    <i className="icon-eye"></i>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="В избранное"
                    onClick={handleAddItemToWishlist}>
                    <i className="icon-heart"></i>
                </a>
            </li>
            <li>
                <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Сравнить"
                    onClick={handleAddItemToCompare}>
                    <i className="icon-chart-bars"></i>
                </a>
            </li>
            <Modal
                centered
                footer={null}
                width={1024}
                onCancel={(e) => handleHideQuickView(e)}
                visible={isQuickView}
                closeIcon={<i className="icon icon-cross2"></i>}>
                <h3>Быстрый просмотр</h3>
                <ProductDetailQuickView product={product} />
            </Modal>
        </ul>
    );
};

export default connect((state) => state)(ModuleProductActions);
