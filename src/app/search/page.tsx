import React from "react";
import prisma from "@/lib/db/prisma";
import ProductCard from "@/components/ProductCard";
import AnalyticsProductsSearched from "@/components/AnalyticsProductsSearched";

interface SearchPageProps {
  searchParams: { query: string };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const products = await prisma.products.findMany({
    where: {
      OR: [
        { name: { contains: searchParams.query, mode: "insensitive" } },
        { description: { contains: searchParams.query, mode: "insensitive" } },
      ],
    },
    orderBy: { id: "desc" },
  });

  if (products.length === 0) {
    return (
      <>
        <AnalyticsProductsSearched query={searchParams.query} />
        <div className="text-center">No products found</div>
      </>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <AnalyticsProductsSearched query={searchParams.query} />
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default SearchPage;
