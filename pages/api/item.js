import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  console.log(req.body);

  const itemData = req.body;

  const savedItem = await prisma.item.create({
    data: itemData,
  });

  res.json(savedItem);
};
