import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import {
    carouselFullwidth,
    carouselStandard,
} from '@/../../utilities/carousel-helpers';
import Product from '@/../../components/elements/products/Product';
import { getProductsByCollectionHelper } from '@/../../utilities/strapi-fetch-data-helpers';
import axios from 'axios';
const CustomerBought = ({ collectionSlug, boxed, layout }) => {
    const [productItems, setProductItems] = useState(null);
    const [loading, setLoading] = useState(true);
	
    async function getProducts() {
        setLoading(true);
        // const rd = await getProductsByCollectionHelper("deal-of-the-day");
		// console.log(rd)
		let responseData=[]
		if (!isNaN(collectionSlug)) responseData= await axios.get('/api/customerbought?id='+Number(collectionSlug) )
		.then(function (res) {
			return res.data
		})
				// console.log('bought',responseData);

		 // responseData=rd
		// console.log('bought1',responseData);

		
        if (responseData) {
            setProductItems(responseData.items);
            setTimeout(
                function () {
                    setLoading(false);
				}.bind(this),
                250
			);
		}
	}
	
    useEffect(() => {
        getProducts();
	}, [collectionSlug]);
	
    // Views
    let carouselView;
    if (!loading) {
        if (productItems) {
            if ((layout = 'fullwidth')) {
                carouselView = (
                    <Slider {...carouselFullwidth} className="ps-carousel outside">
					{productItems.map((item, index) => {
						if (index < 8) {
							return <Product product={item} key={item.id} />;
						}
					})}
                    </Slider>
				);
				} else {
                carouselView = (
                    <Slider {...carouselStandard} className="ps-carousel outside">
					{productItems.map((item, index) => {
						if (index < 8) {
							return <Product product={item} key={item.id} />;
						}
					})}
                    </Slider>
				);
			}
		}
        else {
            carouselView = <p>Товаров не найдено.</p>
		}
	}
    else {
        carouselView = <p>Загрузка...</p>
	}
	
    return (
        <div
		className={`ps-section--default ps-customer-bought ${
			boxed === true ? 'boxed' : ''
		}`}>
		<div className="ps-section__header">
		<h3>Покупатели, купившие данный товар также покупают:</h3>
		</div>
		<div className="ps-section__content">{carouselView}</div>
        </div>
	);
};

export default CustomerBought;
