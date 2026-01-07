import React from "react";
import ServiceDetailsCard from "../_components/ServiceDetailsCard";
import { getSingleService } from "@/services/servicesAction";

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
