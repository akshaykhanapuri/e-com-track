import React from "react";
import { getCart } from "@/lib/db/cart";
import AnalyticsCheckoutStarted from "@/components/AnalyticsCheckoutStarted";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/authOptions";

const CheckoutPage = async () => {
  const cart = await getCart();
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/checkout");
  }

  return (
    <>
      <AnalyticsCheckoutStarted cart={cart} />
      <div className="flex flex-col items-end sm:items-center">
        <h1 className="m-2">Your Cart Value is ${cart?.subtotal}</h1>
        <h2 className="m-2">
          Since you have been kind enough to place this order, you get a
          discount of 10%
        </h2>
        <h2 className="m-2">
          Cart Value after discount: $
          {cart?.subtotal
            ? cart.subtotal - cart.subtotal * 0.1
            : cart?.subtotal}
        </h2>
        <Link href={"/place-order"}>
          <button className="btn btn-primary sm:w-[200px]">
            Complete Order
          </button>
        </Link>
      </div>
    </>
  );
};

export default CheckoutPage;
