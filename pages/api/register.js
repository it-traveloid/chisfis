import { PrismaClient } from '@prisma/client'
import { translit } from "../../components/translit"
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid';

export default async (req, res) => {
	const prisma = new PrismaClient()
	let data = req.body	
	console.log(data)
	let pr,result
	delete data.passwordconfirm
	
	pr=await prisma.users.findFirst({
		where: {
			OR: [
				{phone: data.phone},
				{email: data.email},
				
			],
			},		
	})
	if (pr) result="Пользователь с таким email или телефоном уже зарегистрирован!"
	else {
	    const uid=uuidv4();
		data.uuid=uid
		pr=await prisma.users.create({
			
			data: data
		})
		result="Пользователь зарегистрирован!"
		let nodemailer = require('nodemailer')
		const usermail='un010621@gmail.com'
        const transporter = nodemailer.createTransport({
			port: 465,
			host: "smtp.gmail.com",
			auth: {
				user: usermail,
				pass: 'Saturn78',
			},
			secure: true,
		});
		
		
		const mailData = {
			from: usermail,
			to: data.email,
			subject: `Ссылка для активации аккаунта на russiantourism.ru`,
			text: 'Для активации аккаунта подтвердите вашу почту',
		html: "<div><a href='http://russiantourism.ru:3000/account/activate/"+uid+"'>Подтвердить почту</a></div>"
		}
		
		
		/* transporter.sendMail(mailData, function (err, info) {
			if(err)
			console.log(err)
			else
			console.log(info)
		}) */
		
	}
	console.log(result)
	
	res.json({
		data: result
	})
	
}