import { PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import { translit } from "../../components/translit"

export default async (req, res) => {
	const session = await unstable_getServerSession(req, res, authOptions)
	const prisma = new PrismaClient()
	if (session) {
		let data = req.body
		const id=data.id
		delete data.id
		
		
		console.log(data)
		// res.status(200).json({ data: 'ok' })
		if(!data.delete)	{	
			data.slug=translit(data.name)
			const pr=await prisma.news.upsert({
				where: {
					id: Number(id)
				},
				update: data,
				create: data
			})
			// console.log("record ",pr)
			
		}
		else {
			const pr=await prisma.news.delete({
				where: {
					id: Number(id)
				},
				
			})
		}
		
		res.json({
			data: "ok"
			//"This is protected content. You can access this content because you are signed in.",
		})
		} else {
		res.json({
			data: "You must be signed in to view the protected content on this page.",
		})
	}
}