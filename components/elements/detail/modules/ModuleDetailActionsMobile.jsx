import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import useEcomerce from '@/../../hooks/useEcomerce';
import { useRouter } from 'next/router';
import { useSession, signIn, signOut } from "next-auth/react"

const ModuleDetailActionsMobile = ({ ecomerce, product }) => {
	const { addItem } = useEcomerce();
	const Router = useRouter();
	const handleAddItemToCart = (e) => {
		e.preventDefault();
		addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
		Router.push('/account/shopping-cart');
	};
	
	const handleBuyNow = (e) => {
		e.preventDefault();
		addItem({ id: product.id, quantity: 1 }, ecomerce.cartItems, 'cart');
		Router.push('/account/checkout');
	};
	  	const { data: session } = useSession()

	return (
		<div className="ps-product__actions-mobile">
		<a
		className="ps-btn ps-btn--black"
		href="#"
		onClick={(e) => handleAddItemToCart(e)}>
		В корзину
		</a>
		<a className="ps-btn" href="#" onClick={(e) => handleBuyNow(e)}>
		Купить
		</a> 
		{session? 
			(<></>
				/* <a className="ps-btn" href={"/product/edit/"+product.id} >
				Редактировать
				</a> */
			)
		:(<></>)}
		
		</div>
	);
};

export default connect((state) => state)(ModuleDetailActionsMobile);
