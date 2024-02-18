import React from "react";
import { cache } from "react";
import prisma from "@/lib/db/prisma";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import PriceTag from "@/components/PriceTag";
import AddToCartButton from "./AddToCartButton";
import { incrementProductQuantity } from "./actions";

interface ProductProps {
  params: { id: string };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.products.findUnique({ where: { id } });
  if (!product) notFound();
  return product;
});

// export async function generateMetadata({
//   params,
// }: ProductProps): Promise<Metadata> {
//   const product = await getProduct(params.id);
//   return {
//     title: product.name,
//     description: product.description,
//     openGraph: {
//       images: [{ url: product.imageUrl }],
//     },
//   };
// }

const Product = async ({ params }: ProductProps) => {
  console.log("test", typeof prisma);
  const product = await getProduct(params.id);
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={800}
          className="rounded-lg"
          priority
        />
        <div>
          <h1 className="text-5xl font-bold">{product.name}</h1>
          <PriceTag price={product.price} className="mt-4" />
          <p className="py-6">{product.description}</p>
          <AddToCartButton
            productId={product.id}
            incrementProductQuantity={incrementProductQuantity}
          />
        </div>
      </div>
    </>
  );
};

export default Product;
