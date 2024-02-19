"use server";
import prisma from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { revalidatePath } from "next/cache";

export const deleteUserCart = async () => {
  const session = await getServerSession(authOptions);
  const userCart = await prisma.carts.findFirst({
    where: {
      userId: session?.user.id,
    },
    include: { items: true },
  });
  if (userCart) {
    await prisma.carts.delete({
      where: { id: userCart?.id },
    });
  }
  revalidatePath("/place-order");
};
