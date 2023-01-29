import React from 'react';
import { Progress } from 'antd';
import Link from 'next/link';
import { formatCurrency } from '~/utilities/product-helper';
import Rating from '~/components/elements/Rating';
import CountDown from '~/components/elements/CountDown';
import ThumbnailWithBadge from '~/components/elements/detail/thumbnail/ThumbnailWithBadge';
import useProduct from '~/hooks/useProduct';

const ProductDealHot = ({ product }) => {
    const { thumbnailImage, price, badge } = useProduct();

    return (
        <div className="ps-product--detail ps-product--hot-deal">
            <div className="ps-product__header">
                <ThumbnailWithBadge product={product} />
                <div className="ps-product__info">
                    <h5>Инвестор</h5>
                    <h3 className="ps-product__name">
                        <Link
                            href="/product/[pid]"
                            as={`/product/${product.id}`}>
                            <a>{product.title}</a>
                        </Link>
                    </h3>

                    <div className="ps-product__meta">
                        {product.is_sale === true ? (
                            <h4 className="ps-product__price sale">
                                <del className="mr-2">
                                    {formatCurrency(product.sale_price)} Руб
                                </del>
                                {formatCurrency(product.price)} Руб
                            </h4>
                        ) : (
                            <h4 className="ps-product__price">
                                {formatCurrency(product.price)} Руб
                            </h4>
                        )}
                        <div className="ps-product__rating">
                            <Rating />
                            <span>(1 обзор)</span>
                        </div>
                        <div className="ps-product__specification">
                            <p>
                                Наличие:
                                <strong className="in-stock">В наличии</strong>
                            </p>
                        </div>
                    </div>
                    <div className="ps-product__expires">
                        <p>Истекает</p>
                        <CountDown
                            timeTillDate="12 31 2021, 6:00 am"
                            timeFormat="MM DD YYYY, h:mm a"
                        />
                    </div>
                    <div className="ps-product__processs-bar">
                        <Progress percent={60} showInfo={false} />
                        <p>
                            <strong>4/79</strong> Продано
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDealHot;
