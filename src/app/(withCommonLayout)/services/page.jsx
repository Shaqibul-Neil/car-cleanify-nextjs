import { getAllServices } from "@/services/servicesAction";
import ServiceCard from "./_components/ServiceCard";
import ServicesSearching from "./_components/ServicesSearching";
//export const dynamic = "force-dynamic";

export const metadata = {
  title: "Services",
  description: "Car Washing Service",
};
const ServicesPage = async ({ searchParams }) => {
  const getParams = await searchParams;
  console.log(getParams);
  const services = await getAllServices({ ...getParams });
  return (
    <div className="py-14 space-y-6">
      <h2 className="text-center text-2xl">Services Page</h2>
      {/* Search */}

      <ServicesSearching />

      {/* Data grid */}
      {services?.meta?.total === 0 ? (
        <div className="font-bold text-4xl text-white text-center my-16">
          No data found
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {services?.data?.map((service) => {
            return <ServiceCard service={service} key={service?._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
