"use client";
import { BookingContextProvider } from "@/context/bookingContext";
import { UserContextProvider } from "@/context/userContext";
import { SessionProvider } from "next-auth/react";

const Providers = ({ children }) => {
  return (
    <SessionProvider>
      <UserContextProvider>
        <BookingContextProvider>{children}</BookingContextProvider>
      </UserContextProvider>{" "}
    </SessionProvider>
  );
};

export default Providers;
