"use client";
import React, { useState, useTransition } from "react";
import { ShoppingCart } from "@/lib/db/cart";
import { analytics } from "@/lib/segment/segment";

interface AddToCartButtonProps {
  product: {
    id: string;
    description: string;
    name: string;
    imageUrl: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
  };
  incrementProductQuantity: (productId: string) => Promise<void>;
  getCart: () => Promise<ShoppingCart | null>;
}

const AddToCartButton = ({
  product,
  incrementProductQuantity,
  getCart,
}: AddToCartButtonProps) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(product.id);
            const cart = await getCart();
            analytics.track("Product Added", {
              cart_id: cart?.id,
              product_id: product.id,
              name: product.name,
              price: product.price,
              url: window.location.href,
              image_url: product.imageUrl,
              currency: "usd",
              quantity: 1,
            });

            setSuccess(true);
          });
        }}
      >
        Add to Cart
      </button>
      <div>
        {isPending && <span className="loading loading-spinner loading-md" />}
        {!isPending && success && (
          <span className="text-success">Added to Cart.</span>
        )}
      </div>
    </div>
  );
};

export default AddToCartButton;
