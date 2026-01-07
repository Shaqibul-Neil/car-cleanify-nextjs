"use server";
export const getSingleService = async (id) => {
  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services/${id}`,
    {
      cache: "no-store",
    }
  );
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 3000)
  );
  const { data } = await res.json();

  return data;
};

export const getAllServices = async (searchParams = "") => {
  const getParams = new URLSearchParams(searchParams).toString();
  console.log("get", getParams);
  const res = await fetch(
    `https://car-washing-system-cleanify-server.vercel.app/api/v1/services?${getParams}`
    // {
    //   cache: "no-store",
    // }
  );
  // await new Promise((resolve) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 3000)
  // );
  const data = await res.json();
  return data;
};
