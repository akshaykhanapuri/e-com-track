"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/db/prisma";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());
  const articleInCart = cart.items.find((item) => item.productId === productId);
  if (articleInCart) {
    await prisma?.cartItems.update({
      where: { id: articleInCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma?.cartItems.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }
  revalidatePath(`/products/${productId}`);
}
