// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) { 
  try {
    
    console.log(req.body); 
    console.log(req.body.timer);
    const cleaningData = req.body;
    console.log(cleaningData)
    const savedCleaning = await prisma.cleaning.update({ 
    where: { 
      id: '63d9fb0f5c89217464c97bc1',
    },  
    data: {
      cleanedBy: req.body.cleanedBy,
      cleanedDate: req.body.cleanedDate,
      timer: req.body.timer
    },
    
  })
  res.status(200) 
  } catch (error) {
    console.log(error)
  }
  
}
