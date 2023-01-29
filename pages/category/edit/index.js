import { PrismaClient } from '@prisma/client'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import BreadCrumb from '~/components/elements/BreadCrumb';


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
            text: 'Категории',
		},
	];
	
	function editRecord(slug){
		router.push('category/edit/'+slug)
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
		const response =  fetch('/api/category', options)
		
		
		router.reload(window.location.pathname)
	}
	
	return (
		<> 
		<PageContainer footer={<FooterDefault />} title="Товары">
		<div className="ps-page--my-account">
		<BreadCrumb breacrumb={breadCrumb} />
		{session? (<> <Link href={'/category/edit/0'}>Создать категорию</Link></>):(<></>)}
		<ul> 
		{products.map(product => (
			<li key={product.id}>
			<Link href={'/category/edit/'+product.slug}>{product.name}</Link>{'\u00A0'}
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

export async function getStaticProps(context) {
	
	 let  pid=0
	const prisma = new PrismaClient()
	const products = await prisma.categories.findMany(
	{where : {'parent':Number(pid)} }
	)
	const json = JSON.stringify(products)
	console.log(context)
	return {
		props : { json }
	}
}