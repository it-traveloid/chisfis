import React, { useEffect } from 'react';
import Link from 'next/link';
import ProductHorizontal from '~/components/elements/products/ProductHorizontal';
import useGetProducts from '~/hooks/useGetProducts';

const NewArrivals = ({ collectionSlug }) => {
    const { productItems, loading, getProductsByCollection } = useGetProducts();
    useEffect(() => {
        getProductsByCollection(collectionSlug);
    }, [collectionSlug]);

    // Views
    let productItemView;
    if (!loading) {
        if (productItems && productItems.length > 0) {
            productItemView = productItems.map((item) => (
                <div
                    className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 "
                    key={item.id}>
                    <ProductHorizontal product={item} />
                </div>
            ));
        } else {
            productItemView = <p>Товар не найден.</p>;
        }
    } else {
        productItemView = <p>Загружается...</p>;
    }
    return (
        <div className="ps-product-list ps-new-arrivals">
            <div className="ps-container">
                <div className="ps-section__header">
                    <h3>Горячие новинки</h3>
                    <ul className="ps-section__links">
                        <li>
                            <Link href="/shop">
                                <a>Технологии</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Электроника</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Фурнитура</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Одежда</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop?category=health-and-beauty">
                                <a>Красота и здоровье</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/shop">
                                <a>Смотреть всё</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="ps-section__content">
                    <div className="row">{productItemView}</div>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
