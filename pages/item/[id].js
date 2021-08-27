import { useState } from "react";
import { useRouter } from "next/router";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps(context) {
  const { id } = context.query;
  const item = await prisma.item.findFirst({
    where: {
      id: id,
    },
  });
  console.log(item);
  return {
    props: {
      initialItem: item,
    },
  };
}

const Item = ({ initialItem }) => {
  const [item, setItem] = useState(initialItem);

  if (item === null) {
    return (
      <>
        <h1>No item</h1>
      </>
    );
  }
  return (
    <>
      <h1>{item.name}</h1>
    </>
  );
};

export default Item;
