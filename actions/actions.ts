import prisma from "@/lib/prisma";

export async function getProducts(){
    const data = await prisma.product.findMany();
    return data
}