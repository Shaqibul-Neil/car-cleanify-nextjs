import React from "react";
import ServiceSkeleton from "./_components/ServiceSkeleton";

const ServicesLoading = () => {
  return (
    <div className="py-14 space-y-6">
      <h2 className="text-center text-2xl">Services Page</h2>
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)]?.map((_, i) => (
          <ServiceSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default ServicesLoading;
