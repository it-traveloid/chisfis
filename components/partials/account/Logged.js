import Link from 'next/link';

export default function ({ session }) {
	console.log(session)
	return (
		<> 
		<div> Добро пожаловать, {session.user.name}</div>
		<Link href={'/product'}>Товары</Link><br />
		<Link href={'/shop/shop-categories'}>Категории</Link><br />
		</>
		
	)
}
