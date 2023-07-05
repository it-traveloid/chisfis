import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductRepository from '@/../../repositories/ProductRepository';
import SkeletonProductDetail from '@/../../components/elements/skeletons/SkeletonProductDetail';
import BreadCrumb from '@/../../components/elements/BreadCrumb';
import ProductDetailFullContent from '@/../../components/elements/detail/ProductDetailFullContent';
import CustomerBought from '@/../../components/partials/product/CustomerBought';
import RelatedProduct from '@/../../components/partials/product/RelatedProduct';
import PageContainer from '@/../../components/layouts/PageContainer';
import axios from 'axios';

const ProductDefaultPage = () => {
	const router = useRouter();
	const { pid } = router.query;
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);
	
	
	
	async function getProduct(pid) {
		setLoading(true);
		// const responseData = await ProductRepository.getProductsById(pid);
		let responseData=null
		// console.log('pid',pid)
		if(pid) responseData= await axios.get('/api/products/'+pid)
		.then(function (res) 
			{
				return res.data.data
			});
			// console.log(responseData)
			
			if (responseData) {
				setProduct(responseData);
				setTimeout(
					function () {
						setLoading(false);
					}.bind(this),
					250
				);
			}
	}
	
	useEffect(() => {
		getProduct(pid);
	}, [pid]);
	
	const breadCrumb = [
		{
			text: 'Главная',
			url: '/',
		},
		{
			text: 'Магазин',
			url: '/shop',
		},
		{
			text: product ? product.title : 'Загрузка...',
		},
	];
	// Views
	let productView;
	if (!loading) {
		if (product) {
			productView = <ProductDetailFullContent product={product} />;
			} else {
		}
		} else {
		productView = <SkeletonProductDetail />;
	}
	return (
		<PageContainer title={product ? product.title : 'Загрузка...'}>
		<BreadCrumb breacrumb={breadCrumb} layout="fullwidth" />
		<div className="ps-page--product">
		<div className="container">
		{productView}
		<CustomerBought
		layout="fullwidth"
		collectionSlug={product?.id}
		/>
		<RelatedProduct collectionSlug={product?.id}
		//"shop-recommend-items"
		/>
		</div>
		</div>
		</PageContainer>
	);
};

export default ProductDefaultPage;
