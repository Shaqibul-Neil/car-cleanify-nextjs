"use client";
import { BookingContext } from "@/context/bookingContext";
import React, { useContext } from "react";

const BookingButton = ({ service }) => {
  const { bookings, addBooking, removeBooking } = useContext(BookingContext);
  const isAlreadyBooked = bookings?.find(
    (booking) => booking._id === service?._id
  );
  console.log(service);
  console.log(bookings);
  return (
    <button
      onClick={() =>
        isAlreadyBooked ? removeBooking(service?._id) : addBooking(service)
      }
      className="
              w-full mt-6 rounded-xl
              bg-blue-600 hover:bg-blue-800
              text-white font-medium
              py-3 transition-colors
            "
    >
      {service?.isDeleted
        ? "Service Unavailable"
        : isAlreadyBooked
        ? "Cancel Booked Service"
        : "Book This Service"}
    </button>
  );
};

export default BookingButton;
