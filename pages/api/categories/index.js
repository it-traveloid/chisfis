import {PrismaClient} from '@prisma/client'
import {unstable_getServerSession} from "next-auth/next"
import {authOptions} from "@/../../pages/api/auth/[...nextauth]";

export default async (req, res) => {
    const {method} = req;

    const session = await unstable_getServerSession(req, res, authOptions);
    const prisma = new PrismaClient();

    if (method === "GET") {

        const categories = await prisma.categories.findMany();

        if (categories.length > 0) {
            res.status(200).json({data: {categories}});
        } else {
            res.status(200).json({error: "Not found"});
        }

    } else {
        res.status(404).json({message: "Not found"});
    }
}