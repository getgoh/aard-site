const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const itemTypes_seed = await prisma.itemType.createMany({
    data: [
      { type: "Light" },
      { type: "Scroll" },
      { type: "Wand" },
      { type: "Stave" },
      { type: "Weapon" },
      { type: "Treasure" },
      { type: "Armor" },
      { type: "Potion" },
      { type: "Furniture" },
      { type: "Trash" },
      { type: "Container" },
      { type: "Drink " },
      { type: "Key" },
      { type: "Food  " },
      { type: "Boat" },
      { type: "Mob Corpse" },
      { type: "Player Corpse" },
      { type: "Fountain" },
      { type: "Pill" },
      { type: "Portal" },
      { type: "Beacon" },
      { type: "Gift Card" },
      { type: "Unused" },
      { type: "Raw Material" },
      { type: "Campfire" },
      { type: "Forge" },
      { type: "Runestone" },
    ],
  });

  const wearLoc_seed = await prisma.wearLoc.createMany({
    data: [
      { location: "light" },
      { location: "head" },
      { location: "eyes" },
      { location: "lear" },
      { location: "rear" },
      { location: "neck" },
      { location: "back" },
      { location: "medal" },
      { location: "torso" },
      { location: "body" },
      { location: "waist" },
      { location: "arms" },
      { location: "wrist" },
      { location: "hands" },
      { location: "finger" },
      { location: "legs" },
      { location: "feet" },
      { location: "shield" },
      { location: "wield" },
      { location: "hold" },
      { location: "float" },
      { location: "above" },
      { location: "portal" },
      { location: "sleeping" },
    ],
  });

  console.log(itemTypes_seed);
  console.log(wearLoc_seed);
}

main()
  .then(() => console.log("Seeds have been planted!"))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
