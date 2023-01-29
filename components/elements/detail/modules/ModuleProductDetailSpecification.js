import React from 'react';
import Link from 'next/link';

const ModuleProductDetailSpecification = ({ product }) => (
    <div className="ps-product__specification">
	Нашли дешевле? <Link href="/page/blank">
	<a className="report">Сообщите нам</a>
	</Link> и мы снизим цену!
	<p>
	<strong>Артикул:</strong>{product.article}
	</p>
	<p className="categories">
	<strong> Категории товара:</strong>
	{product.product_categories.map((item) => { 
		return (<Link href={"/category/"+item.category.slug} key={item.id} >
			<a  key={item.id}>{item.category.name}</a>
		</Link>)
	})
	}
	
	
	</p>
	<p className="tags">
	<strong> Теги</strong>
	{product.tags.map((item) => { 
		return(<Link href={"/shop?"+item.slug}  key={item.id}>
			<a key={item.id}>{item.name}</a>
		</Link>)
	})
	}
	
	</p>
    </div>
);

export default ModuleProductDetailSpecification;
