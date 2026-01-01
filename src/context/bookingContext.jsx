"use client";
import React, { createContext, useState } from "react";

export const BookingContext = createContext(null);
export const BookingContextProvider = ({ children }) => {
  const [bookings, setBookings] = useState(null);
  const value = { bookings, setBookings };
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};
