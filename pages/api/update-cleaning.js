// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) { 
  res.status(200).json({ name: 'John Doe' }) 
  console.log(req.body)
  const cleaningData = req.body;
  const savedCleaning = await prisma.cleaning.update({ 
    where: {
      id: 'cldkvz5lv0000licl396q765e',
    },
    data: {
      cleanedBy: req.body.cleanedBy,
      cleanedDate: req.body.cleanedDate,
      timer: req.body.timer
    },
  })
}
