import React from 'react';
import Link from 'next/link';
import Rating from '~/components/elements/Rating';

const ModuleDetailTopInformation = ({ product }) => {
    // Views
    let priceView;
	let sum=0,med=0,count=0
	if(product.rating){
		count=parseInt(product.rating?.length)
		
		for (const rating of product.rating){
			
			sum+=rating.value
		}
		med=(parseInt(sum)/parseInt(count)).toFixed(2)
	}
	
	
    if (product.is_sale) {
        priceView = (
            <h4 className="ps-product__price sale">
			<del className="mr-2">{product.sale_price} руб.</del>
			{product.price} руб.
            </h4>
		);
		} else {
        priceView = <h4 className="ps-product__price">{product.price} руб.</h4>;
	}
    return (
        <header>
		<h1>{product.title}</h1>
		<div className="ps-product__meta">
		<p>
		Производитель:
		<Link href="/shop">
		<a className="ml-2 text-capitalize">{product.vendor}</a>
		</Link>
		</p>
		<div className="ps-product__rating">
		<Rating med={med} />
		<span>({count} оценок)</span>
		</div>
		</div>
		{priceView}
        </header>
	);
};

export default ModuleDetailTopInformation;
