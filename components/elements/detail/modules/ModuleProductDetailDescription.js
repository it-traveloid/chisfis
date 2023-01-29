import React from 'react';
import Link from 'next/link';

const ModuleProductDetailDescription = ({ product }) => (
    <div className="ps-product__desc">
        <p>
            Производитель:
            <Link href="/shop">
                <a>
                    <strong> {product.vendor}</strong>
                </a>
            </Link>
        </p>
        <ul className="ps-list--dot">
		{product.properties.map((item) => {return (<li key={item.id}>{item.property}: {item.value}</li>) }) }
		
        </ul>
    </div>
);

export default ModuleProductDetailDescription;
