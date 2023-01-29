// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function (req, res) {
	console.log(req.body)
	const data=req.body
	//try {
	const pr = await prisma.questions.create({
		data: data
	})
	console.log('result question',pr)
	
	
	
	res.status(200).json({ data: 'ok' })
}
