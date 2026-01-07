"use client";
import React, { createContext, useState } from "react";

export const BookingContext = createContext(null);
export const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const addBooking = (booking) => {
    setBookings((prev) => [...prev, booking]);
  };
  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((booking) => booking._id !== id));
  };
  const value = { bookings, addBooking, removeBooking };
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
