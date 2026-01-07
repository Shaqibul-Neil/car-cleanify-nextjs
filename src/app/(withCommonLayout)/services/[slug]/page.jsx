import React from "react";
import ServiceDetailsCard from "../_components/ServiceDetailsCard";

const getSingleService = async (id) => {
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

const ServiceDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const service = await getSingleService(slug);
  //console.log(service);
  if (!service) {
    return <div className="py-20 text-center">Service not found</div>;
  }
  return (
    <div>
      <ServiceDetailsCard service={service} />
    </div>
  );
};

export default ServiceDetailsPage;
