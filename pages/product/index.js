import { PrismaClient } from '@prisma/client'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import PageContainer from '@/../../components/layouts/PageContainer';
import FooterDefault from '@/../../components/shared/footers/FooterDefault';
import BreadCrumb from '@/../../components/elements/BreadCrumb';


export default function ({json}) {
	const { data: session } = useSession()
	const router = useRouter()	
	
	const products = JSON.parse( json );
	const breadCrumb = [
        {
            text: 'Главная',
            url: '/',
		},
        {
            text: 'Товары',
		},
	];
	
	function editRecord(slug){
		router.push('product/edit/'+slug)
	}
	
	function  deleteRecord (post) {
		const data={id: post, delete: true}
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}
		const response =  fetch('/api/catalog', options)
		
		
		router.reload(window.location.pathname)
	}
	
	return (
		<> 
		<PageContainer footer={<FooterDefault />} title="Товары">
		<div className="ps-page--my-account">
		<BreadCrumb breacrumb={breadCrumb} />
		{session? (<> <Link href={'/product/edit/0'}>Создать товар</Link></>):(<></>)}
		<ul> 
		{products.map(product => (
			<li key={product.id}>
			<Link href={'/product/full-content/'+product.slug}>{product.title}</Link>{'\u00A0'}
			{session? (<><button onClick={() => editRecord(product.slug)}>Редактировать</button></>):(<></>)}
			{session? (<><button onClick={() => deleteRecord(product.id)}>Удалить</button></>):(<></>)}
			</li>
		))}
		</ul>
		</div>
		</PageContainer>
		</>
	);
}

export async function getStaticProps() {
	const prisma = new PrismaClient()
	const products = await prisma.products.findMany()
	const json = JSON.stringify(products)
	
	return {
		props : { json }
	}
}