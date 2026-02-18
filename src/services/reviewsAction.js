"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export const getAllReviews = async (searchParams) => {
  const getParams = new URLSearchParams(searchParams);
  const res = await fetch(
    `http://localhost:3000/api/review?reviews=${getParams}`,
    {
      //cache: "no-store", //by default
      cache: "force-cache", //cache krbe
      //or
      next: { tags: ["reviews"] },
    },
  );

  const { reviews } = await res.json();

  // await new Promise((resolve) => setTimeout(() => resolve(), 3000));

  return reviews;
};

export const createReview = async (payload) => {
  const res = await fetch(`http://localhost:3000/api/review`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create review");

  //revalidatePath("/reviews");
  //or
  revalidateTag("reviews");
  return res.json();
};
