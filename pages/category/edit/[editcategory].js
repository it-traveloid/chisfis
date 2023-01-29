import { PrismaClient } from '@prisma/client'
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import PageContainer from '~/components/layouts/PageContainer';
import FooterDefault from '~/components/shared/footers/FooterDefault';
import BreadCrumb from '~/components/elements/BreadCrumb';


export default function ({json,parent,childs}) {
	const { data: session } = useSession()
	const router = useRouter()	
	
	const category = JSON.parse( json );
	
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
		{parent? (<> <Link href={'/category/edit/'+parent.slug}>{parent.name}</Link></>):(<><Link href={'/category/edit/'}>Категории</Link></>)}
		<br />
		{session? (<> <Link href={'/category/edit/0'}>Создать категорию</Link><br /></>):(<></>)}
		
			<b>-{category.name}{'\u00A0'}</b>
			{session? (<><button onClick={() => editRecord(category.slug)}>Редактировать</button></>):(<></>)}
			{session? (<><button onClick={() => deleteRecord(category.id)}>Удалить</button></>):(<></>)}
				<br />
			{childs.map(child => (
			<> 
				--<Link href={'/category/edit/'+child.slug}>{child.name}</Link>{'\u00A0'}
				
				{session? (<><button onClick={() => editRecord(child.slug)}>Редактировать</button></>):(<></>)}
				{session? (<><button onClick={() => deleteRecord(child.id)}>Удалить</button></>):(<></>)}
				<br />
				</>
				
			)) }
			
			
			
			</div>
			</PageContainer>
			</>
		);
		}
		
		export async function getServerSideProps(context) {
			const { params } = context;
			let pid = params.editcategory
			// const page = context.params.page
			if(!pid) pid=0
			const prisma = new PrismaClient()
			const category = await prisma.categories.findFirst(
				{where : {'slug':pid} }
			)
			
			
			let parent=null
			let childs=null
			
			if(category) {
			
			    console.log(category.id)
			    console.log(category.parent)
				parent = await prisma.categories.findFirst({
					select: {
						id: true,
						name: true,
						slug: true,
						
					},
					where: {
						id: category.parent,
					},
					
				})
				// console.log('parent',parent)
				
				childs = await prisma.categories.findMany({
					select: {
						id: true,
						name: true,
						slug: true,
						
					},
					where: {
						parent: category.id,
					},
					
				})
					// console.log('ch',childs)
				
			}
			
			
			const json = JSON.stringify(category)
			// console.log(context)
			return {
				props : { json,parent,childs }
			}
		}		