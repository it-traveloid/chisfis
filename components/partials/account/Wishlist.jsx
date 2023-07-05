import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useEcomerce from '@/hooks/useEcomerce';
import AccountMenuSidebar from './modules/AccountMenuSidebar';
import { getWithActive } from '@/components/utils/account/AccountLinks.js';
import AccountProductList from './modules/AccountProductList';

const Wishlist = ({ ecomerce }) => {
    const accountLinks = getWithActive('Список желаемого');

    const { loading, products, getProducts } = useEcomerce();
    const { addItem, removeItem } = useEcomerce();

    function handleAddItemToCart(e, product) {
        e.preventDefault();
        addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
    }

    function handleRemoveWishlistItem(e, product) {
        e.preventDefault();
        removeItem(product, ecomerce.wishlistItems, 'wishlist');
    }

    useEffect(() => {
        if (!ecomerce.wishlistItems) return;

        getProducts(ecomerce.wishlistItems);
    }, [ecomerce]);

    return (
        <div className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ps-page__left">
                            <AccountMenuSidebar data={accountLinks} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-section--account-setting">
                            <div className="ps-section__header">
                                <h3>Список желаемого</h3>
                            </div>
                            <div className="ps-section__content">
                                <AccountProductList
                                    products={products}
                                    handleAddItemToCart={handleAddItemToCart}
                                    handleRemoveWishlistItem={handleRemoveWishlistItem}
                                    loading={loading}
                                ></AccountProductList>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default connect((state) => state)(Wishlist);
