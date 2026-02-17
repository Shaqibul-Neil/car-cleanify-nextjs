"use server";
export const getAllReviews = async (searchParams) => {
  const getParams = new URLSearchParams(searchParams);
  const res = await fetch(
    `http://localhost:3002/api/review?reviews=${getParams}`,
  );

  const { reviews } = await res.json();

  console.log(reviews);
  return reviews;
};

export const createReview = async (payload) => {
  const res = await fetch(`http://localhost:3002/api/review`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create review");
  return res.json();
};
