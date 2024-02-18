import React from "react";
import type { Metadata } from "next";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import SubmitFormButton from "@/components/SubmitFormButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Add a product - Segment Ecom Demo",
};

const addProductServerAction = async (formData: FormData) => {
  "use server";

  const session = getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  const name = formData.get("productName")?.toString();
  const description = formData.get("description")?.toString();
  const imageUrl = formData.get("imageUrl")?.toString();
  const price = Number(formData.get("price") || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields in Add Product Form");
  }

  await prisma.products.create({
    data: { name, description, imageUrl, price },
  });

  redirect("/");
};

const addProduct = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/add-product");
  }

  return (
    <>
      <div>
        <h1 className="mb-1 text-lg font-bold">Add Product</h1>
        <form action={addProductServerAction}>
          <input
            className="input-bordered input mb-1 w-full"
            name="productName"
            type="text"
            placeholder="Product Name"
            required
          />
          <textarea
            className="textarea-bordered textarea mb-1 w-full"
            name="description"
            placeholder="Description"
            required
          />
          <input
            className="input-bordered input mb-1 w-full"
            name="imageUrl"
            type="url"
            placeholder="Image URL"
            required
          />
          <input
            className="input-bordered input mb-1 w-full"
            name="price"
            type="number"
            placeholder="Price"
            required
          />
          <SubmitFormButton className="btn-block">Add Product</SubmitFormButton>
        </form>
      </div>
    </>
  );
};

export default addProduct;
