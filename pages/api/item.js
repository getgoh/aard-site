import prisma from "../../utils/prisma";

// const prisma = new PrismaClient();

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  // Sample data from the MUD
  const tempItem = {
    id: "1224364921",
    name: "a hallowed light",
    type: 1, // item type - 1: light, 2: scroll, 5: weapon, 7: armor, etc
    flags: "KMG", // K: Kept, I: Invis, M: Magical, G: Glowing, H: Humming, C: Cursed, T: Temporary affect
    level: 1,
    value: 123, // value in gold when sold to NPC at base price
    weight: 3,
    wearloc: "light", // Mapped as 0-32 in MUD - 0: light, 1: head, 2: eyes, etc
    fromclanname: "The Emerald Knights",
    itemscore: 210, // high-level estimate of how good (or bad) an item is
    unique: 1, // 0: not unique, 1: unique
    keywords: "unique, glow, magic, bless, held, nolocate, auctioned, v3",
  };

  const itemData = req.body;

  console.log(`ItemData.name: ${itemData.name}`);

  // {invheader}1224364921|1|Light|0|3|light|unique, glow, magic, bless, held, nolocate, auctioned, v3|||||||210
  //            objectid|level|itemtype|value|weight|wearloc|flags|owner|│fromclanname|timer|||itemscore

  // ### Database should contain unique item names
  const itemCheck = await prisma.item.findFirst({
    where: {
      name: itemData.name,
    },
  });

  // item does not exist, can safely insert to database
  if (itemCheck === null) {
    // get type
    // const wearloc = await prisma.wearLoc.findFirst({
    //   where: {
    //     location: itemData.wearloc,
    //   },
    // });

    // if (wearloc === null) {
    //   return res.json({ msg: `Type ${itemData.wearloc} not found.` });
    // }

    const savedItem = await prisma.item.create({
      data: itemData,
    });
    return res.json(savedItem);
  } else {
    return res.json({
      msg: `data not created: item ${itemData.name} already exists in the database.`,
    });
  }
};
