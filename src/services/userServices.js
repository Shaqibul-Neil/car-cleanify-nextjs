"use server";

export const signUp = async (payload) => {
  const res = await fetch(`http://localhost:3000/api/user`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
};

// export const getUser = async () => {
//   const getParams = new URLSearchParams(searchParams);
//   const res = await fetch(
//     `http://localhost:3000/api/review?reviews=${getParams}`,
//     {
//       //cache: "no-store", //by default
//       cache: "force-cache", //cache krbe
//       //or
//       next: {
//         tags: ["reviews"],
//         revalidate: 120, //ISR
//       },
//     },
//   );

//   const { reviews } = await res.json();

//   // await new Promise((resolve) => setTimeout(() => resolve(), 3000));

//   return reviews;
// };
