import { getCart } from "@/lib/db/cart";
import React from "react";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import AnalyticsCartViewed from "@/components/AnalyticsCartViewed";
import Link from "next/link";

export const metadata = {
  title: "Your Cart",
};

const CartPage = async () => {
  const cart = await getCart();

  return (
    <div>
      <AnalyticsCartViewed cart={cart} />
      <h1 className="mb-6 text-3xl font-bold">Shopping Cart</h1>
      {cart?.items.map((cartItem) => (
        <CartEntry
          cartItem={cartItem}
          key={cartItem.id}
          setProductQuantity={setProductQuantity}
        />
      ))}
      {!cart?.items.length && <p>Your Cart is empty</p>}
      <div className="flex flex-col items-end sm:items-center">
        {cart?.items.length && (
          <div className="content-center">
            <p className="mb-3 font-bold">Cart Total: ${cart?.subtotal || 0}</p>
            <Link href={"/checkout"}>
              <button className="btn btn-primary sm:w-[200px]">Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
