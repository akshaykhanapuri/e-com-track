import { Products } from "@prisma/client";
import Image from "next/image";
import PriceTag from "./PriceTag";
import Link from "next/link";

interface ProductProps {
  product: Products;
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Link
      href={"/products/" + product.id}
      className="card w-full bg-base-100 shadow-md hover:shadow-xl transition-shadow"
    >
      <figure>
        <Image
          className="h-48 object-cover"
          src={product.imageUrl}
          width={400}
          height={800}
          alt={product.name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <PriceTag
          className={"justify-start bg-secondary mt-3"}
          price={product.price}
        />
      </div>
    </Link>
  );
};

export default ProductCard;
