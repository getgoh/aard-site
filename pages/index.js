import { useState } from "react";
import Head from "next/head";
import ListItem from "../components/list-item";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

import prisma from "../utils/prisma";

export async function getServerSideProps() {
  var items = await prisma.item.findMany();
  const itemTypes = await prisma.itemType.findMany();
  items = items.map((i) => {
    i.type = itemTypes.find((it) => it.id === i.type).type;
    return i;
  });
  console.log(items);
  return {
    props: {
      initialItems: items,
    },
  };
}

export default function Home({ initialItems }) {
  const [items, setItems] = useState(initialItems);
  return (
    <div class='container mx-auto'>
      <Head>
        <title>Aard Database</title>
        <meta name='description' content='Item database for Aardwolf' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <div class='p-8 space-y-5'>
          <div class='flex'>
            <input
              type='text'
              placeholder='Search'
              class='placeholder-gray-500 flex-grow block h-16 p-6 focus:border-transparent rounded text-2xl'
            />
          </div>
          {items.map((item) => {
            return <ListItem key={item.id} {...item} />;
          })}
        </div>
      </main>
    </div>
  );
}
