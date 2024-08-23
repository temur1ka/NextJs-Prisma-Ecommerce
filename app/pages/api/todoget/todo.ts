"use server"
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";


const prisma = new PrismaClient()

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const data = await prisma.product.findMany()
            console.log("techatka")

            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update the item' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }

}