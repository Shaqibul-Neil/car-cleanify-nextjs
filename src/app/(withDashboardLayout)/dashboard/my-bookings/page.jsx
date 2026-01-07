"use client";
import ServiceCard from "@/app/(withCommonLayout)/services/_components/ServiceCard";
import { BookingContext } from "@/context/bookingContext";
import { useContext } from "react";

const MyBookings = () => {
  const { bookings } = useContext(BookingContext);
  return (
    <div>
      <h2>All My bookings {bookings.length}</h2>
      {bookings.length === 0 ? "No Bookings Found":
      <div className="grid grid-cols-2 gap-4">
        {bookings?.map((booking) => {
          return <ServiceCard service={booking} key={booking?._id} />;
        })}
      </div>}
    </div>
  );
};

export default MyBookings;
