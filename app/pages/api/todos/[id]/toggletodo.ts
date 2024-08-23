import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


const prisma = new PrismaClient()

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { id } = req.query;

        if (typeof id !== 'string') {
            res.status(400).json({ error: 'Invalid ID' });
            return;
        }

        try {
            const data = await prisma.product.update({
                where: { id },
                data: { ordered: req.body.ordered }
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update the item' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}